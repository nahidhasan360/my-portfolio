# Deployment Guide

Complete guide for deploying your Flutter Developer Portfolio to various platforms.

## Table of Contents
- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [AWS Amplify](#aws-amplify)
- [Digital Ocean](#digital-ocean)
- [Railway](#railway)
- [Custom Server](#custom-server)

---

## Vercel (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js.

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: .next
   - Add environment variables from `.env.local`
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch triggers a deployment
   - Pull requests get preview deployments
   - Rollback to previous deployments anytime

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # First deployment
   vercel
   
   # Production deployment
   vercel --prod
   ```

4. **Configure Environment Variables**
   ```bash
   vercel env add NEXT_PUBLIC_SITE_URL
   vercel env add NEXT_PUBLIC_EMAIL
   # Add other variables
   ```

### Custom Domain

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. SSL certificate is automatically provisioned

---

## Netlify

### Method 1: Git Integration

1. **Push to Git** (GitHub, GitLab, or Bitbucket)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variables
   - Click "Deploy site"

### Method 2: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Initialize**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   # Build first
   npm run build
   
   # Deploy
   netlify deploy --prod
   ```

### Configuration

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## AWS Amplify

### Setup

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Configure Amplify**
   ```bash
   amplify configure
   ```

3. **Initialize Project**
   ```bash
   amplify init
   ```

4. **Add Hosting**
   ```bash
   amplify add hosting
   ```
   - Select "Hosting with Amplify Console"
   - Choose "Manual deployment"

5. **Publish**
   ```bash
   amplify publish
   ```

### Continuous Deployment

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Configure build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
5. Add environment variables
6. Save and deploy

---

## Digital Ocean

### App Platform

1. **Create Account** at [digitalocean.com](https://digitalocean.com)

2. **Create App**
   - Go to "Apps" → "Create App"
   - Connect your GitHub repository
   - Configure:
     - Type: Web Service
     - Build Command: `npm run build`
     - Run Command: `npm start`
     - HTTP Port: 3000

3. **Environment Variables**
   - Add all variables from `.env.local`

4. **Deploy**
   - Click "Create Resources"
   - Wait for deployment

### Droplet (VPS)

1. **Create Droplet**
   - Choose Ubuntu 22.04
   - Select plan
   - Add SSH key

2. **Connect to Droplet**
   ```bash
   ssh root@your-droplet-ip
   ```

3. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

4. **Install PM2**
   ```bash
   npm install -g pm2
   ```

5. **Clone Repository**
   ```bash
   git clone your-repo-url
   cd your-repo
   ```

6. **Install Dependencies**
   ```bash
   npm install
   ```

7. **Build**
   ```bash
   npm run build
   ```

8. **Start with PM2**
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

9. **Setup Nginx**
   ```bash
   sudo apt install nginx
   ```

   Create config at `/etc/nginx/sites-available/portfolio`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

10. **Setup SSL with Let's Encrypt**
    ```bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d your-domain.com
    ```

---

## Railway

1. **Create Account** at [railway.app](https://railway.app)

2. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**
   - Railway auto-detects Next.js
   - Add environment variables in Settings
   - Custom domain in Settings → Domains

4. **Deploy**
   - Automatic deployment on push
   - View logs in real-time

---

## Custom Server

### Using Node.js

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

3. **Use Process Manager**
   ```bash
   # Install PM2
   npm install -g pm2
   
   # Start application
   pm2 start npm --name "portfolio" -- start
   
   # Save PM2 configuration
   pm2 save
   
   # Setup startup script
   pm2 startup
   ```

### Using Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static
   EXPOSE 3000
   ENV PORT 3000
   CMD ["node", "server.js"]
   ```

2. **Create .dockerignore**
   ```
   node_modules
   .next
   .git
   .env*.local
   ```

3. **Build Image**
   ```bash
   docker build -t flutter-portfolio .
   ```

4. **Run Container**
   ```bash
   docker run -p 3000:3000 flutter-portfolio
   ```

### Using Docker Compose

Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
    restart: unless-stopped
```

Run:
```bash
docker-compose up -d
```

---

## Post-Deployment Checklist

- [ ] Test all pages and sections
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test contact forms
- [ ] Verify environment variables
- [ ] Check loading speed (use Lighthouse)
- [ ] Test on different browsers
- [ ] Setup analytics (Google Analytics, etc.)
- [ ] Setup error tracking (Sentry, etc.)
- [ ] Configure CDN if needed
- [ ] Setup monitoring
- [ ] Create sitemap.xml
- [ ] Submit to search engines
- [ ] Setup custom domain
- [ ] Configure SSL certificate
- [ ] Setup redirects if needed

---

## Performance Optimization

### Enable Caching

Add headers in `next.config.js`:
```javascript
async headers() {
  return [
    {
      source: '/:all*(svg|jpg|png|webp)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ]
}
```

### Enable Compression

Most platforms enable this by default. For custom servers:
```bash
npm install compression
```

### CDN Configuration

Use Vercel's Edge Network (automatic) or configure CloudFlare:
1. Add site to CloudFlare
2. Update nameservers
3. Enable caching rules
4. Enable minification

---

## Monitoring & Analytics

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Add tracking code to `app/layout.tsx`

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## Troubleshooting

### Build Fails

- Check Node.js version (use v18+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Check environment variables
- Review build logs

### 404 Errors

- Verify file paths are correct
- Check routing configuration
- Ensure all pages are in `app` directory

### Slow Performance

- Optimize images (use WebP)
- Enable caching
- Use CDN
- Minimize JavaScript bundle
- Enable compression

### Environment Variables Not Working

- Prefix with `NEXT_PUBLIC_` for client-side
- Restart dev server after changes
- Verify they're added in deployment platform

---

## Support

For deployment issues:
- Check platform documentation
- Review deployment logs
- Contact platform support
- Email: hello@flutterdev.com

---

Happy Deploying! 🚀
