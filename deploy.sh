#!/bin/bash
# Quick Deployment Script for Vercel
# Run this after setting up Git repository

echo "🚀 Starting deployment process..."
echo ""

# Step 1: Update Next.js to secure version
echo "📦 Step 1: Updating Next.js to secure version..."
npm install next@14.2.33
echo "✅ Next.js updated"
echo ""

# Step 2: Run quality checks
echo "🔍 Step 2: Running quality checks..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ TypeScript check failed!"
    exit 1
fi

npm run lint
if [ $? -ne 0 ]; then
    echo "❌ ESLint check failed!"
    exit 1
fi

echo "✅ Quality checks passed"
echo ""

# Step 3: Build for production
echo "🏗️ Step 3: Building for production..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi
echo "✅ Build successful"
echo ""

# Step 4: Test production build
echo "🧪 Step 4: Testing production build..."
echo "Starting server on http://localhost:3000"
echo "Press Ctrl+C to stop and continue deployment"
npm run start &
SERVER_PID=$!
sleep 5

# Test if server is running
curl -s http://localhost:3000 > /dev/null
if [ $? -eq 0 ]; then
    echo "✅ Production server running successfully"
    kill $SERVER_PID
else
    echo "❌ Server failed to start"
    kill $SERVER_PID
    exit 1
fi
echo ""

# Step 5: Git setup
echo "📝 Step 5: Git setup..."
if [ ! -d .git ]; then
    echo "Initializing Git repository..."
    git init
    git add .
    git commit -m "feat: Production-ready deployment"
    echo "✅ Git repository initialized"
    echo ""
    echo "⚠️  Next steps:"
    echo "   1. Create a GitHub repository"
    echo "   2. Run: git remote add origin <your-repo-url>"
    echo "   3. Run: git push -u origin main"
else
    echo "✅ Git repository already exists"
    echo ""
    echo "💡 Commit your changes:"
    echo "   git add ."
    echo "   git commit -m 'feat: Ready for deployment'"
    echo "   git push"
fi
echo ""

# Step 6: Deployment instructions
echo "=========================================="
echo "🎉 READY FOR VERCEL DEPLOYMENT"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Sign in with GitHub"
echo "3. Click 'New Project'"
echo "4. Import your repository"
echo "5. Add environment variables (see .env.production)"
echo "6. Click 'Deploy'"
echo ""
echo "Environment variables needed:"
echo "  - NEXT_PUBLIC_SITE_URL"
echo "  - NEXT_PUBLIC_API_URL"
echo "  - NEXT_PUBLIC_GA_MEASUREMENT_ID (optional)"
echo ""
echo "📖 Full guide: See DEPLOYMENT_GUIDE.md"
echo ""
echo "=========================================="
echo "✅ ALL CHECKS PASSED - READY TO DEPLOY!"
echo "=========================================="
