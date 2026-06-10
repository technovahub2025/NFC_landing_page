// NFC DIGITAL BUSINESS CARD ASSISTANT DATA
// Centralized content for the assistant persona, hero copy, and background cards.
import {
  Rocket,
  Building2,
  Trophy,
  Globe,
  Code2,
  Bot,
  BarChart3,
  Layers3,
  Cpu,
  Cloud,
  Shield,
} from 'lucide-react'

export const COMPANY_PROFILE = `NFC Digital Business Card Assistant

Welcome to the NFC Digital Business Card Platform.

I can help you create, manage, and share your digital business profile.

Features Available

• NFC Tap to Share Profile
• QR Code Sharing
• Profile Link Sharing
• Contact Saving
• Social Media Integration
• Business Information Management
• Instant Profile Updates

Profile Information Supported

Users can create a digital profile containing:

* Name
* Phone Number
* Email Address
* Bio
* Address
* Profile Photo
* Instagram
* Google Business Profile
* Facebook
* LinkedIn
* Personal or Company Website

How does NFC sharing work?

Simply tap the NFC card on a compatible smartphone. The user's device will automatically open your digital profile page.

How does QR sharing work?

Every profile includes a QR code. Users can scan the QR code to instantly open the profile.

Can I share my profile without an NFC card?

Yes. Every profile has a unique shareable URL that can be sent through WhatsApp, Email, SMS, Instagram, LinkedIn, Facebook, or any messaging platform.

Contact Saving

Android:

* Saves Name
* Saves Phone Number

iPhone (iOS):

* Saves Name
* Saves Phone Number
* Saves Email
* Saves Address
* Saves Website
* Saves Additional Contact Information

How do I update my information?

Update your profile inside the application. Changes are reflected immediately without rewriting the NFC card.

Do I need an app to view a profile?

No. Profiles open directly in the phone browser.

Supported Sharing Methods

✓ NFC Card
✓ QR Code
✓ Direct Link Sharing
✓ WhatsApp Sharing
✓ Email Sharing
✓ Social Media Sharing

Frequently Asked Questions

Q: Can I change my profile after creating it?
A: Yes. You can edit your profile anytime.

Q: Do I need to rewrite the NFC card after updating my profile?
A: No. The card contains only the profile URL.

Q: What happens if a phone does not support NFC?
A: Users can still access the profile through the QR code or profile link.

Q: Is the profile publicly accessible?
A: Only users with the profile link, NFC card, or QR code can access it.

Q: Can businesses use this solution?
A: Yes. It is suitable for professionals, freelancers, sales teams, startups, and businesses.

Benefits

✓ Paperless Business Card
✓ Eco-Friendly Networking
✓ Instant Contact Exchange
✓ Professional Digital Presence
✓ Easy Social Media Access
✓ Multiple Sharing Options
✓ Real-Time Profile Updates
✓ Mobile Friendly
✓ No App Installation Required

Ask me about profile creation, NFC setup, QR sharing, social media links, or contact saving.`

export const TVH_STATS = [
  {
    n: 'NFC',
    l: 'Tap to Share',
    icon: Rocket,
    color: '#3B82F6',
  },
  {
    n: 'QR',
    l: 'Instant Scan',
    icon: Globe,
    color: '#F97316',
  },
  {
    n: 'LINK',
    l: 'Profile URL',
    icon: Building2,
    color: '#10B981',
  },
  {
    n: 'LIVE',
    l: 'Profile Updates',
    icon: Trophy,
    color: '#EAB308',
  },
]

export const TVH_CLIENTS = ['NFC Card', 'QR Code', 'Profile Link', 'WhatsApp', 'Email', 'Instagram', 'LinkedIn', 'Facebook', 'Browser']
export const TVH_PARTNERS = ['Professionals', 'Freelancers', 'Sales Teams', 'Startups', 'Businesses', 'Creators']

export const COURSES = [
  {
    icon: Globe,
    color: '#3B82F6',
    name: 'Profile Sharing',
    dur: 'Instant',
    desc: 'NFC, QR, and link access',
  },
  {
    icon: Code2,
    color: '#F59E0B',
    name: 'Profile Management',
    dur: 'Always on',
    desc: 'Update details in real time',
  },
  {
    icon: Bot,
    color: '#8B5CF6',
    name: 'Contact Saving',
    dur: 'One tap',
    desc: 'Save info directly to phone',
  },
  {
    icon: BarChart3,
    color: '#10B981',
    name: 'Social Links',
    dur: 'Flexible',
    desc: 'Instagram, Facebook, LinkedIn',
  },
  {
    icon: Layers3,
    color: '#EC4899',
    name: 'Business Profile',
    dur: 'Custom',
    desc: 'Personal or company website',
  },
  {
    icon: Cpu,
    color: '#EF4444',
    name: 'NFC Card',
    dur: 'Tap',
    desc: 'Open profile on compatible phones',
  },
  {
    icon: Cloud,
    color: '#06B6D4',
    name: 'QR Sharing',
    dur: 'Scan',
    desc: 'Share anywhere, anytime',
  },
  {
    icon: Shield,
    color: '#14B8A6',
    name: 'Privacy Control',
    dur: 'Managed',
    desc: 'Profile access by link/card/QR',
  },
]

export const NEXION_PLANS = [
  {
    name: 'STARTER',
    price: 'Basic',
    unit: '',
    hot: false,
    cta: 'Create Profile',
    feats: ['NFC Tap to Share', 'QR Code', 'Profile Link', 'Social media links', 'Contact saving'],
  },
  {
    name: 'GROWTH',
    price: 'Pro',
    unit: '',
    hot: true,
    cta: 'Most Popular',
    feats: ['Everything in Starter', 'Instant updates', 'Custom bio', 'Website support', 'Priority help'],
  },
  {
    name: 'ENTERPRISE',
    price: 'Custom',
    unit: '',
    hot: false,
    cta: 'Contact Sales',
    feats: ['Team profiles', 'Bulk cards', 'Branding', 'Custom integrations', 'Dedicated support'],
  },
]

export const CONTACT = {
  phone1: '+91 9629600230',
  phone2: '+91 9003530230',
  email: 'technovahubcareer@gmail.com',
  website: 'https://technovahub.in',
  address: 'No.48 Lawspet Main Road, Puducherry - 605008',
  whatsapp: 'https://wa.me/919629600230',
}
