# 🚀 Getting Started

Welcome to your Flutter Developer Portfolio! This guide will help you get up and running quickly.

## 📋 What You'll Need

- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Code Editor** (VS Code recommended)
- **10 minutes** of your time

---

## ⚡ Quick Start (Choose Your Path)

### 🪟 Windows Users

**Option 1: Automated (Recommended)**
```powershell
.\scripts\setup.ps1
npm run dev
```

**Option 2: Manual**
```powershell
npm install
copy .env.example .env.local
npm run dev
```

📖 **Detailed Guide**: [INSTALL_WINDOWS.md](INSTALL_WINDOWS.md)

---

### 🍎 Mac/Linux Users

**Option 1: Automated (Recommended)**
```bash
chmod +x scripts/setup.sh
./scripts/setup.sh
npm run dev
```

**Option 2: Manual**
```bash
npm install
cp .env.example .env.local
npm run dev
```

---

## 🎯 What's Next?

### 1️⃣ Customize Your Content (10 minutes)

#### Update Your Name & Info
**File**: `components/sections/hero-section.tsx`
```typescript
// Change the headline
<h1>Building Production-Ready Mobile Apps</h1>
```

#### Add Your Contact Info
**File**: `components/sections/contact.tsx`
```typescript
// Update email, phone, social links
value: 'your@email.com'
```

#### Add Your Projects
**File**: `components/sections/featured-apps.tsx`
```typescript
// Add your apps
const projects = [
  {
    title: 'Your App',
    description: 'Description',
    // ... more details
  }
]
```

### 2️⃣ Add Your Images (5 minutes)

1. Create folder: `public/projects/`
2. Add your app screenshots
3. Update image paths in components

### 3️⃣ Update Your Stats (2 minutes)

**File**: `components/sections/stats.tsx`
```typescript
const stats = [
  { label: 'Apps Built', value: 25, suffix: '+' },
  // Update with your numbers
]
```

### 4️⃣ Add Your Experience (5 minutes)

**File**: `components/sections/experience.tsx`
```typescript
const experiences = [
  {
    year: '2024',
    title: 'Your Position',
    // ... details
  }
]
```

---

## 📚 Documentation

Choose the guide that fits your needs:

| Guide | Best For | Time |
|-------|----------|------|
| [QUICKSTART.md](QUICKSTART.md) | Getting started fast | 5 min |
| [INSTALL_WINDOWS.md](INSTALL_WINDOWS.md) | Windows users | 15 min |
| [SETUP.md](SETUP.md) | Detailed customization | 30 min |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Going live | 20 min |
| [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md) | Understanding the project | 15 min |

---

## 🎨 Customization Quick Reference

### Colors
**File**: `app/globals.css`
```css
:root {
  --primary: 271 91% 65%;      /* Purple */
  --secondary: 189 94% 43%;    /* Cyan */
}
```

### Fonts
**File**: `app/layout.tsx`
```typescript
import { Inter } from 'next/font/google'
```

### Content
- **Hero**: `components/sections/hero-section.tsx`
- **Projects**: `components/sections/featured-apps.tsx`
- **Experience**: `components/sections/experience.tsx`
- **Contact**: `components/sections/contact.tsx`
- **Stats**: `components/sections/stats.tsx`
- **Tech Stack**: `components/sections/tech-stack.tsx`

---

## 🚀 Deployment (2 minutes)

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
4. Import your repo
5. Click "Deploy"

**Done!** Your site is live! 🎉

---

## 🆘 Need Help?

### Common Issues

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
rm -rf node_modules .next
npm install
```

### Get Support

- 📖 Check the [documentation](#-documentation)
- 💬 Open a GitHub issue
- 📧 Email: hello@flutterdev.com

---

## ✅ Checklist

### Before You Start
- [ ] Node.js installed
- [ ] Code editor ready
- [ ] Project downloaded

### After Installation
- [ ] Dependencies installed
- [ ] Dev server running
- [ ] Site opens in browser

### Before Deployment
- [ ] Content customized
- [ ] Images added
- [ ] Contact info updated
- [ ] Build successful
- [ ] Tested on mobile

---

## 🎯 Your Journey

```
1. Install (5 min)
   ↓
2. Customize (20 min)
   ↓
3. Test (10 min)
   ↓
4. Deploy (5 min)
   ↓
5. Share! 🎉
```

---

## 💡 Pro Tips

- ✨ Start with the automated setup script
- 🎨 Customize colors to match your brand
- 📱 Test on mobile devices
- 🚀 Deploy early, iterate often
- 📊 Add analytics after deployment
- 🔒 Use environment variables for sensitive data

---

## 🌟 Features You'll Love

- ✅ **Premium Design** - Apple-level polish
- ✅ **Smooth Animations** - Framer Motion powered
- ✅ **Fully Responsive** - Works on all devices
- ✅ **Dark Mode** - Built-in theme toggle
- ✅ **SEO Optimized** - Ready for search engines
- ✅ **Fast Loading** - Lighthouse optimized
- ✅ **Easy to Customize** - Well-documented code
- ✅ **Production Ready** - Deploy anywhere

---

## 📱 Test on Mobile

```bash
# Find your IP
ipconfig  # Windows
ifconfig  # Mac/Linux

# Access from phone
http://YOUR-IP:3000
```

---

## 🎓 Learn More

### Technologies Used
- [Next.js](https://nextjs.org/docs) - React framework
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [TypeScript](https://www.typescriptlang.org/docs/) - Type safety

### Design Inspiration
- [Apple](https://apple.com) - Premium design
- [Linear](https://linear.app) - Clean UI
- [Vercel](https://vercel.com) - Modern aesthetics
- [Stripe](https://stripe.com) - Professional look

---

## 🎉 You're Ready!

Everything is set up and ready to go. Now it's time to make it yours!

**Next Steps:**
1. Run `npm run dev`
2. Open http://localhost:3000
3. Start customizing
4. Deploy when ready
5. Share with the world!

---

## 📞 Stay Connected

- 🌐 Website: [Your Portfolio URL]
- 💼 LinkedIn: [Your LinkedIn]
- 🐙 GitHub: [Your GitHub]
- 📧 Email: [Your Email]

---

**Happy Building! 🚀**

Made with ❤️ for Flutter developers worldwide.

---

*For detailed instructions, see the specific guides in the documentation folder.*
