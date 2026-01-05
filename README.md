# 🚀 Foysal's Portfolio - MERN Stack Developer

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue) ![Portfolio Preview](https://img.shields.io/badge/Vite-7.3.0-646CFF) ![Portfolio Preview](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC) ![Portfolio Preview](https://img.shields.io/badge/Framer_Motion-11.0.0-0055FF)

A modern, responsive portfolio website showcasing my skills as a Full-Stack MERN Developer. Built with React, Vite, and Tailwind CSS, featuring smooth animations, dark mode, and interactive elements.

![Portfolio Screenshot](./public/screenshot.png)

## ✨ Features

### 🎨 **Modern UI/UX Design**
- **Glassmorphism Design**: Beautiful backdrop blur effects and transparent elements
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for fluid interactions

### 🚀 **Interactive Components**
- **Dynamic Navbar**: Active section highlighting with smooth scrolling
- **Hero Banner**: Animated introduction with floating tech icons
- **Skills Section**: Technology stack with animated skill tags
- **Projects Showcase**: Paginated project gallery with GitHub links
- **Contact Form**: EmailJS integration with form validation
- **Social Links**: Direct links to professional profiles

### 🛠️ **Technical Features**
- **Performance Optimized**: Fast loading with Vite bundler
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels and keyboard navigation
- **Contact Integration**: Working contact form with email notifications
- **GitHub Integration**: Direct links to client-side and server-side repositories

## 🛠️ Tech Stack

### **Frontend**
- **React 18.2.0** - Modern React with hooks and concurrent features
- **Vite 7.3.0** - Fast build tool and development server
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Framer Motion 11.0.0** - Animation library for React

### **Backend Integration**
- **EmailJS** - Contact form email service
- **SweetAlert2** - Beautiful modal dialogs

### **Development Tools**
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### **Icons & Fonts**
- **Material Icons** - Google's material design icons
- **React Icons** - Popular icon libraries (Simple Icons, Ant Design)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── logo.png              # Custom logo favicon
│   ├── logo.svg              # SVG version of logo
│   ├── profile-placeholder.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── logo.png          # Logo for navbar
│   │   ├── profile.png       # Profile photo
│   │   └── react.svg
│   ├── components/
│   │   ├── Banner.jsx        # Hero section with profile
│   │   ├── Navbar.jsx        # Navigation with active states
│   │   ├── About.jsx         # About section
│   │   ├── Skills.jsx        # Skills with tech icons
│   │   ├── Projects.jsx      # Projects with pagination
│   │   ├── Education.jsx     # Education background
│   │   ├── Contact.jsx       # Contact form
│   │   ├── HireMe.jsx        # Call-to-action section
│   │   └── Cursor.jsx        # Custom cursor effects
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
├── .env.example              # Environment variables template
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/foysaliqbalutsob/Portfolio_as_a_MERN_Dev.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🔧 Configuration

### EmailJS Setup

1. **Create EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Create email service** (Gmail, Outlook, etc.)
3. **Create email template**
4. **Get your credentials** (Service ID, Template ID, Public Key)
5. **Add to environment variables**

### Customization

#### **Personal Information**
- Update profile photo in `src/assets/profile.png`
- Edit personal details in `src/components/Banner.jsx`
- Modify contact information in `src/components/Contact.jsx`

#### **Projects**
- Add new projects in `src/components/Projects.jsx`
- Include GitHub client/server links
- Add project screenshots

#### **Styling**
- Colors: Edit `tailwind.config.js`
- Animations: Modify Framer Motion settings
- Layout: Adjust responsive breakpoints

## 📱 Features in Detail

### **Responsive Design**
- **Mobile-first approach** with Tailwind CSS
- **Breakpoint optimization** for tablets and desktops
- **Touch-friendly interactions**

### **Performance**
- **Code splitting** with Vite
- **Image optimization** with modern formats
- **Lazy loading** for better performance
- **Minified bundles** for production

### **Accessibility**
- **Semantic HTML** structure
- **ARIA labels** for screen readers
- **Keyboard navigation** support
- **Color contrast** compliance

## 🌐 Deployment

### **Netlify (Recommended)**
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### **Vercel**
1. Import from GitHub
2. Configure build settings
3. Add environment variables
4. Deploy automatically

### **Manual Deployment**
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Foysal Iqbal Utsob**
- **Email**: foysaliqbalutsob2202113@gmail.com
- **Phone**: +880 1751799866
- **Location**: Dhaka, Bangladesh
- **LinkedIn**: [linkedin.com/in/foysal-iqbal-utsob2202113](https://www.linkedin.com/in/foysal-iqbal-utsob2202113)
- **GitHub**: [github.com/foysaliqbalutsob](https://github.com/foysaliqbalutsob)

## 🙏 Acknowledgments

- **React** team for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **EmailJS** for contact form functionality
- **React Icons** for the icon collection

---

⭐ **Star this repo** if you found it helpful!

Made with ❤️ by Foysal Iqbal Utsob
