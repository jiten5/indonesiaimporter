# Quick Start Guide

## Installation Steps

### 1. Install Dependencies

Since PowerShell script execution is restricted on your system, run the installation manually:

```powershell
# Navigate to project directory
cd d:\JT\Jitendra5\IndonesiaImport

# Install all dependencies
npm install
```

This will install all the following packages:

- Next.js 14.2.15
- React 18.3.1
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Recharts
- Lucide React icons
- ElasticSearch client
- And all other dependencies

### 2. Set Up Environment Variables

```powershell
# Copy the example environment file
copy .env.example .env.local
```

Edit `.env.local` and update the values as needed.

### 3. Run Development Server

```powershell
npm run dev
```

The application will be available at http://localhost:3000

### 4. Build for Production

```powershell
npm run build
npm start
```

## Troubleshooting

### PowerShell Execution Policy

If you encounter script execution errors, you can:

**Option 1: Run commands individually**

```powershell
npm install
npm run dev
```

**Option 2: Temporarily bypass (current session only)**

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

**Option 3: Enable for current user (permanent)**

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Common Issues

**1. Port 3000 already in use**

```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

**2. Module not found errors**

```powershell
# Clear cache and reinstall
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

**3. TypeScript errors**

```powershell
# The errors you see now are expected until dependencies are installed
# After running npm install, the errors should disappear
```

## Next Steps

After installation:

1. ✅ Explore the component library in `components/ui/`
2. ✅ Review type definitions in `lib/types/`
3. ✅ Check out utility functions in `lib/utils/`
4. ✅ Customize colors in `tailwind.config.ts`
5. ✅ Add your first route in `app/(routes)/`
6. ✅ Connect ElasticSearch for search functionality
7. ✅ Start building your features!

## Project Structure Overview

```
IndonesiaImport/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # 18 reusable components
│   └── layout/            # Header, Footer
├── lib/
│   ├── utils/             # Utility functions
│   ├── constants/         # App constants
│   └── types/             # TypeScript types
└── public/                # Static assets
```

## Available Components

You now have **18 production-ready components**:

1. Button (7 variants)
2. Card (5 variants)
3. Input
4. Textarea
5. Select
6. Badge (8 variants)
7. Tooltip
8. Modal
9. Tabs
10. Accordion
11. Checkbox
12. Radio
13. Switch
14. Progress
15. Alert
16. Avatar
17. Divider
18. Skeleton
19. Spinner

## Example Usage

```tsx
import { Button, Card, Badge } from '@/components/ui';

export default function Example() {
  return (
    <Card variant="elevated">
      <h2>Welcome!</h2>
      <Badge variant="success">Active</Badge>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

## Resources

- **Documentation**: See README.md
- **Design System**: Check tailwind.config.ts
- **Type Definitions**: Review lib/types/index.ts
- **Constants**: See lib/constants/index.ts

---

**Need Help?** Check the README.md for detailed documentation.
