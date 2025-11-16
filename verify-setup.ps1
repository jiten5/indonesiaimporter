# Installation Verification Script
# Run this after npm install to verify everything is set up correctly

Write-Host "`n=== Global Trade Intelligence Platform - Setup Verification ===" -ForegroundColor Cyan
Write-Host "`nChecking installation...`n" -ForegroundColor Yellow

# Check if node_modules exists
if (Test-Path "node_modules") {
    Write-Host "✓ node_modules folder exists" -ForegroundColor Green
} else {
    Write-Host "✗ node_modules folder not found - Please run 'npm install'" -ForegroundColor Red
    exit 1
}

# Check critical dependencies
$dependencies = @(
    "next",
    "react",
    "react-dom",
    "typescript",
    "tailwindcss",
    "framer-motion",
    "react-hook-form",
    "zod",
    "recharts",
    "lucide-react",
    "@elastic/elasticsearch",
    "clsx",
    "tailwind-merge",
    "class-variance-authority"
)

Write-Host "Checking dependencies:" -ForegroundColor Yellow
$allInstalled = $true

foreach ($dep in $dependencies) {
    $path = "node_modules/$dep"
    if (Test-Path $path) {
        Write-Host "  ✓ $dep" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $dep (not found)" -ForegroundColor Red
        $allInstalled = $false
    }
}

# Check configuration files
Write-Host "`nChecking configuration files:" -ForegroundColor Yellow

$configFiles = @(
    "package.json",
    "tsconfig.json",
    "next.config.js",
    "tailwind.config.ts",
    "postcss.config.js",
    ".eslintrc.json",
    ".prettierrc"
)

foreach ($file in $configFiles) {
    if (Test-Path $file) {
        Write-Host "  ✓ $file" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $file (missing)" -ForegroundColor Red
    }
}

# Check folder structure
Write-Host "`nChecking folder structure:" -ForegroundColor Yellow

$folders = @(
    "app",
    "app/api",
    "components",
    "components/ui",
    "components/layout",
    "lib",
    "lib/utils",
    "lib/types",
    "lib/constants",
    "public"
)

foreach ($folder in $folders) {
    if (Test-Path $folder) {
        Write-Host "  ✓ $folder/" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $folder/ (missing)" -ForegroundColor Red
    }
}

# Count components
$componentCount = (Get-ChildItem "components/ui" -Filter "*.tsx").Count
Write-Host "`nComponent count: $componentCount components" -ForegroundColor Cyan

# Summary
Write-Host "`n=== Summary ===" -ForegroundColor Cyan

if ($allInstalled) {
    Write-Host "`n✓ All dependencies installed successfully!" -ForegroundColor Green
    Write-Host "`nYou can now run:" -ForegroundColor Yellow
    Write-Host "  npm run dev     # Start development server" -ForegroundColor White
    Write-Host "  npm run build   # Build for production" -ForegroundColor White
    Write-Host "  npm run lint    # Run linter" -ForegroundColor White
    Write-Host "`nDevelopment server will be available at: http://localhost:3000" -ForegroundColor Cyan
} else {
    Write-Host "`n✗ Some dependencies are missing. Please run 'npm install'" -ForegroundColor Red
}

Write-Host "`n=== Project Stats ===" -ForegroundColor Cyan
Write-Host "Components: $componentCount" -ForegroundColor White
Write-Host "Configuration Files: $($configFiles.Count)" -ForegroundColor White
Write-Host "Dependencies: $($dependencies.Count)" -ForegroundColor White

Write-Host "`nFor detailed documentation, see:" -ForegroundColor Yellow
Write-Host "  README.md        # Full documentation" -ForegroundColor White
Write-Host "  SETUP.md         # Quick start guide" -ForegroundColor White
Write-Host "  COMPONENTS.md    # Component usage" -ForegroundColor White
Write-Host "  DELIVERY.md      # What's included`n" -ForegroundColor White
