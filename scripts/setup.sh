#!/bin/bash

# Flutter Portfolio Setup Script
# This script automates the initial setup process

echo "🚀 Flutter Developer Portfolio Setup"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be 18 or higher. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm $(npm -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
echo ""
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cp .env.example .env.local
    echo "✅ .env.local created. Please update it with your information."
    echo ""
else
    echo "ℹ️  .env.local already exists"
    echo ""
fi

# Create public directory if it doesn't exist
if [ ! -d public ]; then
    echo "📁 Creating public directory..."
    mkdir -p public/projects
    echo "✅ Public directory created"
    echo ""
fi

echo "======================================"
echo "✨ Setup Complete!"
echo "======================================"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your information"
echo "2. Add your project images to public/projects/"
echo "3. Customize content in components/sections/"
echo "4. Run 'npm run dev' to start development server"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Project overview"
echo "   - SETUP.md - Detailed setup guide"
echo "   - DEPLOYMENT.md - Deployment instructions"
echo ""
echo "🚀 Start development server:"
echo "   npm run dev"
echo ""
echo "Happy coding! 💻"
