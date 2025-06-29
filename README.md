# NCL Systems Website

A modern, responsive website for NCL SYSTEMS PVT LTD, showcasing their comprehensive IT and telecommunications solutions. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Project Overview

NCL SYSTEMS PVT LTD is a leading provider of IT and telecommunications solutions, offering services ranging from network infrastructure to security systems. This website serves as their digital presence, highlighting their expertise, client portfolio, and service offerings.

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Engaging hover effects and transitions
- **Professional UI**: Clean, modern design with gradient backgrounds
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content

### 📱 Pages & Sections
- **Home Page**: Hero section, features, client showcase, testimonials
- **About Page**: Company information, values, team overview
- **Products Page**: Comprehensive service offerings
- **Clients Page**: Client portfolio with moving logo animations
- **Contact Page**: Contact information and inquiry forms

### 🎯 Key Components
- **Auto-scrolling Client Logos**: Dynamic horizontal scrolling animations
- **Interactive Navigation**: Smooth page transitions
- **Testimonials Section**: Client feedback and reviews
- **Statistics Display**: Company achievements and metrics
- **Contact Forms**: Easy communication channels

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Development**: ESLint, PostCSS

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NCL
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
NCL/
├── project/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx          # Navigation component
│   │   │   └── ScrollToTop.tsx     # Scroll to top functionality
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Home page with hero and features
│   │   │   ├── About.tsx           # About company page
│   │   │   ├── Products.tsx        # Services and products
│   │   │   ├── Clients.tsx         # Client portfolio with animations
│   │   │   └── Contact.tsx         # Contact information
│   │   ├── assets/
│   │   │   ├── background/         # Hero background images
│   │   │   ├── Clients/            # Client logo images
│   │   │   ├── logo/               # Company logos
│   │   │   └── products/           # Product/service images
│   │   ├── App.tsx                 # Main app component
│   │   ├── main.tsx                # App entry point
│   │   └── index.css               # Global styles
│   ├── package.json                # Dependencies and scripts
│   ├── tailwind.config.js          # Tailwind configuration
│   ├── vite.config.ts              # Vite configuration
│   └── tsconfig.json               # TypeScript configuration
└── README.md                       # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#2563eb) and Purple gradients
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: White and light blue for highlights

### Typography
- **Headings**: Bold, large fonts for impact
- **Body Text**: Clean, readable fonts
- **Responsive**: Scales appropriately across devices

### Animations
- **Floating Elements**: Subtle background animations
- **Hover Effects**: Interactive card and button animations
- **Scroll Animations**: Fade-in effects on scroll
- **Logo Scrolling**: Continuous horizontal logo animations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience with all animations
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Streamlined navigation and optimized content

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `App.tsx`
3. Update navigation in `Header.tsx`

### Modifying Styles
- Global styles: `src/index.css`
- Component styles: Use Tailwind classes
- Custom animations: Add to `tailwind.config.js`

### Adding Content
- **Images**: Place in appropriate `assets/` folders
- **Text Content**: Update component files directly
- **Client Logos**: Add to `assets/Clients/` and update logo arrays

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect repository for automatic deployment
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **Traditional Hosting**: Upload `dist` folder to web server

## 📞 Support

For questions or support regarding this website:
- **Company**: NCL SYSTEMS PVT LTD
- **Email**: INFO@NCLSYSTEMS.COM
- **Phone**: +91-120-4318844
- **Address**: D-59 SECTOR 63 NOIDA- 201301 (U.P.)

## 🔄 Updates & Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor for security vulnerabilities
- Update content as needed
- Optimize performance regularly

### Content Management
- Update client logos in the animations
- Refresh testimonials and reviews
- Keep service offerings current
- Maintain contact information accuracy

---

**Built with ❤️ for NCL SYSTEMS PVT LTD** 