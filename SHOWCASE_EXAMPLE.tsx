// Component Showcase Page
// This file demonstrates all UI components
// Copy this to app/showcase/page.tsx to view in browser

'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  Textarea,
  Select,
  Badge,
  Tooltip,
  Modal,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Accordion,
  Checkbox,
  Radio,
  Switch,
  Progress,
  Alert,
  Divider,
  Avatar,
  Skeleton,
  Spinner,
} from '@/components/ui';
import { Search, Info, AlertCircle, CheckCircle } from 'lucide-react';

export default function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <div className="min-h-screen bg-surface">
      <div className="container-custom section-padding">
        <div className="mb-12 text-center">
          <h1 className="gradient-text-primary mb-4">Component Showcase</h1>
          <p className="text-xl text-text-secondary">
            19+ Production-Ready UI Components
          </p>
        </div>

        <div className="space-y-12">
          {/* Buttons */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>7 variants with loading states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="gradient">Gradient</Button>
                <Button variant="primary" loading>
                  Loading
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card variant="default">
              <CardContent>Default Card</CardContent>
            </Card>
            <Card variant="elevated">
              <CardContent>Elevated Card</CardContent>
            </Card>
            <Card variant="interactive">
              <CardContent>Interactive Card (hover me)</CardContent>
            </Card>
          </div>

          {/* Forms */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Form Inputs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  leftIcon={<Search className="h-4 w-4" />}
                />
                <Textarea
                  label="Message"
                  placeholder="Enter your message"
                  rows={3}
                />
                <Select
                  label="Country"
                  options={[
                    { value: 'id', label: 'Indonesia' },
                    { value: 'cn', label: 'China' },
                    { value: 'us', label: 'United States' },
                  ]}
                />
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>8 variants</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="gradient">Gradient</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Shipments</TabsTrigger>
                  <TabsTrigger value="tab2">Companies</TabsTrigger>
                  <TabsTrigger value="tab3">Analytics</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                  <p className="text-text-secondary">Shipments content</p>
                </TabsContent>
                <TabsContent value="tab2">
                  <p className="text-text-secondary">Companies content</p>
                </TabsContent>
                <TabsContent value="tab3">
                  <p className="text-text-secondary">Analytics content</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Accordion</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion
                items={[
                  {
                    id: '1',
                    title: 'What is this platform?',
                    children: (
                      <p>A comprehensive trade intelligence platform.</p>
                    ),
                  },
                  {
                    id: '2',
                    title: 'How does it work?',
                    children: <p>Search and analyze trade data easily.</p>,
                  },
                ]}
              />
            </CardContent>
          </Card>

          {/* Checkboxes, Radios, Switch */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Form Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Checkbox label="Accept terms and conditions" />
                <Divider />
                <div className="space-y-2">
                  <Radio name="type" value="import" label="Import" />
                  <Radio name="type" value="export" label="Export" />
                </div>
                <Divider />
                <Switch
                  label="Enable notifications"
                  checked={switchValue}
                  onChange={(e) => setSwitchValue(e.target.checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Progress Bars</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={45} variant="default" showLabel />
                <Progress value={75} variant="success" showLabel />
                <Progress value={30} variant="warning" showLabel />
                <Progress value={90} variant="error" showLabel />
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <div className="space-y-4">
            <Alert variant="info" icon={<Info />}>
              This is an informational message.
            </Alert>
            <Alert variant="success" icon={<CheckCircle />}>
              Operation completed successfully!
            </Alert>
            <Alert variant="warning" icon={<AlertCircle />}>
              Please review your input.
            </Alert>
            <Alert variant="error" icon={<AlertCircle />}>
              An error occurred during processing.
            </Alert>
          </div>

          {/* Avatars */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Avatars</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar fallback="JD" size="sm" />
                <Avatar fallback="JD" size="md" />
                <Avatar fallback="JD" size="lg" />
                <Avatar fallback="JD" size="xl" />
              </div>
            </CardContent>
          </Card>

          {/* Modal */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Modal</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Example Modal"
                description="This is a modal dialog"
              >
                <p>Modal content goes here...</p>
              </Modal>
            </CardContent>
          </Card>

          {/* Skeletons */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Skeleton Loaders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton variant="text" width="200px" />
                <Skeleton variant="rectangular" width="100%" height={100} />
                <div className="flex items-center gap-4">
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton variant="text" width="150px" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Spinner */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Loading Spinners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-8">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="xl" />
              </div>
            </CardContent>
          </Card>

          {/* Tooltip */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Tooltips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Tooltip content="Top tooltip" position="top">
                  <Button variant="outline">Hover Top</Button>
                </Tooltip>
                <Tooltip content="Right tooltip" position="right">
                  <Button variant="outline">Hover Right</Button>
                </Tooltip>
                <Tooltip content="Bottom tooltip" position="bottom">
                  <Button variant="outline">Hover Bottom</Button>
                </Tooltip>
                <Tooltip content="Left tooltip" position="left">
                  <Button variant="outline">Hover Left</Button>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
