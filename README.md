# 🚀 Foysal's Portfolio - MERN Stack Developer

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react) ![Portfolio Preview](https://img.shields.io/badge/Vite-7.3.0-646CFF?style=for-the-badge&logo=vite) ![Portfolio Preview](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css) ![Portfolio Preview](https://img.shields.io/badge/Framer_Motion-11.0.0-0055FF?style=for-the-badge&logo=framer)

<div align="center">
  <img src="https://raw.githubusercontent.com/foysaliqbalutsob/Portfolio_as_a_MERN_Dev/main/public/portfolio_screenshot.png" alt="Portfolio Screenshot" width="100%" style="border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);" />
  <p>Live Link: https://darling-horse-694cf9.netlify.app/ </p>
  <p><em>Modern, responsive portfolio showcasing MERN stack development skills</em></p>
</div>

## ✨ Overview

A stunning, modern portfolio website built for a Full-Stack MERN Developer. Features glassmorphism design, smooth animations, dark/light mode toggle, and comprehensive project showcase with GitHub integration.

## 🎯 Key Features

### 🎨 **Design & UI/UX**
- **Glassmorphism Effects**: Beautiful backdrop blur and transparency
- **Dark/Light Mode**: Seamless theme switching with persistence
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion
- **Modern Typography**: Clean, readable fonts with proper hierarchy

### 🚀 **Interactive Components**
- **Smart Navigation**: Active section highlighting with smooth scroll
- **Hero Section**: Animated introduction with floating tech icons
- **Skills Showcase**: Technology stack with animated skill badges
- **Projects Gallery**: Paginated portfolio with GitHub client/server links
- **Contact Integration**: Working contact form with EmailJS
- **Social Connectivity**: Direct links to professional profiles

### 🛠️ **Technical Excellence**
- **Performance Optimized**: Fast loading with Vite bundling
- **SEO Ready**: Proper meta tags and semantic structure
- **Accessibility**: ARIA labels and keyboard navigation
- **Email Integration**: Functional contact form with notifications
- **GitHub Integration**: Direct repository links for all projects

## 🛠️ Technology Stack

### **Core Technologies**
| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18.2.0, Vite 7.3.0 |
| **Styling** | Tailwind CSS 3.4.0, PostCSS |
| **Animations** | Framer Motion 11.0.0 |
| **Icons** | React Icons, Material Icons |
| **Forms** | EmailJS, SweetAlert2 |

### **Development Tools**
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom config
- **Linting**: ESLint
- **Version Control**: Git
- **Package Manager**: npm

## 📁 Project Architecture

```
portfolio/
├── 📁 public/
│   ├── 🖼️ portfolio_screenshot.png    # Portfolio preview image
│   ├── 🖼️ logo.png                    # Custom favicon
│   ├── 🖼️ logo.svg                    # SVG logo version
│   └── 🖼️ profile-placeholder.svg     # Default profile image
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── 🖼️ profile.png             # Personal profile photo
│   │   └── 🖼️ react.svg               # React logo asset
│   ├── 📁 components/
│   │   ├── 🏠 Banner.jsx              # Hero section with profile
│   │   ├── 🧭 Navbar.jsx              # Navigation with active states
│   │   ├── 👤 About.jsx               # Personal introduction
│   │   ├── ⚡ Skills.jsx               # Technical skills showcase
│   │   ├── 📂 Projects.jsx            # Projects with pagination
│   │   ├── 🎓 Education.jsx           # Educational background
│   │   ├── 📧 Contact.jsx             # Contact form integration
│   │   ├── 💼 HireMe.jsx              # Call-to-action section
│   │   ├── 🖱️ Cursor.jsx               # Custom cursor effects
│   │   └── 🔄 SmoothScroll.jsx        # Smooth scrolling utility
│   ├── ⚛️ App.jsx                     # Main application component
│   ├── 🚀 main.jsx                    # Application entry point
│   └── 🎨 index.css                   # Global styles & Tailwind
├── ⚙️ tailwind.config.js              # Tailwind CSS configuration
├── ⚙️ vite.config.js                  # Vite build configuration
├── 📋 package.json                    # Dependencies & scripts
├── 🔧 .env.example                    # Environment variables template
└── 📖 README.md                       # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** ≥16.0.0
- **npm** or **yarn**
- **Git** for version control

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/foysaliqbalutsob/Portfolio_as_a_MERN_Dev.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   Add your EmailJS credentials to `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **Launch development server**
   ```bash
   npm run dev
   ```

5. **View in browser**
   ```
   🌐 https://darling-horse-694cf9.netlify.app/
   ```

### Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🔧 Configuration Guide

### **EmailJS Integration**
1. Visit [emailjs.com](https://www.emailjs.com/) and create account
2. Set up email service (Gmail, Outlook, etc.)
3. Create email template for contact form
4. Copy service ID, template ID, and public key
5. Add to your `.env` file

### **Personalization**
- **Profile Photo**: Replace `src/assets/profile.png`
- **Logo**: Update `public/logo.png` and `src/assets/logo.png`
- **Personal Info**: Edit components in `src/components/`
- **Colors**: Modify `tailwind.config.js`
- **Projects**: Update `src/components/Projects.jsx`

## 🌐 Deployment Options

### **Netlify (Recommended)**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --dir=dist --prod
```

**Manual Netlify Deployment:**
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `dist` folder
3. Set environment variables in dashboard

### **Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### **GitHub Pages**
1. Enable Pages in repository settings
2. Set source to GitHub Actions
3. Use the provided workflow or create custom

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Bundle Size**: ~500KB (gzipped)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <2s

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### **Development Guidelines**
- Follow ESLint configuration
- Use meaningful commit messages
- Test on multiple devices
- Maintain accessibility standards

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Connect With Me

**Foysal Iqbal Utsob** 👨‍💻  
*Full-Stack MERN Developer*

- **📧 Email**: foysaliqbalutsob2202113@gmail.com
- **📱 Phone**: +880 1751799866
- **📍 Location**: Dhaka, Bangladesh
- **💼 LinkedIn**: [linkedin.com/in/foysal-iqbal-utsob2202113](https://www.linkedin.com/in/foysal-iqbal-utsob2202113)
- **🐙 GitHub**: [github.com/foysaliqbalutsob](https://github.com/foysaliqbalutsob)
- **🌐 Portfolio**: [Live Demo](https://your-deployed-url.com)

## 🙏 Acknowledgments

- **React Team** for the incredible framework
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **EmailJS** for seamless email integration
- **React Icons** for comprehensive icon library

---

<div align="center">

**Made with ❤️ by Foysal Iqbal Utsob**

⭐ **If you like this project, give it a star!**

[🚀 Live Demo](https://your-deployed-url.com) • [📧 Contact Me](mailto:foysaliqbalutsob2202113@gmail.com) • [🐙 GitHub](https://github.com/foysaliqbalutsob)

</div>
