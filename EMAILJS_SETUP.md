# EmailJS Setup Guide for Contact Form

## 🚀 How to Set Up Email Sending

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Add Email Service
1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Connect your email account and grant permissions
5. **Note your Service ID** (e.g., `service_xxxxxxx`)

### 3. Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}}

Hi Foysal,

You have received a new message from your portfolio website:

From: {{from_name}} ({{from_email}})

Subject: {{subject}}

Message:
{{message}}

Best regards,
Portfolio Contact Form
```

4. **Note your Template ID** (e.g., `template_xxxxxxx`)

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. **Note your Public Key** (e.g., `xxxxxxxxxxxxxx`)

### 5. Update Contact.jsx
Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
const serviceId = 'your_actual_service_id';
const templateId = 'your_actual_template_id';
const publicKey = 'your_actual_public_key';
```

### 6. Test the Form
1. Run your development server
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email for the message

## 📧 Email Template Variables
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message content

## 🔒 Security Note
Your Public Key is safe to use in client-side code. EmailJS handles the security server-side.

## 📊 Free Plan Limits
- 200 emails per month
- Perfect for portfolio websites

## 🆘 Troubleshooting
- Check browser console for errors
- Verify all IDs and keys are correct
- Make sure your email service is properly connected
- Test with different email providers if needed