/\*\*

- Component Import Helper
-
- This file provides quick import snippets for all UI components.
- Copy and paste the imports you need into your files.
  \*/

// ============================================
// ALL COMPONENTS (Full Import)
// ============================================

import {
// Form Components
Button,
Input,
Textarea,
Select,
Checkbox,
Radio,
Switch,

// Layout Components
Card,
CardHeader,
CardTitle,
CardDescription,
CardContent,
CardFooter,
Divider,

// Feedback Components
Badge,
Alert,
Progress,
Tooltip,
Modal,
Spinner,
Skeleton,

// Interactive Components
Tabs,
TabsList,
TabsTrigger,
TabsContent,
Accordion,

// Display Components
Avatar,
} from '@/components/ui';

// ============================================
// SELECTIVE IMPORTS (Pick What You Need)
// ============================================

// Buttons Only
import { Button } from '@/components/ui';

// Cards Only
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

// Forms Only
import { Input, Textarea, Select, Checkbox, Radio, Switch } from '@/components/ui';

// Feedback Only
import { Badge, Alert, Progress, Tooltip } from '@/components/ui';

// Navigation Only
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui';

// ============================================
// TYPE IMPORTS (For TypeScript Props)
// ============================================

import type {
ButtonProps,
CardProps,
InputProps,
TextareaProps,
SelectProps,
BadgeProps,
TooltipProps,
ModalProps,
TabsProps,
AccordionProps,
CheckboxProps,
RadioProps,
SwitchProps,
ProgressProps,
AlertProps,
AvatarProps,
SkeletonProps,
SpinnerProps,
DividerProps,
} from '@/components/ui';

// ============================================
// LAYOUT COMPONENTS
// ============================================

import { Header, Footer } from '@/components/layout';

// ============================================
// UTILITIES
// ============================================

import { cn, formatCurrency, formatDate, formatNumber } from '@/lib/utils';

// ============================================
// CONSTANTS
// ============================================

import {
SHIPMENT_STATUSES,
CURRENCIES,
COUNTRIES,
PORTS,
CONTAINER_TYPES,
NAVIGATION,
} from '@/lib/constants';

// ============================================
// TYPES
// ============================================

import type {
Shipment,
Company,
Product,
Location,
CustomsInfo,
ContainerInfo,
TradeStatistics,
SearchFilters,
SearchResults,
User,
UserRole,
Subscription,
} from '@/lib/types';

// ============================================
// ICONS (Lucide React)
// ============================================

import {
Search,
Ship,
Building2,
BarChart3,
FileText,
CheckCircle,
XCircle,
AlertCircle,
Info,
ChevronDown,
Menu,
X,
Settings,
User,
LogOut,
} from 'lucide-react';

// ============================================
// FRAMER MOTION
// ============================================

import { motion } from 'framer-motion';

// ============================================
// REACT HOOK FORM + ZOD
// ============================================

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// ============================================
// EXAMPLE: Complete Form Component Imports
// ============================================
/\*
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Input, Select, Checkbox } from '@/components/ui';

const schema = z.object({
email: z.string().email(),
password: z.string().min(8),
country: z.string(),
terms: z.boolean(),
});

export function MyForm() {
const { register, handleSubmit, formState: { errors } } = useForm({
resolver: zodResolver(schema),
});

return (

<form onSubmit={handleSubmit(onSubmit)}>
<Input {...register('email')} error={errors.email?.message} />
<Button type="submit">Submit</Button>
</form>
);
}
\*/

// ============================================
// EXAMPLE: Complete Page Component Imports
// ============================================
/\*
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from '@/components/ui';
import { Header, Footer } from '@/components/layout';
import { formatCurrency, formatDate } from '@/lib/utils';
import { SHIPMENT_STATUSES } from '@/lib/constants';
import type { Shipment } from '@/lib/types';

export default function ShipmentsPage() {
return (
<>

<Header />
<main>
<Card>
<CardHeader>
<CardTitle>Shipments</CardTitle>
</CardHeader>
<CardContent>
{/_ Content _/}
</CardContent>
</Card>
</main>
<Footer />
</>
);
}
\*/

// ============================================
// QUICK SNIPPETS
// ============================================

/\*\*

- BUTTON
- <Button variant="primary" size="md">Click Me</Button>
-
- CARD
- <Card variant="elevated">
- <CardHeader><CardTitle>Title</CardTitle></CardHeader>
- <CardContent>Content</CardContent>
- </Card>
-
- INPUT
- <Input label="Email" placeholder="Enter email" />
-
- BADGE
- <Badge variant="success">Active</Badge>
-
- TABS
- <Tabs defaultValue="tab1">
- <TabsList>
-     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
- </TabsList>
- <TabsContent value="tab1">Content</TabsContent>
- </Tabs>
  */

export {};
