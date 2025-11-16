# Component Library Documentation

This document provides usage examples for all 18+ UI components in the Global Trade Intelligence Platform.

---

## 1. Button Component

**7 Variants**: primary, secondary, accent, outline, ghost, link, gradient

```tsx
import { Button } from '@/components/ui';

// Primary button
<Button variant="primary" size="md">
  Click Me
</Button>

// With loading state
<Button variant="primary" loading>
  Loading...
</Button>

// Gradient button
<Button variant="gradient" size="lg">
  Get Started
</Button>

// Icon button
<Button variant="outline" size="icon">
  <SearchIcon />
</Button>
```

---

## 2. Card Component

**5 Variants**: default, elevated, interactive, glass, outline

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui';

<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Shipment Details</CardTitle>
    <CardDescription>View shipment information</CardDescription>
  </CardHeader>
  <CardContent>{/* Content here */}</CardContent>
  <CardFooter>
    <Button>View More</Button>
  </CardFooter>
</Card>;
```

---

## 3. Input Component

```tsx
import { Input } from '@/components/ui';
import { Search } from 'lucide-react';

<Input
  label="Search Shipments"
  placeholder="Enter shipment number..."
  leftIcon={<Search className="h-4 w-4" />}
  error="This field is required"
  helperText="Search by shipment number or company name"
/>;
```

---

## 4. Textarea Component

```tsx
import { Textarea } from '@/components/ui';

<Textarea
  label="Description"
  placeholder="Enter description..."
  rows={4}
  helperText="Provide detailed information"
/>;
```

---

## 5. Select Component

```tsx
import { Select } from '@/components/ui';

<Select
  label="Country"
  options={[
    { value: 'ID', label: 'Indonesia' },
    { value: 'CN', label: 'China' },
    { value: 'US', label: 'United States' },
  ]}
  error="Please select a country"
/>;
```

---

## 6. Badge Component

**8 Variants**: default, secondary, success, warning, error, info, outline, gradient

```tsx
import { Badge } from '@/components/ui';

<Badge variant="success" size="md">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Cancelled</Badge>
<Badge variant="gradient">Premium</Badge>
```

---

## 7. Tooltip Component

```tsx
import { Tooltip } from '@/components/ui';
import { Info } from 'lucide-react';

<Tooltip content="Additional information" position="top">
  <Info className="h-4 w-4" />
</Tooltip>;
```

---

## 8. Modal Component

```tsx
import { Modal } from '@/components/ui';
import { useState } from 'react';

function Example() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Shipment Details"
      description="View complete shipment information"
      size="lg"
    >
      {/* Modal content */}
    </Modal>
  );
}
```

---

## 9. Tabs Component

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui';

<Tabs defaultValue="shipments">
  <TabsList>
    <TabsTrigger value="shipments">Shipments</TabsTrigger>
    <TabsTrigger value="companies">Companies</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="shipments">{/* Shipments content */}</TabsContent>
  <TabsContent value="companies">{/* Companies content */}</TabsContent>
  <TabsContent value="analytics">{/* Analytics content */}</TabsContent>
</Tabs>;
```

---

## 10. Accordion Component

```tsx
import { Accordion } from '@/components/ui';

<Accordion
  type="single"
  items={[
    {
      id: '1',
      title: 'Shipment Information',
      children: <p>Shipment details here...</p>,
    },
    {
      id: '2',
      title: 'Company Details',
      children: <p>Company information here...</p>,
    },
  ]}
/>;
```

---

## 11. Checkbox Component

```tsx
import { Checkbox } from '@/components/ui';

<Checkbox
  label="Accept terms and conditions"
  error="You must accept the terms"
/>;
```

---

## 12. Radio Component

```tsx
import { Radio } from '@/components/ui';

<div className="space-y-2">
  <Radio name="type" value="import" label="Import" />
  <Radio name="type" value="export" label="Export" />
</div>;
```

---

## 13. Switch Component

```tsx
import { Switch } from '@/components/ui';

<Switch label="Enable notifications" />;
```

---

## 14. Progress Component

```tsx
import { Progress } from '@/components/ui';

<Progress value={65} max={100} size="md" variant="success" showLabel />;
```

---

## 15. Alert Component

```tsx
import { Alert } from '@/components/ui';
import { AlertCircle, CheckCircle } from 'lucide-react';

<Alert
  variant="success"
  title="Success!"
  icon={<CheckCircle />}
  onClose={() => console.log('closed')}
>
  Your shipment has been successfully created.
</Alert>

<Alert variant="error" icon={<AlertCircle />}>
  An error occurred while processing your request.
</Alert>
```

---

## 16. Avatar Component

```tsx
import { Avatar } from '@/components/ui';

<Avatar src="/path/to/image.jpg" alt="John Doe" fallback="JD" size="lg" />;
```

---

## 17. Divider Component

```tsx
import { Divider } from '@/components/ui';

// Horizontal divider
<Divider />

// With label
<Divider label="OR" />

// Vertical divider
<Divider orientation="vertical" />
```

---

## 18. Skeleton Component

```tsx
import { Skeleton } from '@/components/ui';

// Text skeleton
<Skeleton variant="text" width="200px" />

// Circular skeleton (avatar)
<Skeleton variant="circular" width={40} height={40} />

// Rectangular skeleton (card)
<Skeleton variant="rectangular" width="100%" height={200} />
```

---

## 19. Spinner Component

```tsx
import { Spinner } from '@/components/ui';

<Spinner size="md" />
<Spinner size="lg" className="text-primary-500" />
```

---

## Complete Example: Shipment Card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Button,
  Avatar,
  Divider,
} from '@/components/ui';

export function ShipmentCard({ shipment }) {
  return (
    <Card variant="interactive" padding="lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Shipment #{shipment.number}</CardTitle>
            <CardDescription>{shipment.date}</CardDescription>
          </div>
          <Badge variant="success">In Transit</Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Avatar
              src={shipment.exporter.logo}
              alt={shipment.exporter.name}
              fallback="EX"
              size="md"
            />
            <div>
              <p className="font-medium">{shipment.exporter.name}</p>
              <p className="text-sm text-text-secondary">
                {shipment.origin.country}
              </p>
            </div>
          </div>

          <Divider />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-text-secondary">Total Value</p>
              <p className="text-lg font-semibold">
                ${shipment.value.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-text-secondary">Products</p>
              <p className="text-lg font-semibold">
                {shipment.products.length}
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="primary" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
```

---

## Styling Tips

### Custom Colors

All components support Tailwind CSS classes:

```tsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  Custom Gradient
</Button>
```

### Animations

Use Framer Motion for advanced animations:

```tsx
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <Card>{/* Content */}</Card>
</motion.div>;
```

### Responsive Design

All components are mobile-first and responsive:

```tsx
<Button size="sm" className="md:size-md lg:size-lg">
  Responsive Button
</Button>
```

---

## Best Practices

1. **Always provide labels** for form inputs (accessibility)
2. **Use appropriate variants** to match the action importance
3. **Include error messages** for form validation
4. **Add loading states** for async operations
5. **Use tooltips** for additional context
6. **Implement skeleton screens** while data loads
7. **Follow color semantics** (success = green, error = red, etc.)

---

For more examples and advanced usage, check the individual component files in `components/ui/`.
