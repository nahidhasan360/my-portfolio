# Flutter Portfolio Setup Script (PowerShell)
# This script automates the initial setup process for Windows

Write-Host "🚀 Flutter Developer Portfolio Setup" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node -v
    Write-Host "✅ Node.js $nodeVersion detected" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js v18 or higher." -ForegroundColor Red
    Write-Host "   Download from: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Check if npm is installed
try {
    $npmVersion = npm -v
    Write-Host "✅ npm $npmVersion detected" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not installed." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
Write-Host ""

npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
Write-Host ""

# Create .env.local if it doesn't exist
if (-not (Test-Path .env.local)) {
    Write-Host "📝 Creating .env.local file..." -ForegroundColor Yellow
    Copy-Item .env.example .env.local
    Write-Host "✅ .env.local created. Please update it with your information." -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "ℹ️  .env.local already exists" -ForegroundColor Blue
    Write-Host ""
}

# Create public directory if it doesn't exist
if (-not (Test-Path public)) {
    Write-Host "📁 Creating public directory..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path public/projects -Force | Out-Null
    Write-Host "✅ Public directory created" -ForegroundColor Green
    Write-Host ""
}

Write-Host "======================================" -ForegroundColor Cyan
Write-Host "✨ Setup Complete!" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Update .env.local with your information"
Write-Host "2. Add your project images to public/projects/"
Write-Host "3. Customize content in components/sections/"
Write-Host "4. Run 'npm run dev' to start development server"
Write-Host ""
Write-Host "📚 Documentation:" -ForegroundColor Cyan
Write-Host "   - README.md - Project overview"
Write-Host "   - SETUP.md - Detailed setup guide"
Write-Host "   - DEPLOYMENT.md - Deployment instructions"
Write-Host ""
Write-Host "🚀 Start development server:" -ForegroundColor Green
Write-Host "   npm run dev"
Write-Host ""
Write-Host "Happy coding! 💻" -ForegroundColor Magenta
