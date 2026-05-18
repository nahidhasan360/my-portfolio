# Setup Guide

Complete guide to set up and customize your Flutter Developer Portfolio.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Git** - Version control

## Installation Steps

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

This will install all required packages including:
- Next.js, React, TypeScript
- Tailwind CSS and plugins
- Framer Motion for animations
- Lenis for smooth scrolling
- Lucide React for icons
- shadcn/ui components

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Update the values in `.env.local` with your information.

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### Personal Information

#### 1. Hero Section
Edit `components/sections/hero-section.tsx`:
```typescript
// Update headline and subheadline
<h1>Building Production-Ready Mobile Apps</h1>
<p>Your custom description here</p>
```

#### 2. Projects
Edit `components/sections/featured-apps.tsx`:
```typescript
const projects = [
  {
    title: 'Your App Name',
    description: 'App description',
    features: ['Feature 1', 'Feature 2'],
    tech: ['Flutter', 'Firebase'],
    architecture: 'Your architecture pattern',
    performance: 'Performance metrics',
    links: {
      playStore: 'your-play-store-link',
      appStore: 'your-app-store-link',
      github: 'your-github-link',
    }
  },
  // Add more projects
]
```

#### 3. Contact Information
Edit `components/sections/contact.tsx`:
```typescript
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your@email.com',
    href: 'mailto:your@email.com',
  },
  // Update other contact methods
]
```

#### 4. Experience Timeline
Edit `components/sections/experience.tsx`:
```typescript
const experiences = [
  {
    year: '2024',
    title: 'Your Position/Project',
    type: 'Job Type',
    location: 'Location',
    description: 'Description',
    achievements: ['Achievement 1', 'Achievement 2'],
  },
  // Add more experiences
]
```

#### 5. Tech Stack
Edit `components/sections/tech-stack.tsx`:
```typescript
const techCategories = [
  {
    category: 'Category Name',
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'Technology', level: 95 },
    ],
  },
]
```

#### 6. Stats
Edit `components/sections/stats.tsx`:
```typescript
const stats = [
  { label: 'Apps Built', value: 25, suffix: '+' },
  // Update with your stats
]
```

#### 7. Testimonials
Edit `components/sections/testimonials.tsx`:
```typescript
const testimonials = [
  {
    name: 'Client Name',
    role: 'Client Role',
    avatar: 'avatar-url',
    rating: 5,
    feedback: 'Testimonial text',
  },
]
```

### Styling Customization

#### Colors
Edit `app/globals.css`:
```css
:root {
  --primary: 271 91% 65%;      /* Purple */
  --secondary: 189 94% 43%;    /* Cyan */
  /* Update other colors */
}
```

Or edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "your-color",
  secondary: "your-color",
}
```

#### Fonts
Edit `app/layout.tsx`:
```typescript
import { Inter, YourFont } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const yourFont = YourFont({ subsets: ['latin'] })
```

### Adding Images

1. Create a `public` folder in the root directory
2. Add your images:
```
public/
├── projects/
│   ├── app1.jpg
│   ├── app2.jpg
│   └── ...
├── avatar.jpg
└── logo.svg
```

3. Reference in components:
```typescript
<img src="/projects/app1.jpg" alt="Project" />
```

### SEO Optimization

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Flutter Developer',
  description: 'Your custom description',
  keywords: ['Your', 'Keywords'],
  openGraph: {
    title: 'Your Title',
    description: 'Your Description',
    images: ['/og-image.jpg'],
  },
}
```

## Building for Production

### 1. Build the Project

```bash
npm run build
# or
yarn build
```

### 2. Test Production Build Locally

```bash
npm start
# or
yarn start
```

### 3. Deploy to Vercel

#### Option A: Vercel CLI
```bash
npm i -g vercel
vercel
```

#### Option B: GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### 4. Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Deploy the .next folder
```

#### AWS Amplify
```bash
amplify init
amplify add hosting
amplify publish
```

## Performance Optimization

### Image Optimization
Use Next.js Image component:
```typescript
import Image from 'next/image'

<Image 
  src="/image.jpg" 
  alt="Description"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

### Code Splitting
Next.js automatically code-splits. For manual splitting:
```typescript
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('./Component'))
```

### Font Optimization
Already configured with `next/font` for optimal loading.

## Troubleshooting

### Build Errors

**Error: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Error: Port 3000 already in use**
```bash
npm run dev -- -p 3001
```

### Styling Issues

**Tailwind classes not working**
```bash
# Restart dev server
npm run dev
```

**Animations not smooth**
- Check browser hardware acceleration
- Reduce animation complexity
- Use `will-change` CSS property

### Performance Issues

**Slow page load**
- Optimize images (use WebP format)
- Enable lazy loading
- Minimize bundle size

**Animations laggy**
- Reduce number of animated elements
- Use CSS transforms instead of position changes
- Enable GPU acceleration

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## Support

If you encounter any issues:
1. Check the documentation
2. Search existing issues on GitHub
3. Create a new issue with details
4. Contact: hello@flutterdev.com

---

Happy coding! 🚀
