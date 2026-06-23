import mongoose from 'mongoose'

const leadSchema = new mongoose.Schema({
  name:                { type: String, required: true },
  phone:               { type: String, required: true },
  email:               { type: String, required: true },
  bio:                 { type: String, default: '' },
  address:             { type: String, default: '' },
  instagram:           { type: String, default: '' },
  googleBusinessProfile:{ type: String, default: '' },
  facebook:            { type: String, default: '' },
  linkedin:            { type: String, default: '' },
  websiteType:         { type: String, default: '' },
  websiteName:         { type: String, default: '' },
  requirement:         { type: String, default: '' },
  createdAt:           { type: Date, default: Date.now },
})

export default mongoose.model('Lead', leadSchema)
