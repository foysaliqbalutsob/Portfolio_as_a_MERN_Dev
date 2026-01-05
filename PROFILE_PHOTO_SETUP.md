# How to Add Your Profile Photo

## Option 1: Replace the SVG Placeholder
1. Add your professional photo to the `public` folder (e.g., `profile.jpg`, `profile.png`)
2. Update the image source in `src/components/Banner.jsx`:
   ```jsx
   <img
     src="/profile.jpg"  // Change this to your image filename
     alt="Foysal - Full Stack Developer"
     className="w-full h-full object-cover"
   />
   ```

## Option 2: Use an External Image URL
1. Upload your photo to an image hosting service (Imgur, Cloudinary, etc.)
2. Update the image source in `src/components/Banner.jsx`:
   ```jsx
   <img
     src="https://your-image-url.com/profile.jpg"
     alt="Foysal - Full Stack Developer"
     className="w-full h-full object-cover"
   />
   ```

## Image Recommendations:
- **Format**: JPG, PNG, or WebP
- **Size**: At least 400x400 pixels (square aspect ratio preferred)
- **Style**: Professional headshot with good lighting
- **Background**: Plain or blurred background works best

## Current Placeholder:
The current SVG placeholder will show until you replace it with your actual photo. It includes a hover effect that reminds you to add your photo.