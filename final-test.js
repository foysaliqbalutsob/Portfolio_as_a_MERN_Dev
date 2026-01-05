// Quick EmailJS Test - Run this in browser console
// Make sure you're on your portfolio page first

import emailjs from '@emailjs/browser';

// Get values from environment variables (if available)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xvibugj';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_59m85eq';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'td4FMeOF8LLQBRXV9FYwd';

console.log('🧪 Testing EmailJS with your credentials...');
console.log('Service ID:', SERVICE_ID);
console.log('Template ID:', TEMPLATE_ID);
console.log('Public Key:', PUBLIC_KEY ? 'Set' : 'Not set');

async function testEmail() {
  try {
    // Initialize EmailJS
    emailjs.init(PUBLIC_KEY);

    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: 'Test from Portfolio',
        from_email: 'test@portfolio.com',
        subject: 'Portfolio Contact Form Test',
        message: 'This is a test message to verify EmailJS is working correctly.',
        to_email: 'foysaliqbalutsob2202113@gmail.com'
      }
    );

    console.log('✅ SUCCESS! Email sent successfully');
    console.log('Response:', result);
    console.log('📧 Check your email: foysaliqbalutsob2202113@gmail.com');

    return true;
  } catch (error) {
    console.error('❌ FAILED! Email sending failed');
    console.error('Error details:', error);

    if (error.text?.includes('Public Key')) {
      console.log('🔑 Issue: Invalid Public Key - Check your EmailJS dashboard');
    } else if (error.text?.includes('Service')) {
      console.log('🔧 Issue: Invalid Service ID - Check your Email Services');
    } else if (error.text?.includes('Template')) {
      console.log('📝 Issue: Invalid Template ID - Check your Email Templates');
    } else {
      console.log('🌐 Issue: Network or CORS error');
    }

    return false;
  }
}

// Run the test
testEmail();