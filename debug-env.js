// Debug Environment Variables
// Add this to your browser console to check if env vars are loading

console.log('🔍 Environment Variables Debug:');
console.log('VITE_EMAILJS_SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log('VITE_EMAILJS_TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log('VITE_EMAILJS_PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? '✅ Set' : '❌ Not set');

// Check if all required vars exist
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!serviceId || !templateId || !publicKey) {
  console.error('❌ Missing environment variables! Check your .env file.');
  console.log('Expected values:');
  console.log('- VITE_EMAILJS_SERVICE_ID should be set');
  console.log('- VITE_EMAILJS_TEMPLATE_ID should be set');
  console.log('- VITE_EMAILJS_PUBLIC_KEY should be set');
} else {
  console.log('✅ All environment variables are loaded correctly!');
}