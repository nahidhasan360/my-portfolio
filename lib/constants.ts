// Site Configuration
export const SITE_CONFIG = {
  name: 'Flutter Developer Portfolio',
  title: 'Building Production-Ready Mobile Apps',
  description: 'Flutter developer specializing in scalable, high-performance mobile applications for Android & iOS.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://flutterdev.com',
  author: 'Flutter Developer',
  email: process.env.NEXT_PUBLIC_EMAIL || 'hello@flutterdev.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '+1 (555) 123-4567',
}

// Social Links
export const SOCIAL_LINKS = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com',
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com',
  whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE?.replace(/\D/g, '') || '15551234567'}`,
}

// Navigation Items
export const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Case Study', href: '#case-study' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

// Animation Variants
export const FADE_IN_VARIANT = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const SLIDE_IN_LEFT_VARIANT = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
}

export const SLIDE_IN_RIGHT_VARIANT = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
}

export const SCALE_IN_VARIANT = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

// Transition Presets
export const SMOOTH_TRANSITION = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
}

export const SPRING_TRANSITION = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
}

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}
