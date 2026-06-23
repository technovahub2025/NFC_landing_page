import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import fetch from 'node-fetch'
import mongoose from 'mongoose'
import Lead from './models/Lead.js'
import ChatSession from './models/ChatSession.js'
import Groq from 'groq-sdk'

const app = express()

const PORT = process.env.PORT || 3001
const GROQ_API_KEY = process.env.GROQ_API_KEY
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/technovahub'

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL

const groq = new Groq({
  apiKey: GROQ_API_KEY,
})

if (!GROQ_API_KEY) {
  console.error('GROQ_API_KEY is not set.')
  process.exit(1)
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message)
    process.exit(1)
  })

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
)

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://127.0.0.1:3000',
      'http://localhost:3001',
      'http://127.0.0.1:3001',
      'http://localhost:5173',
      'http://127.0.0.1:5173',
      'https://technovahub.in',
      'https://www.technovahub.in',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
    credentials: true,
  })
)

app.options('*', cors())
app.use(express.json({ limit: '6mb' }))

const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many requests. Please wait a moment and try again.',
  },
})

const leadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many submissions. Please try again later.',
  },
})

function stripHtml(str) {
  return String(str).replace(/<[^>]*>/g, '').trim()
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidUUID(id) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
}

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  })
})

app.post('/api/chat', chatLimiter, async (req, res) => {
  const { contents, sessionId } = req.body

  if (!contents || !Array.isArray(contents)) {
    return res.status(400).json({
      error: 'Invalid request',
      details: 'contents must be a non-empty array.',
    })
  }

  const lastUserContent = contents.filter((c) => c.role === 'user').pop()
  const userText = lastUserContent?.parts?.[0]?.text || ''

  if (!userText.trim()) {
    return res.status(400).json({
      error: 'Invalid request',
      details: 'Message must be a non-empty string.',
    })
  }

  if (userText.length > 2000) {
    return res.status(400).json({
      error: 'Invalid request',
      details: 'Message must not exceed 2000 characters.',
    })
  }

  try {
    const messages = contents.map((item) => ({
      role: item.role === 'model' ? 'assistant' : item.role,
      content: item.parts?.[0]?.text || '',
    }))

    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages,
      temperature: 0.7,
    })

    const fullResponse =
      completion.choices?.[0]?.message?.content ||
      'Sorry, I could not generate a response.'

    res.json({
      reply: fullResponse,
    })

    if (sessionId && isValidUUID(sessionId)) {
      await ChatSession.findOneAndUpdate(
        { sessionId },
        {
          $push: {
            messages: {
              $each: [
                { role: 'user', content: userText, at: new Date() },
                { role: 'assistant', content: fullResponse, at: new Date() },
              ],
            },
          },
          $set: { updatedAt: new Date() },
          $setOnInsert: { createdAt: new Date() },
        },
        { upsert: true, new: true }
      )
    }
  } catch (err) {
    console.error('Groq error:', err.message)
    return res.status(500).json({
      error: 'Groq API error. Please try again later.',
    })
  }
})

app.get('/api/sessions/:sessionId', async (req, res) => {
  const { sessionId } = req.params

  if (!isValidUUID(sessionId)) {
    return res.status(400).json({
      error: 'Invalid session ID.',
    })
  }

  try {
    const session = await ChatSession.findOne({ sessionId })

    if (!session) {
      return res.json({ messages: [] })
    }

    return res.json({
      messages: session.messages,
    })
  } catch (err) {
    return res.status(500).json({
      error: 'Failed to fetch session.',
    })
  }
})

app.post('/api/leads', leadLimiter, async (req, res) => {
  const errors = {}

  const {
    name,
    phone,
    email,
    bio,
    address,
    instagram,
    googleBusinessProfile,
    facebook,
    linkedin,
    websiteType,
    websiteName,
    requirement,
  } = req.body

  const cleanName = stripHtml(name || '')
  if (!cleanName || cleanName.length < 2 || cleanName.length > 50) {
    errors.name = 'Name must be 2-50 characters.'
  }

  const cleanPhone = stripHtml(phone || '')
  if (!/^(\+91[\s-]?)?[6-9]\d{9}$/.test(cleanPhone.replace(/[\s-]/g, ''))) {
    errors.phone = 'Enter a valid Indian mobile number.'
  }

  const cleanEmail = stripHtml(email || '')
  if (!cleanEmail || !isValidEmail(cleanEmail)) {
    errors.email = 'Enter a valid email address.'
  }

  const cleanBio = stripHtml(bio || '')
  if (cleanBio.length > 500) {
    errors.bio = 'Bio must not exceed 500 characters.'
  }

  const cleanAddress = stripHtml(address || '')
  if (cleanAddress.length > 500) {
    errors.address = 'Address must not exceed 500 characters.'
  }

  const cleanInstagram = stripHtml(instagram || '')
  if (cleanInstagram.length > 200) {
    errors.instagram = 'Instagram must not exceed 200 characters.'
  }

  const cleanGbp = stripHtml(googleBusinessProfile || '')
  if (cleanGbp.length > 300) {
    errors.googleBusinessProfile =
      'Google Business Profile must not exceed 300 characters.'
  }

  const cleanFacebook = stripHtml(facebook || '')
  if (cleanFacebook.length > 200) {
    errors.facebook = 'Facebook must not exceed 200 characters.'
  }

  const cleanLinkedin = stripHtml(linkedin || '')
  if (cleanLinkedin.length > 200) {
    errors.linkedin = 'LinkedIn must not exceed 200 characters.'
  }

  const cleanWebsiteType = stripHtml(websiteType || '')
  if (cleanWebsiteType && !['personal', 'company'].includes(cleanWebsiteType)) {
    errors.websiteType = 'Choose either personal or company website.'
  }

  const cleanWebsiteName = stripHtml(websiteName || '')
  if (cleanWebsiteName.length > 200) {
    errors.websiteName = 'Website name must not exceed 200 characters.'
  }

  const cleanReq = stripHtml(requirement || '')
  if (cleanReq.length > 1000) {
    errors.requirement = 'Additional notes must not exceed 1000 characters.'
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors })
  }

  const leadData = {
    name: cleanName,
    phone: cleanPhone,
    email: cleanEmail,
    bio: cleanBio,
    address: cleanAddress,
    instagram: cleanInstagram,
    googleBusinessProfile: cleanGbp,
    facebook: cleanFacebook,
    linkedin: cleanLinkedin,
    websiteType: cleanWebsiteType,
    websiteName: cleanWebsiteName,
    requirement: cleanReq,
    submittedAt: new Date().toISOString(),
  }

  try {
    await Lead.create(leadData)

    if (GOOGLE_SCRIPT_URL) {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        })
      } catch (scriptErr) {
        console.error('Google Apps Script error:', scriptErr.message)
      }
    }

    return res.status(201).json({
      message: 'Lead saved successfully.',
    })
  } catch (err) {
    console.error('Failed to save lead:', err.message)

    return res.status(500).json({
      error: 'Failed to save lead. Please try again.',
    })
  }
})

app.get('/api/leads/count', async (_req, res) => {
  try {
    const count = await Lead.countDocuments()
    return res.json({ count })
  } catch (err) {
    return res.status(500).json({
      error: 'Failed to count leads.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`TechnovaHub server running on http://localhost:${PORT}`)
})