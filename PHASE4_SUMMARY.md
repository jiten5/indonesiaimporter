# Phase 4 Quick Reference

## 🔗 Live Pages

| Page             | URL                           | Status  |
| ---------------- | ----------------------------- | ------- |
| Solutions        | `/solutions`                  | ✅ Live |
| Pricing          | `/pricing`                    | ✅ Live |
| Indonesia Import | `/countries/indonesia-import` | ✅ Live |
| Indonesia Export | `/countries/indonesia-export` | ✅ Live |

---

## 📁 File Structure

```
app/
├── solutions/
│   └── page.tsx                    # Solutions page
├── pricing/
│   └── page.tsx                    # Pricing page
└── countries/
    └── [country]/
        └── page.tsx                # Dynamic country pages

components/
├── solutions/
│   ├── SolutionsHero.tsx           # Hero section
│   ├── SolutionCard.tsx            # Solution showcase
│   ├── IndustryCard.tsx            # Industry use case
│   └── index.ts
├── pricing/
│   ├── PricingHero.tsx             # Hero + billing toggle
│   ├── PricingCard.tsx             # Plan card
│   ├── PricingFAQ.tsx              # FAQ accordion
│   └── index.ts
└── countries/
    ├── CountryHero.tsx             # Hero + stats
    ├── ProductTable.tsx            # Top products table
    ├── TradingPartnerChart.tsx     # Partners chart
    ├── MonthlyTrendChart.tsx       # Trend line chart
    ├── ShipmentPreview.tsx         # Sample shipments
    └── index.ts

lib/data/
├── solutionsData.ts                # 8 solutions + 10 industries
├── pricingData.ts                  # 4 pricing plans
└── countryData.ts                  # Indonesia import/export data
```

---

## 🎨 Component Usage

### Solutions Page Components

```tsx
import {
  SolutionsHero,
  SolutionCard,
  IndustryCard,
} from '@/components/solutions';
import { solutions, industries } from '@/lib/data/solutionsData';

// Use in page:
<SolutionsHero />;
{
  solutions.map((solution, index) => (
    <SolutionCard {...solution} reverse={index % 2 !== 0} index={index} />
  ));
}
{
  industries.map((industry, index) => (
    <IndustryCard {...industry} index={index} />
  ));
}
```

### Pricing Page Components

```tsx
import { PricingHero, PricingCard, PricingFAQ } from '@/components/pricing';
import { pricingPlans } from '@/lib/data/pricingData';

// Use in page:
<PricingHero />;
{
  pricingPlans.map((plan, index) => <PricingCard {...plan} index={index} />);
}
<PricingFAQ />;
```

### Country Page Components

```tsx
import {
  CountryHero,
  ProductTable,
  TradingPartnerChart,
  MonthlyTrendChart,
  ShipmentPreview,
} from '@/components/countries';
import { getCountryData } from '@/lib/data/countryData';

const data = getCountryData('indonesia', 'import');

<CountryHero country="Indonesia" type="import" stats={data.stats} />
<ProductTable products={data.topProducts} />
<TradingPartnerChart partners={data.tradingPartners} />
<MonthlyTrendChart data={data.monthlyTrend} type="import" />
<ShipmentPreview shipments={data.sampleShipments} />
```

---

## 📊 Data Structures

### Solutions Data

```typescript
{
  id: 'trade-data-intelligence',
  title: 'Trade Data Intelligence',
  problem: 'Inconsistent or outdated trade data...',
  solution: 'Our platform provides updated trade insights...',
  icon: Database,
  visual: 'Dashboard screenshot'
}
```

### Pricing Plan

```typescript
{
  id: 'essential',
  name: 'Essential',
  price: 4000,
  monthlyPrice: 400,
  badge: 'Most Popular',
  badgeColor: 'green',
  features: ['31 Countries', 'Unlimited Searches', ...],
  cta: 'Start Free Trial',
  ctaVariant: 'primary',
  isPopular: true
}
```

### Country Data

```typescript
{
  name: 'Indonesia',
  import: {
    stats: { totalShipments, totalValue, topPartners, dataFrom, growth },
    topProducts: [{ hsCode, description, shipments, value, growth }],
    tradingPartners: [{ country, value, percentage }],
    monthlyTrend: [{ month, value }],
    sampleShipments: [{ date, hsCode, product, importer, supplier, value, quantity }]
  }
}
```

---

## 🚀 Quick Start

### Test All Pages

```bash
# Start dev server
npm run dev

# Visit pages:
http://localhost:3000/solutions
http://localhost:3000/pricing
http://localhost:3000/countries/indonesia-import
http://localhost:3000/countries/indonesia-export
```

### Add New Country

```typescript
// lib/data/countryData.ts
export const countryData = {
  indonesia: {
    /* existing */
  },
  china: {
    name: 'China',
    import: {
      /* data */
    },
    export: {
      /* data */
    },
  },
};

// URL automatically available:
// /countries/china-import
// /countries/china-export
```

### Customize Pricing

```typescript
// lib/data/pricingData.ts
export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 1400, // Update price
    features: [
      // Add/remove features
      '11 Countries',
      'NEW FEATURE HERE',
    ],
  },
];
```

---

## 🎯 Key Features by Page

### Solutions Page

- ✅ 8 trade intelligence solutions
- ✅ Problem-solution framework
- ✅ Alternating layout
- ✅ 10 industry use cases
- ✅ Animated scroll effects

### Pricing Page

- ✅ 4 pricing tiers
- ✅ Billing toggle (monthly/annual)
- ✅ "Most Popular" badge
- ✅ 7-question FAQ
- ✅ Trust badges

### Country Pages

- ✅ Dynamic routing
- ✅ 3 chart types (bar, line, table)
- ✅ Data masking
- ✅ Unlock CTA
- ✅ SEO optimized

---

## 🔧 Customization Guide

### Change Solution Icons

```tsx
// lib/data/solutionsData.ts
import { NewIcon } from 'lucide-react';

{
  icon: NewIcon,  // Change icon here
}
```

### Modify Pricing Plans

```typescript
// lib/data/pricingData.ts
{
  name: 'Pro',           // Plan name
  price: 5000,           // Annual price
  monthlyPrice: 500,     // Monthly price
  badge: 'Popular',      // Badge text
  badgeColor: 'green',   // Badge color
  isPopular: true,       // Highlight card
}
```

### Add FAQ Question

```tsx
// components/pricing/PricingFAQ.tsx
const faqs = [
  {
    question: 'Your question here?',
    answer: 'Your detailed answer here.',
  },
];
```

---

## 📱 Responsive Testing

| Breakpoint    | Width      | Layout                     |
| ------------- | ---------- | -------------------------- |
| Mobile (sm)   | < 640px    | Stacked, horizontal scroll |
| Tablet (md)   | 640-1024px | 2-3 columns                |
| Desktop (lg+) | > 1024px   | Full grid layouts          |

**Test Commands:**

```bash
# Chrome DevTools
F12 → Toggle Device Toolbar (Ctrl+Shift+M)

# Responsive viewports:
- iPhone 12 Pro (390×844)
- iPad Air (820×1180)
- Desktop (1920×1080)
```

---

## 🐛 Troubleshooting

### Charts Not Rendering

```bash
# Ensure Recharts is installed
npm install recharts

# Check imports
import { BarChart, LineChart } from 'recharts';
```

### Dynamic Routes Not Working

```bash
# Check folder structure:
app/countries/[country]/page.tsx  # ✅ Correct
app/countries/country/page.tsx    # ❌ Wrong

# Restart dev server
npm run dev
```

### Data Not Showing

```typescript
// Check data import
import { countryData } from '@/lib/data/countryData';
const data = getCountryData('indonesia', 'import');
console.log(data); // Debug output
```

---

## ✅ Quality Checklist

Before deploying Phase 4:

- [ ] All pages load without errors
- [ ] Charts display data correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] All CTAs link to correct pages
- [ ] Data masking works on country pages
- [ ] FAQ accordions expand/collapse smoothly
- [ ] Pricing cards highlight "Most Popular"
- [ ] SEO metadata is present on all pages
- [ ] Animations are smooth (no jank)
- [ ] Images/icons load properly

---

## 📚 Related Documentation

- [PHASE4_COMPLETE.md](./PHASE4_COMPLETE.md) - Full documentation
- [PRD.md](./PRD.md) - Original requirements
- [PHASE3_SUMMARY.md](./PHASE3_SUMMARY.md) - Previous phase
- [README.md](./README.md) - Project overview

---

## 🎉 Success Metrics

**Pages Created:** 3 (Solutions, Pricing, Country template)  
**Components Created:** 13  
**Data Files:** 3  
**Total Files:** 18  
**Lines of Code:** ~2,500

**Phase 4 Status:** ✅ **COMPLETE**

---

**Need Help?** Check [PHASE4_COMPLETE.md](./PHASE4_COMPLETE.md) for detailed documentation!
