// Test EmailJS Configuration
// Run this in your browser console to test if your EmailJS setup is working

import emailjs from '@emailjs/browser';

// Load from environment variables (available in React app)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xvibugj';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_59m85eq';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'td4FMeOF8LLQBRXV9FYwd';

const testEmail = async () => {
  try {
    const templateParams = {
      from_name: 'Test User',
      from_email: 'test@example.com',
      subject: 'Test Email from Portfolio',
      message: 'This is a test message to verify EmailJS setup.',
      to_email: 'foysaliqbalutsob2202113@gmail.com',
    };

    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    console.log('✅ Email sent successfully!', result);
    return true;
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return false;
  }
};

// Run the test
testEmail();