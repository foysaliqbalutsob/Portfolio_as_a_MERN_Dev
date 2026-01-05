# 🚨 EmailJS Setup Verification Checklist

## ✅ Quick Test Commands

After setting up EmailJS, test your configuration:

### 1. Check if EmailJS is installed:
```bash
npm list @emailjs/browser
```

### 2. Test your keys in browser console:
```javascript
// Open browser console on your portfolio page and run:
import emailjs from '@emailjs/browser';

const testEmail = async () => {
  const result = await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    {
      from_name: 'Test',
      from_email: 'test@example.com',
      subject: 'Test',
      message: 'Test message',
      to_email: 'foysaliqbalutsob2202113@gmail.com'
    },
    'YOUR_PUBLIC_KEY'
  );
  console.log('Success:', result);
};

testEmail();
```

## 🔍 Common Issues & Solutions

### ❌ "The Public Key is invalid"
- **Cause**: Wrong Public Key or not copied correctly
- **Fix**: Double-check your Public Key from EmailJS dashboard → Account → General

### ❌ "Template not found"
- **Cause**: Wrong Template ID
- **Fix**: Verify Template ID from EmailJS dashboard → Email Templates

### ❌ "Service not found"
- **Cause**: Wrong Service ID
- **Fix**: Check Service ID from EmailJS dashboard → Email Services

### ❌ "Daily limit exceeded"
- **Cause**: Free plan limit reached (200 emails/month)
- **Fix**: Wait for monthly reset or upgrade plan

### ❌ "Invalid email"
- **Cause**: Email service not properly connected
- **Fix**: Reconnect your email service in EmailJS dashboard

## 📧 Email Template Variables Required

Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (foysaliqbalutsob2202113@gmail.com)

## 🧪 Step-by-Step Testing

1. **Update Contact.jsx** with your real IDs
2. **Save and refresh** your portfolio
3. **Fill out the contact form** with test data
4. **Submit and check** your email
5. **Check browser console** for any errors

## 📞 Need Help?

If you're still having issues:
1. Check the browser console for detailed error messages
2. Verify all IDs are copied exactly (no extra spaces)
3. Make sure your email service is active in EmailJS
4. Try sending a test email directly from EmailJS dashboard

## 🎯 Expected Result

After proper setup, you should receive an email like:
```
Subject: [Your Subject]

Hi Foysal,

You have received a new message from your portfolio website:

From: [Visitor Name] ([visitor@email.com])

Subject: [Subject]

Message:
[Message content]

Best regards,
Portfolio Contact Form
```