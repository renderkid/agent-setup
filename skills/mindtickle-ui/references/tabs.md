# Tabs

Source: `content/docs/components/tabs.mdx`

```tsx
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export function TabsDefault() {
  return (
    <Tabs className="w-[400px]" defaultValue="account">

        <p className="text-sm">Make changes to your account here.</p>

        <p className="text-sm">Change your password here.</p>

    </Tabs>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/tabs
```

  - Install the following dependencies:

```bash
npm install @base-ui/react
```

    - Copy and paste the following code into your project.
    _Registry source is installed via the Mindtickle shadcn registry._
    - Update the import paths to match your project setup.

## Usage

```tsx
import { Tabs, TabsList, TabsTab, TabsPanel } from "@/components/ui/tabs";
```

```tsx
<Tabs defaultValue="account">

    <p className="text-sm">Make changes to your account here.</p>

    <p className="text-sm">Change your password here.</p>

</Tabs>
```

## Examples

### Default

```tsx
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export function TabsDefault() {
  return (
    <Tabs className="w-[400px]" defaultValue="account">

        <p className="text-sm">Make changes to your account here.</p>

        <p className="text-sm">Change your password here.</p>

    </Tabs>
  );
}

```

### Underline Variant

An underline variant with a thin indicator line that highlights the active tab, providing a clean and minimal appearance.

```tsx
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export function TabsUnderline() {
  return (
    <Tabs className="w-[400px]" defaultValue="account">
      <div className="border-b">

      </div>

        <p className="text-sm">Make changes to your account here.</p>

        <p className="text-sm">Change your password here.</p>

        <p className="text-sm">Manage your notification preferences.</p>

    </Tabs>
  );
}

```

### Subtle Variant

A more subtle appearance with transparent backgrounds and minimal styling, perfect for component previews and documentation.

```tsx
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export function TabsSubtle() {
  return (
    <Tabs className="w-[400px]" defaultValue="preview">

        <div className="rounded-lg border p-4">
          <p className="text-muted-foreground text-sm">
            This is a preview of the component with subtle styling.
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-muted-foreground text-sm">
            This is where the code would be displayed.
          </p>
        </div>

    </Tabs>
  );
}

```

### With Icons

Tabs can include icons alongside text for better visual communication.

```tsx
import { Bell, Settings, User } from "lucide-react";

import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export function TabsIcons() {
  return (
    <Tabs className="w-[400px]" defaultValue="account">

        <p className="text-sm">
          Manage your account settings and profile information.
        </p>

        <p className="text-sm">Configure your application preferences.</p>

        <p className="text-sm">Control how you receive notifications.</p>

    </Tabs>
  );
}

```

### Vertical Tabs

Tabs can be arranged vertically for different layouts.

```tsx
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export function TabsVertical() {
  return (
    <Tabs className="w-[400px]" defaultValue="overview" orientation="vertical">

        <p className="text-sm">Get a high-level view of your dashboard.</p>

        <p className="text-sm">View detailed analytics and metrics.</p>

        <p className="text-sm">Generate and view reports.</p>

        <p className="text-sm">Manage your notification preferences.</p>

    </Tabs>
  );
}

```

### Vertical Underline Variant

The underline variant also works well in vertical layouts.

```tsx
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export function TabsVerticalUnderline() {
  return (
    <Tabs className="w-[400px]" defaultValue="overview" orientation="vertical">
      <div className="border-s">

      </div>

        <p className="text-sm">Get a high-level view of your dashboard.</p>

        <p className="text-sm">View detailed analytics and metrics.</p>

        <p className="text-sm">Generate and view reports.</p>

        <p className="text-sm">Manage your notification preferences.</p>

    </Tabs>
  );
}

```

### With Cards

Tabs work well with cards to organize related content.

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export function TabsCards() {
  return (
    <Tabs className="w-[400px]" defaultValue="overview">

        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>
              Summary of your current project status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Your project is on track with 75% completion.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Performance metrics and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              View detailed analytics and performance data.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reports</CardTitle>
            <CardDescription>
              Generated reports and documentation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Access your project reports and documentation.
            </p>
          </CardContent>
        </Card>

    </Tabs>
  );
}

```

### Settings Tabs

A common pattern for settings pages with multiple sections.

```tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export function TabsSettings() {
  return (
    <Tabs className="w-[400px]" defaultValue="general">

        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>
              Manage your general account preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="font-medium text-sm">Display Name</label>
              <p className="text-muted-foreground text-sm">John Doe</p>
            </div>
            <div className="space-y-2">
              <label className="font-medium text-sm">Email</label>
              <p className="text-muted-foreground text-sm">john@example.com</p>
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Manage your security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="font-medium text-sm">
                Two-Factor Authentication
              </label>
              <p className="text-muted-foreground text-sm">Disabled</p>
            </div>
            <Button>Enable 2FA</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Configure your notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="font-medium text-sm">Email Notifications</label>
              <p className="text-muted-foreground text-sm">Enabled</p>
            </div>
            <Button>Update Preferences</Button>
          </CardContent>
        </Card>

    </Tabs>
  );
}

```

## API Reference

### Root

The root tabs component that manages the state.

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| defaultValue | `string` | - | The initial active tab value when uncontrolled. |
| value | `string` | - | The controlled active tab value. Use with onValueChange for controlled tabs. |
| onValueChange | `(value: string) => void` | - | Callback fired when the active tab changes. Use with value for controlled behavior. |
| orientation | `"horizontal" | "vertical"` | `"horizontal"` | Controls the layout direction of tabs. Use horizontal for standard top-aligned tabs or vertical for side navigation patterns. |
| dir | `"ltr" | "rtl"` | `"ltr"` | Text direction for the tabs. Use rtl for right-to-left languages like Arabic or Hebrew. |
| className | `string` | - | - |

## Accessibility

The Tabs component follows WAI-ARIA guidelines:

- Uses proper ARIA attributes for tab navigation
- Implements keyboard navigation according to ARIA Authoring Practices
- Manages focus appropriately when switching between tabs
- Provides proper labeling for screen readers
- Supports both horizontal and vertical orientations

### Keyboard Navigation

- `Tab` - Moves focus to the next focusable element
- `Arrow Keys` - Navigate between tabs (left/right for horizontal, up/down for vertical)
- `Home` - Move to the first tab
- `End` - Move to the last tab
- `Enter` or `Space` - Activate the focused tab

## Best Practices

### Content Organization

- Use tabs to group related content that doesn't need to be visible simultaneously
- Keep tab labels concise and descriptive
- Limit the number of tabs to avoid overwhelming users (typically 2-7 tabs)
- Use consistent tab ordering across similar interfaces

### Visual Design

- Ensure active tab is clearly distinguished from inactive tabs
- Use appropriate spacing and sizing for touch targets
- Consider using icons alongside text for better visual hierarchy
- Maintain consistent styling across all tabs in your application
- Use the `underline` variant for a clean, minimal appearance with a thin indicator line
- Use the `subtle` variant for component previews and documentation where a less prominent appearance is desired

### User Experience

- Choose meaningful default values for the initial active tab
- Consider the user's workflow when ordering tabs
- Use tabs for content that users will switch between frequently
- Avoid using tabs for sequential steps (use a stepper instead)

> Don't use tabs for content that users need to compare side by side. Consider using a different layout pattern instead.

## Related Components

- [Card](/docs/components/ui/card) - Often used within tab content
- [Button](/docs/components/ui/button) - For actions within tab content
- [Badge](/docs/components/ui/badge) - For indicators on tab triggers
