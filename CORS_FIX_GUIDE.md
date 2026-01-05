# 🚨 CORS Error Fix for EmailJS

## ❌ Current Error: "Access-Control-Allow-Origin header" missing

This CORS error happens because your EmailJS credentials are not properly configured. You still have placeholder values instead of real EmailJS keys.

## ✅ SOLUTION: Complete EmailJS Setup

### Step 1: Get Your Real EmailJS Credentials

1. **Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)**
2. **Sign in** to your account

3. **Get Service ID:**
   - Click **"Email Services"** in left menu
   - Copy the **Service ID** (format: `service_xxxxxxxxxx`)

4. **Get Template ID:**
   - Click **"Email Templates"** in left menu
   - Copy the **Template ID** (format: `template_xxxxxxxxxx`)

5. **Get Public Key:**
   - Click **"Account"** → **"General"**
   - Copy the **Public Key** (long string like `ABC123def456...`)

### Step 2: Update Contact.jsx

Replace the placeholder values in `src/components/Contact.jsx` (around line 120):

```javascript
const serviceId = 'service_your_actual_id_here';     // ← Replace this
const templateId = 'template_your_actual_id_here';   // ← Replace this
const publicKey = 'your_actual_public_key_here';     // ← Replace this
```

### Step 3: Test with HTML File

1. Open `test-emailjs.html` in your browser
2. Replace the placeholder values:
   ```javascript
   emailjs.init('YOUR_ACTUAL_PUBLIC_KEY');
   emailjs.send('YOUR_ACTUAL_SERVICE_ID', 'YOUR_ACTUAL_TEMPLATE_ID', templateParams)
   ```
3. Click "Test Email Sending"
4. Check your email: `foysaliqbalutsob2202113@gmail.com`

### Step 4: Update React App

Once the HTML test works, update your `Contact.jsx` with the same working values.

## 🔍 Verify Your EmailJS Setup

### Check Dashboard Status:
- **Email Services**: Should show "Connected" ✅
- **Email Templates**: Should have 1 active template ✅
- **Account**: Should show valid Public Key ✅

### Common Issues:

#### ❌ "Service ID not found"
- Your Service ID is wrong
- Create a new email service in EmailJS

#### ❌ "Template not found"
- Your Template ID is wrong
- Create a new email template

#### ❌ "Public Key invalid"
- Your Public Key is wrong
- Regenerate it in Account settings

#### ❌ CORS Error Persists
- Your account might be suspended
- Check EmailJS dashboard for account status
- Try creating a new EmailJS account

## 🆘 Alternative Solutions (If EmailJS Fails)

### Option 1: Use Formspree (Easier Setup)
```bash
npm install @formspree/react
```

### Option 2: Use Netlify Forms (If deploying to Netlify)
- Built-in form handling
- No API keys needed

### Option 3: Use a Backend Service
- Deploy a simple Node.js/Express server
- Handle email sending server-side

## 📞 Quick Debug Commands

### Test EmailJS Connection:
```javascript
// Run in browser console
import emailjs from '@emailjs/browser';
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  to_email: 'foysaliqbalutsob2202113@gmail.com',
  from_name: 'Test',
  message: 'Test'
}).then(r => console.log('Works!', r)).catch(e => console.error('Error:', e));
```

### Check EmailJS Version:
```bash
npm list @emailjs/browser
```

## 🎯 Expected Result

After proper setup, you should receive emails like:
```
Subject: [User's Subject]

Hi Foysal,

You have received a new message from your portfolio website:

From: John Doe (john@example.com)

Subject: Project Inquiry

Message:
Hi, I'm interested in your React development services...

Best regards,
Portfolio Contact Form
```

## 🚀 Next Steps

1. **Get real EmailJS credentials** from dashboard
2. **Test with HTML file** first
3. **Update Contact.jsx** with working values
4. **Test the contact form** on your portfolio
5. **Check your email** for incoming messages

**The CORS error will disappear once you use real EmailJS credentials!** 🎉