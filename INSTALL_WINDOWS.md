# Windows Installation Guide

Complete step-by-step guide for setting up the Flutter Developer Portfolio on Windows.

## Prerequisites

### 1. Install Node.js

1. **Download Node.js**
   - Go to [nodejs.org](https://nodejs.org/)
   - Download the **LTS version** (v18 or higher)
   - Choose the Windows Installer (.msi)

2. **Run the Installer**
   - Double-click the downloaded file
   - Click "Next" through the installation wizard
   - Accept the license agreement
   - Keep default installation path
   - Check "Automatically install necessary tools"
   - Click "Install"

3. **Verify Installation**
   ```powershell
   # Open PowerShell or Command Prompt
   node --version
   # Should show: v18.x.x or higher
   
   npm --version
   # Should show: 9.x.x or higher
   ```

### 2. Install Git (Optional but Recommended)

1. **Download Git**
   - Go to [git-scm.com](https://git-scm.com/)
   - Download for Windows
   - Run the installer

2. **Configure Git**
   ```powershell
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   ```

### 3. Install a Code Editor

**Visual Studio Code (Recommended)**
1. Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. Install with default settings
3. Install recommended extensions:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - ES7+ React/Redux/React-Native snippets

---

## Installation Methods

### Method 1: Automated Setup (Easiest)

1. **Download the Project**
   - Download ZIP from GitHub
   - Extract to your desired location
   - Or clone: `git clone your-repo-url`

2. **Open PowerShell**
   - Right-click on the project folder
   - Select "Open in Terminal" or "Open PowerShell window here"

3. **Run Setup Script**
   ```powershell
   # Allow script execution (one-time setup)
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   
   # Run the setup script
   .\scripts\setup.ps1
   ```

4. **Start Development Server**
   ```powershell
   npm run dev
   ```

5. **Open in Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

---

### Method 2: Manual Setup

1. **Download/Clone Project**
   ```powershell
   # If using Git
   git clone your-repo-url
   cd flutter-portfolio
   
   # Or extract ZIP and navigate to folder
   cd path\to\flutter-portfolio
   ```

2. **Install Dependencies**
   ```powershell
   npm install
   ```
   
   This will take 2-5 minutes depending on your internet speed.

3. **Create Environment File**
   ```powershell
   copy .env.example .env.local
   ```

4. **Edit Environment Variables**
   - Open `.env.local` in your text editor
   - Update with your information:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
   NEXT_PUBLIC_EMAIL=your@email.com
   NEXT_PUBLIC_PHONE=+1234567890
   NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
   NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
   ```

5. **Start Development Server**
   ```powershell
   npm run dev
   ```

6. **Open in Browser**
   - Go to [http://localhost:3000](http://localhost:3000)
   - You should see your portfolio!

---

## Common Issues & Solutions

### Issue 1: "npm is not recognized"

**Solution:**
1. Restart your computer after installing Node.js
2. Or add Node.js to PATH manually:
   - Search "Environment Variables" in Windows
   - Edit "Path" in System Variables
   - Add: `C:\Program Files\nodejs\`
   - Click OK and restart terminal

### Issue 2: "Cannot run scripts"

**Error:**
```
.\scripts\setup.ps1 : File cannot be loaded because running scripts is disabled
```

**Solution:**
```powershell
# Run as Administrator
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Then try again
.\scripts\setup.ps1
```

### Issue 3: "Port 3000 already in use"

**Solution:**
```powershell
# Use a different port
npm run dev -- -p 3001

# Or kill the process using port 3000
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

### Issue 4: "Module not found" errors

**Solution:**
```powershell
# Clean install
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Issue 5: Slow installation

**Solution:**
```powershell
# Use a faster mirror
npm config set registry https://registry.npmjs.org/

# Or use yarn instead
npm install -g yarn
yarn install
```

### Issue 6: "EACCES" permission errors

**Solution:**
```powershell
# Run PowerShell as Administrator
# Right-click PowerShell → "Run as Administrator"
npm install
```

---

## Development Workflow

### Starting the Server

```powershell
# Development mode (with hot reload)
npm run dev

# Production mode
npm run build
npm start
```

### Stopping the Server

- Press `Ctrl + C` in the terminal
- Type `Y` when asked to terminate

### Viewing in Browser

- **Local**: http://localhost:3000
- **Network**: http://YOUR-IP:3000 (for testing on phone)

### Finding Your IP Address

```powershell
ipconfig
# Look for "IPv4 Address" under your active network adapter
```

---

## Customization

### 1. Update Personal Info

**Edit these files:**
- `components/sections/hero-section.tsx` - Your name and tagline
- `components/sections/contact.tsx` - Contact information
- `components/sections/featured-apps.tsx` - Your projects
- `components/sections/experience.tsx` - Your experience
- `components/sections/stats.tsx` - Your statistics

### 2. Add Project Images

1. Create folder: `public\projects\`
2. Add your images:
   - `app1.jpg`
   - `app2.jpg`
   - etc.
3. Reference in code:
   ```typescript
   <img src="/projects/app1.jpg" alt="My App" />
   ```

### 3. Change Colors

**Edit:** `app\globals.css`
```css
:root {
  --primary: 271 91% 65%;      /* Change this */
  --secondary: 189 94% 43%;    /* Change this */
}
```

---

## Building for Production

### 1. Build the Project

```powershell
npm run build
```

This creates an optimized production build in `.next` folder.

### 2. Test Production Build

```powershell
npm start
```

Open http://localhost:3000 to test.

### 3. Check for Errors

```powershell
npm run lint
```

Fix any errors before deploying.

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```powershell
   npm install -g vercel
   ```

2. **Login**
   ```powershell
   vercel login
   ```

3. **Deploy**
   ```powershell
   vercel
   ```

4. **Deploy to Production**
   ```powershell
   vercel --prod
   ```

### Deploy via GitHub

1. **Push to GitHub**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

---

## Useful Commands

### Package Management

```powershell
# Install a package
npm install package-name

# Install as dev dependency
npm install -D package-name

# Uninstall a package
npm uninstall package-name

# Update packages
npm update

# Check for outdated packages
npm outdated
```

### Project Commands

```powershell
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Check code quality

# Cleaning
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
```

### Git Commands

```powershell
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b feature-name
```

---

## Performance Tips

### 1. Use SSD
- Install project on SSD for faster builds
- Move `node_modules` to SSD

### 2. Exclude from Antivirus
- Add project folder to antivirus exclusions
- Add `node_modules` folder to exclusions

### 3. Use Windows Terminal
- Download from Microsoft Store
- Faster than default Command Prompt
- Better UI and features

### 4. Enable Developer Mode
- Settings → Update & Security → For Developers
- Enable "Developer Mode"
- Improves file system performance

---

## Recommended Tools

### Terminal
- **Windows Terminal** - Modern terminal
- **PowerShell 7** - Latest PowerShell

### Code Editor
- **VS Code** - Best for web development
- **WebStorm** - Full-featured IDE

### Browser
- **Chrome** - Best DevTools
- **Firefox Developer Edition** - Great for testing
- **Edge** - Good performance

### Extensions (VS Code)
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Path Intellisense
- GitLens

---

## Getting Help

### Documentation
- [README.md](README.md) - Main documentation
- [QUICKSTART.md](QUICKSTART.md) - Quick start guide
- [SETUP.md](SETUP.md) - Detailed setup
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide

### Online Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Stack Overflow](https://stackoverflow.com)

### Support
- 📧 Email: hello@flutterdev.com
- 💬 GitHub Issues
- 🌐 Community Forums

---

## Checklist

Before you start:
- [ ] Node.js installed (v18+)
- [ ] npm working
- [ ] Code editor installed
- [ ] Git installed (optional)

After installation:
- [ ] Dependencies installed
- [ ] .env.local created
- [ ] Dev server running
- [ ] Site opens in browser
- [ ] No console errors

Before deployment:
- [ ] Personal info updated
- [ ] Projects added
- [ ] Images added
- [ ] Build successful
- [ ] Production tested
- [ ] All links work

---

## Next Steps

1. ✅ Complete installation
2. 📝 Customize content
3. 🎨 Add your images
4. 🧪 Test everything
5. 🚀 Deploy to Vercel
6. 🌐 Share your portfolio!

---

**Congratulations! You're all set up! 🎉**

Need help? Check the documentation or reach out for support.

Happy coding! 💻✨
