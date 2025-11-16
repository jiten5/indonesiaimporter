# Quick Deployment Script for Windows
# Run this after setting up Git repository

Write-Host "🚀 Starting deployment process..." -ForegroundColor Cyan
Write-Host ""

# Step 1: Update Next.js to secure version
Write-Host "📦 Step 1: Updating Next.js to secure version..." -ForegroundColor Yellow
npm install next@14.2.33
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to update Next.js" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Next.js updated" -ForegroundColor Green
Write-Host ""

# Step 2: Run quality checks
Write-Host "🔍 Step 2: Running quality checks..." -ForegroundColor Yellow
npm run type-check
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ TypeScript check failed!" -ForegroundColor Red
    exit 1
}

npm run lint
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ ESLint check failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Quality checks passed" -ForegroundColor Green
Write-Host ""

# Step 3: Build for production
Write-Host "🏗️ Step 3: Building for production..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful" -ForegroundColor Green
Write-Host ""

# Step 4: Git setup
Write-Host "📝 Step 4: Git setup..." -ForegroundColor Yellow
if (-not (Test-Path .git)) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "feat: Production-ready deployment"
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
    Write-Host ""
    Write-Host "⚠️  Next steps:" -ForegroundColor Yellow
    Write-Host "   1. Create a GitHub repository"
    Write-Host "   2. Run: git remote add origin <your-repo-url>"
    Write-Host "   3. Run: git push -u origin main"
} else {
    Write-Host "✅ Git repository already exists" -ForegroundColor Green
    Write-Host ""
    Write-Host "💡 Commit your changes:" -ForegroundColor Cyan
    Write-Host "   git add ."
    Write-Host "   git commit -m 'feat: Ready for deployment'"
    Write-Host "   git push"
}
Write-Host ""

# Step 5: Deployment instructions
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "🎉 READY FOR VERCEL DEPLOYMENT" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to https://vercel.com"
Write-Host "2. Sign in with GitHub"
Write-Host "3. Click 'New Project'"
Write-Host "4. Import your repository"
Write-Host "5. Add environment variables (see .env.production)"
Write-Host "6. Click 'Deploy'"
Write-Host ""
Write-Host "Environment variables needed:" -ForegroundColor Yellow
Write-Host "  - NEXT_PUBLIC_SITE_URL"
Write-Host "  - NEXT_PUBLIC_API_URL"
Write-Host "  - NEXT_PUBLIC_GA_MEASUREMENT_ID (optional)"
Write-Host ""
Write-Host "📖 Full guide: See DEPLOYMENT_GUIDE.md" -ForegroundColor Cyan
Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "✅ ALL CHECKS PASSED - READY TO DEPLOY!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
