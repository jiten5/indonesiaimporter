# 🚀 Quick Reference Guide

## Installation (3 Steps)

```powershell
# 1. Install dependencies
npm install

# 2. Copy environment file
copy .env.example .env.local

# 3. Start development
npm run dev
```

Visit: http://localhost:3000

---

## 📁 File Locations

| What           | Where                    |
| -------------- | ------------------------ |
| **Components** | `components/ui/*.tsx`    |
| **Types**      | `lib/types/index.ts`     |
| **Utils**      | `lib/utils/index.ts`     |
| **Constants**  | `lib/constants/index.ts` |
| **API Routes** | `app/api/*/route.ts`     |
| **Pages**      | `app/page.tsx`           |
| **Styles**     | `app/globals.css`        |
| **Config**     | `tailwind.config.ts`     |

---

## 🎨 Color Palette (Quick Copy)

```tsx
// Primary Colors
primary - 500; // #1A73E8 - Main blue
secondary - 500; // #34A853 - Green
accent - 500; // #EA4335 - Red

// Neutrals
text - primary; // #202124 - Dark text
text - secondary; // #5F6368 - Gray text
surface; // #F8F9FA - Light bg
border; // #E8EAED - Borders
```

---

## 🔧 Common Components

### Button

```tsx
<Button variant="primary" size="md">
  Click Me
</Button>
```

### Card

```tsx
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>{/* ... */}</CardContent>
</Card>
```

### Input

```tsx
<Input label="Email" placeholder="Enter email" error="Required field" />
```

### Badge

```tsx
<Badge variant="success">Active</Badge>
```

---

## 🛠️ Utility Functions

```tsx
import { cn, formatCurrency, formatDate } from '@/lib/utils';

// Merge classes
cn('base-class', condition && 'conditional-class');

// Format money
formatCurrency(1000000, 'USD'); // "$1,000,000"

// Format date
formatDate(new Date(), 'short'); // "Nov 16, 2025"
```

---

## 📊 Type Imports

```tsx
import type {
  Shipment,
  Company,
  Product,
  SearchFilters,
  User,
} from '@/lib/types';
```

---

## 🎯 Quick Commands

```powershell
npm run dev      # Development server
npm run build    # Production build
npm start        # Run production
npm run lint     # Check code
npm run format   # Format code
```

---

## 📦 Import Patterns

```tsx
// UI Components
import { Button, Card, Input } from '@/components/ui';

// Layout
import { Header, Footer } from '@/components/layout';

// Utils
import { cn, formatCurrency } from '@/lib/utils';

// Constants
import { CURRENCIES, COUNTRIES } from '@/lib/constants';

// Types
import type { Shipment } from '@/lib/types';
```

---

## 🎨 Tailwind Utilities

```tsx
// Container
<div className="container-custom">

// Glass effect
<div className="glass">

// Gradient text
<h1 className="gradient-text-primary">

// Hover effects
<div className="card-hover">
<div className="hover-glow-primary">

// Animations
<div className="animate-fade-in">
<div className="animate-slide-in-right">
```

---

## 🔍 ElasticSearch Setup (Optional)

```powershell
# Start with Docker
docker run -d `
  --name elasticsearch `
  -p 9200:9200 `
  -e "discovery.type=single-node" `
  -e "xpack.security.enabled=false" `
  docker.elastic.co/elasticsearch/elasticsearch:8.15.0
```

---

## 📝 Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
ELASTICSEARCH_URL=http://localhost:9200
```

---

## 🐛 Troubleshooting

| Problem              | Solution                    |
| -------------------- | --------------------------- |
| Port 3000 in use     | `npm run dev -- -p 3001`    |
| TypeScript errors    | Run `npm install` first     |
| Import errors        | Check `tsconfig.json` paths |
| Tailwind not working | Restart dev server          |
| Module not found     | `npm install`               |

---

## 📚 Documentation Files

- **README.md** - Complete documentation
- **SETUP.md** - Installation guide
- **COMPONENTS.md** - Component examples
- **DELIVERY.md** - What's included
- **QUICK_REFERENCE.md** - This file!

---

## 🎓 Learning Path

1. ✅ Install dependencies (`npm install`)
2. ✅ Run dev server (`npm run dev`)
3. ✅ Explore components in `components/ui/`
4. ✅ Read `COMPONENTS.md` for examples
5. ✅ Check `lib/types/` for data structures
6. ✅ Review `lib/constants/` for static data
7. ✅ Start building in `app/`

---

## 💡 Pro Tips

- Use `cn()` for conditional classes
- Import from `@/components/ui` (not individual files)
- Check TypeScript types for prop options
- Use variants for consistent styling
- Follow the component patterns in COMPONENTS.md
- Customize colors in `tailwind.config.ts`

---

**Happy Coding! 🚀**
