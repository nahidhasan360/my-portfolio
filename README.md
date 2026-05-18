# Flutter Developer Portfolio

A world-class premium portfolio website for a Flutter Mobile App Developer, featuring ultra-modern dark UI with Apple-level polish and luxury minimalism.

## 🚀 Tech Stack

### Core
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS

### UI & Components
- **shadcn/ui** - Premium UI components
- **Lucide React** - Beautiful icons
- **Magic UI** - Advanced UI patterns
- **Aceternity UI** - Premium components

### Animation & Effects
- **Framer Motion** - Smooth animations
- **GSAP** - Advanced animations
- **Lenis** - Smooth scrolling

### Typography
- **Inter** - Primary font
- **Geist** - Monospace font
- **Satoshi** - Display font

## ✨ Features

### Hero Section
- Fullscreen cinematic hero with animated background gradients
- Floating mobile app mockups with parallax effects
- Interactive lighting and smooth reveal animations
- Premium CTA buttons with glow effects

### Featured Apps Section
- Premium app showcase cards with realistic mockups
- Detailed project information including tech stack and architecture
- 3D tilt effects and smooth transitions
- Links to App Store, Play Store, and GitHub

### Case Study Section
- Professional product engineering breakdown
- Problem-solution framework
- Technical challenges and solutions
- Architecture and performance metrics
- Deployment process and impact results

### Tech Stack Section
- Animated categorized technology cards
- Skill level progress bars with smooth animations
- Gradient borders and interactive hover effects
- Additional expertise badges

### Experience Timeline
- Premium animated vertical timeline
- Major projects and milestones
- Elegant scroll animations
- Achievement highlights

### Stats Section
- Animated counters for key metrics
- Apps built, users, downloads, crash-free rate
- Premium glassmorphism cards

### Testimonials
- Elegant glassmorphism testimonial cards
- Client avatars and ratings
- Smooth hover interactions

### Contact Section
- Premium CTA with animated glow buttons
- Multiple contact methods (Email, WhatsApp, GitHub, LinkedIn)
- Floating background effects
- Social media links

## 🎨 Design Features

- **Ultra modern dark UI** with premium glassmorphism
- **Apple-level polish** with luxury minimalism
- **Clean spacing** and elegant typography
- **Smooth gradients** with purple and cyan accents
- **Floating UI elements** with soft shadows
- **Cinematic feel** with premium card layouts
- **Sticky navigation** with smooth scrolling
- **Responsive design** for all devices

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📦 Project Structure

```
flutter-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── featured-apps.tsx
│   │   ├── case-study.tsx
│   │   ├── tech-stack.tsx
│   │   ├── experience.tsx
│   │   ├── stats.tsx
│   │   ├── testimonials.tsx
│   │   └── contact.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── navigation.tsx
│   ├── loading-screen.tsx
│   ├── smooth-scroll.tsx
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎯 Performance

- **SEO optimized** with proper meta tags
- **Fully responsive** across all devices
- **Lighthouse optimized** for best scores
- **Fast loading** with optimized assets
- **Mobile optimized** for touch interactions
- **Production-ready** with clean architecture

## 🌈 Color Palette

- **Background**: Black (#000000)
- **Primary**: Purple (#A855F7)
- **Secondary**: Cyan (#22D3EE)
- **Accent**: Gradient combinations
- **Text**: White with muted variants

## 🔧 Customization

### Update Personal Information

Edit the content in each section component:
- `components/sections/hero-section.tsx` - Update name and tagline
- `components/sections/featured-apps.tsx` - Add your projects
- `components/sections/contact.tsx` - Update contact details

### Modify Colors

Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: "your-color",
  secondary: "your-color",
}
```

### Add Projects

Update the `projects` array in `components/sections/featured-apps.tsx`:
```typescript
{
  title: 'Your App',
  description: 'Description',
  features: ['Feature 1', 'Feature 2'],
  tech: ['Flutter', 'Firebase'],
  // ... more details
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

For support, email hello@flutterdev.com or open an issue.

---

Built with ❤️ using Next.js, React, and Tailwind CSS
