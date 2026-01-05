# 🔐 Environment Variables Setup Guide

## 📁 Files Created/Updated

### ✅ `.env` - Your Private Configuration
- Contains your actual EmailJS credentials
- **Never commit this file to git**
- Specific to your local development

### ✅ `.env.example` - Template File
- Shows what environment variables are needed
- Safe to commit to git
- Use as a reference for other developers

### ✅ `.gitignore` - Updated
- Added `.env*` files to prevent accidental commits
- Protects your sensitive credentials

## 🚀 How to Set Up Environment Variables

### Step 1: Get Your EmailJS Credentials

1. Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Sign in to your account
3. Get these three values:
   - **Service ID**: From "Email Services" (e.g., `service_abc123def456`)
   - **Template ID**: From "Email Templates" (e.g., `template_xyz789ghi012`)
   - **Public Key**: From "Account" → "General" (long string)

### Step 2: Configure Your .env File

Open `.env` in your project root and replace the placeholders:

```env
VITE_EMAILJS_SERVICE_ID=service_your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_string
```

### Step 3: Restart Your Development Server

```bash
# Stop your current server (Ctrl+C)
# Then restart it
npm run dev
```

## 🔍 How It Works

### In Your React Components

```javascript
// Contact.jsx - Environment variables are automatically loaded
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

### Vite Environment Variable Rules

- **Must be prefixed with `VITE_`** to be accessible in client-side code
- **Automatically loaded** by Vite during development
- **Type**: All environment variables are strings
- **Undefined if missing**: Returns `undefined` if not set

## 🧪 Testing Your Setup

### Method 1: Contact Form Test
1. Fill out your portfolio's contact form
2. Submit it
3. Check your email: `foysaliqbalutsob2202113@gmail.com`

### Method 2: Browser Console Test
1. Open your portfolio in browser
2. Press `F12` → Console tab
3. Run this code:
```javascript
// Test if environment variables are loaded
console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'Set ✅' : 'Missing ❌');
```

### Method 3: HTML Test File
1. Open `test-emailjs.html` in browser
2. Replace placeholders with your `.env` values
3. Click "Test Email Sending"

## 🔒 Security Best Practices

### ✅ What We Did Right
- **Environment variables** instead of hardcoded values
- **.env in .gitignore** to prevent accidental commits
- **.env.example** as a safe template
- **VITE_ prefix** for client-side access

### ✅ Additional Security Tips
- **Never commit .env** files to version control
- **Use different keys** for development/production
- **Rotate keys** periodically
- **Monitor usage** in EmailJS dashboard

## 🚨 Troubleshooting

### ❌ "import.meta.env.VITE_EMAILJS_SERVICE_ID is undefined"
- **Cause**: Environment variable not set or server not restarted
- **Fix**: Check your `.env` file and restart the dev server

### ❌ "EmailJS environment variables are not configured"
- **Cause**: Missing or empty environment variables
- **Fix**: Verify all three variables are set in `.env`

### ❌ Still getting CORS errors
- **Cause**: Invalid EmailJS credentials
- **Fix**: Double-check your Service ID, Template ID, and Public Key

## 📋 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service identifier | `service_abc123def456` |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template identifier | `template_xyz789ghi012` |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key | `ABC123def456ghi789...` |

## 🎯 Next Steps

1. **Update your `.env`** with real EmailJS credentials
2. **Restart your dev server**: `npm run dev`
3. **Test the contact form** on your portfolio
4. **Verify email delivery** to `foysaliqbalutsob2202113@gmail.com`

**Your contact form is now secure and properly configured!** 🔐✨