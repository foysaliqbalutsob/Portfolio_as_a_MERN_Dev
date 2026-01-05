// Quick EmailJS Test - Copy and paste this into your browser console
// Replace the placeholders with your actual EmailJS values from .env file

// In your React app, these would be loaded from environment variables:
// const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// For testing, manually set your values here (from your .env file):
const SERVICE_ID = 'service_xvibugj';      // Your actual service ID
const TEMPLATE_ID = 'template_07djh17';    // Your actual template ID
const PUBLIC_KEY = 'td4FMeOF8LLQBRXV9FYwd'; // Your actual public key

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

async function testEmailJS() {
  console.log('🧪 Testing EmailJS connection...');

  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: 'Test User',
        from_email: 'test@example.com',
        subject: 'EmailJS Test from Portfolio',
        message: 'This is a test to verify EmailJS is working correctly.',
        to_email: 'foysaliqbalutsob2202113@gmail.com'
      }
    );

    console.log('✅ SUCCESS! Email sent successfully');
    console.log('Response:', result);
    console.log('📧 Check your email: foysaliqbalutsob2202113@gmail.com');

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
      console.log('🌐 Issue: Possible CORS or network error');
    }
  }
}

// Run the test
testEmailJS();