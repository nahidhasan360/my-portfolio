# Quick Start Guide

Get your Flutter Developer Portfolio up and running in 5 minutes!

## 🚀 Fast Setup (Windows)

### Option 1: Automated Setup (Recommended)

```powershell
# Run the setup script
.\scripts\setup.ps1
```

### Option 2: Manual Setup

```powershell
# 1. Install dependencies
npm install

# 2. Create environment file
copy .env.example .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🚀 Fast Setup (Mac/Linux)

### Option 1: Automated Setup (Recommended)

```bash
# Make script executable
chmod +x scripts/setup.sh

# Run the setup script
./scripts/setup.sh
```

### Option 2: Manual Setup

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.example .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## ✏️ Quick Customization

### 1. Update Your Name & Info (2 minutes)

**File:** `components/sections/hero-section.tsx`
```typescript
// Line 60-70: Update your headline
<h1>
  Building{' '}
  <span className="text-gradient">Production-Ready</span>
  <br />
  Mobile Apps
</h1>
```

**File:** `components/sections/contact.tsx`
```typescript
// Line 10-30: Update contact info
{
  icon: Mail,
  label: 'Email',
  value: 'your@email.com',  // ← Change this
  href: 'mailto:your@email.com',  // ← Change this
}
```

### 2. Add Your Projects (5 minutes)

**File:** `components/sections/featured-apps.tsx`
```typescript
// Line 8: Add your projects
const projects = [
  {
    title: 'Your App Name',
    description: 'Your app description',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    tech: ['Flutter', 'Firebase', 'GetX'],
    architecture: 'Clean Architecture with GetX',
    performance: 'Your performance metrics',
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=your.app',
      appStore: 'https://apps.apple.com/app/your-app/id123456',
      github: 'https://github.com/yourusername/your-app',
    }
  },
  // Add more projects...
]
```

### 3. Update Stats (1 minute)

**File:** `components/sections/stats.tsx`
```typescript
// Line 6: Update your stats
const stats = [
  { label: 'Apps Built', value: 25, suffix: '+' },  // ← Change numbers
  { label: 'Active Users', value: 100, suffix: 'K+' },
  { label: 'App Downloads', value: 500, suffix: 'K+' },
  { label: 'Crash-Free Rate', value: 99.9, suffix: '%' },
  { label: 'API Integrations', value: 50, suffix: '+' },
  { label: 'Client Projects', value: 15, suffix: '+' },
]
```

### 4. Add Your Experience (3 minutes)

**File:** `components/sections/experience.tsx`
```typescript
// Line 6: Add your experience
const experiences = [
  {
    year: '2024',
    title: 'Your Position/Project',
    type: 'Job Type',
    location: 'Location',
    description: 'What you did',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
  },
  // Add more experiences...
]
```

---

## 🎨 Quick Style Changes

### Change Colors

**File:** `app/globals.css`
```css
:root {
  --primary: 271 91% 65%;      /* Purple - Change this */
  --secondary: 189 94% 43%;    /* Cyan - Change this */
}
```

### Change Fonts

**File:** `app/layout.tsx`
```typescript
import { Inter, Roboto } from 'next/font/google'  // Add your font

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })
```

---

## 📸 Add Images

1. Create folders:
```
public/
├── projects/
│   ├── app1.jpg
│   ├── app2.jpg
│   └── app3.jpg
└── avatar.jpg
```

2. Use in components:
```typescript
<img src="/projects/app1.jpg" alt="My App" />
```

---

## 🚀 Deploy in 2 Minutes

### Vercel (Easiest)

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git push
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"

Done! Your site is live! 🎉

---

## 📱 Test on Mobile

```bash
# Find your local IP
ipconfig  # Windows
ifconfig  # Mac/Linux

# Access from phone
http://YOUR-IP:3000
```

---

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Check code quality

# Deployment
vercel               # Deploy to Vercel
netlify deploy       # Deploy to Netlify
```

---

## ❓ Need Help?

### Quick Fixes

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Styles not working?**
```bash
# Restart dev server
Ctrl+C
npm run dev
```

**Build errors?**
```bash
# Clean install
rm -rf node_modules .next
npm install
```

### Documentation

- 📖 [README.md](README.md) - Full documentation
- 🛠️ [SETUP.md](SETUP.md) - Detailed setup guide
- 🚀 [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide

### Support

- 📧 Email: hello@flutterdev.com
- 💬 GitHub Issues
- 📚 [Next.js Docs](https://nextjs.org/docs)

---

## ✅ Checklist

Before deploying:

- [ ] Updated personal information
- [ ] Added your projects
- [ ] Updated contact details
- [ ] Added your images
- [ ] Updated stats and experience
- [ ] Tested on mobile
- [ ] Checked all links work
- [ ] Updated .env.local
- [ ] Tested build: `npm run build`

---

## 🎯 Next Steps

1. **Customize Content** - Add your real projects and info
2. **Add Images** - Replace placeholder images
3. **Test Everything** - Check all sections work
4. **Deploy** - Push to Vercel or Netlify
5. **Share** - Show off your new portfolio!

---

## 💡 Pro Tips

- Use WebP images for better performance
- Keep animations smooth (60 FPS)
- Test on different devices
- Update content regularly
- Add Google Analytics
- Setup custom domain
- Enable HTTPS
- Optimize for SEO

---

**That's it! You're ready to go! 🚀**

Need more details? Check out the full documentation in README.md and SETUP.md.

Happy coding! 💻✨
