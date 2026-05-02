# DMCAShield - Integration Setup Guide

## Getting Started with Integrations

### 1. Email (Resend)
1. Go to https://resend.com
2. Sign up / Sign in
3. Go to API Keys → Create API Key
4. Copy the key (starts with `re_`)
5. Enter in Settings page

### 2. SMS & WhatsApp (Twilio)
1. Go to https://console.twilio.com
2. Sign up / Sign in
3. Get Account SID (from dashboard)
4. Get Auth Token (from dashboard)
5. Get Phone Number (from Phone Numbers)
6. For WhatsApp: Enable in Twilio console → WhatsApp

### 3. AI (OpenRouter)
1. Go to https://openrouter.ai
2. Sign up / Sign in  
3. Go to Keys → Create Key
4. Copy the key (starts with `sk-or-`)
5. Enter in Settings page

## Already Configured in Settings Page:
- 🔑 API Configuration (OpenRouter)
- 📤 Email Sending Limits
- 🤖 AI Models
- 📱 SMS/WhatsApp (coming soon)

## Environment Variables (for backend):
```
RESEND_API_KEY=re_...
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...
OPENROUTER_API_KEY=sk-or-...
```