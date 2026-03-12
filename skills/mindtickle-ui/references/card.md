# Card

Source: `content/docs/components/card.mdx`

Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/registry/default/ui/card";
import { Button } from "@/registry/default/ui/button";

```tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardDefault() {
  return (
    <div className="space-y-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px]" size="sm">
        <CardHeader>
          <CardTitle>Card Title (Small)</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

    ```bash npx shadcn@latest add @mindtickle/card ```

      - Copy and paste the following code into your project.
      _Registry source is installed via the Mindtickle shadcn registry._
      - Update the import paths to match your project setup.

## Usage

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
```

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

**Size Variant**

The Card component supports a `size` prop for compact layouts:

```tsx
<Card size="sm">
  <CardHeader>
    <CardTitle>Compact Card</CardTitle>
    <CardDescription>Smaller padding and spacing</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content with reduced spacing.</p>
  </CardContent>
</Card>
```

**CardAction in Header**

Use `CardAction` to place action buttons in the card header:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card with Header Action</CardTitle>
    <CardDescription>Description text</CardDescription>
    <CardAction>
      <Button size="icon" variant="ghost">
        <MoreVertical />
      </Button>
    </CardAction>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
</Card>
```

## Examples

### Default

```tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardDefault() {
  return (
    <div className="space-y-4">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
      <Card className="w-[350px]" size="sm">
        <CardHeader>
          <CardTitle>Card Title (Small)</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

```

### With Actions

Cards can include action buttons in the footer or header.

```tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardActions() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Project</CardTitle>
        <CardDescription>Deploy your new project in one-click</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Your project will be deployed to the production environment.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}

```

```tsx
import { MoreVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CardHeaderAction() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Project Settings</CardTitle>
        <CardDescription>
          Manage your project configuration and preferences
        </CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-label="More options" size="icon" variant="ghost">
                <MoreVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem variant="destructive">Disable</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span>Auto-deploy</span>
            <span className="text-muted-foreground">Enabled</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Notifications</span>
            <span className="text-muted-foreground">Enabled</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

```

### Notification Card

A card designed for notifications with an icon and action.

```tsx
import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardNotification() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          Notifications
        </CardTitle>
        <CardDescription>You have 3 unread messages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground text-sm">
          Click the button below to view all notifications.
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View All</Button>
      </CardFooter>
    </Card>
  );
}

```

### Settings Card

A card for settings with multiple actions and descriptions.

```tsx
import { ChevronRight, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardSettings() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </CardTitle>
        <CardDescription>
          Manage your account settings and preferences
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Email notifications</span>
            <span className="text-muted-foreground">Enabled</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Two-factor authentication</span>
            <span className="text-muted-foreground">Disabled</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">
          Manage Settings
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

```

### Product Card

A card for displaying product information with image and pricing.

```tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardProduct() {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <div className="mb-4 aspect-video w-full rounded-md bg-muted" />
        <CardTitle>Premium Plan</CardTitle>
        <CardDescription>Advanced features for growing teams</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Team members</span>
            <span className="text-muted-foreground">Up to 50</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Storage</span>
            <span className="text-muted-foreground">1TB</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Support</span>
            <span className="text-muted-foreground">24/7</span>
          </div>
        </div>
        <div className="mt-4">
          <div className="font-bold text-2xl">$29</div>
          <div className="text-muted-foreground text-sm">per month</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Get Started</Button>
      </CardFooter>
    </Card>
  );
}

```

### With Image

Cards can include images at the top. The image automatically handles rounded corners and spacing.

```tsx
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithImage() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
      <img
        alt="Beautiful landscape"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
        src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Photo by mymind on Unsplash"
      />
      <CardHeader>
        <CardTitle>Beautiful Landscape</CardTitle>
        <CardDescription>
          A stunning view that captures the essence of natural beauty.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">
          <Plus />
          Button
        </Button>
      </CardFooter>
    </Card>
  );
}

```

```tsx
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithImageSm() {
  return (
    <Card
      className="relative mx-auto w-full max-w-xs data-[size=sm]:pt-0"
      size="sm"
    >
      <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
      <img
        alt="Beautiful landscape"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
        src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Photo by mymind on Unsplash"
      />
      <CardHeader>
        <CardTitle>Beautiful Landscape</CardTitle>
        <CardDescription>
          A stunning view that captures the essence of natural beauty.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" size="sm">
          <Plus />
          Button
        </Button>
      </CardFooter>
    </Card>
  );
}

```

## API Reference

### Root

A container component for grouping related content with consistent styling and structure.

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| size | `"sm" | "default"` | `"default"` | Controls the card's padding and spacing. Use sm for compact cards in dense layouts or default for standard card presentations. |

### Header

Header section of the card, typically containing the title and optional description or actions.

### Title

The main heading text for the card.

### Description

Descriptive text providing additional context about the card content.

### Content

Main content area of the card with consistent padding.

### Footer

Footer section with muted background, typically containing secondary actions or metadata.

### Action

Action buttons or controls positioned in the top-right corner of the card header.

## Accessibility

The Card component follows accessibility best practices:

- Uses semantic HTML structure with proper heading hierarchy
- CardTitle uses appropriate heading level (h3 by default)
- CardDescription provides additional context for screen readers
- Focus management is handled by interactive elements within the card
- Proper color contrast for text and background elements

### Keyboard Navigation

- `Tab` - Moves focus to interactive elements within the card
- `Enter` or `Space` - Activates buttons or links within the card
- `Shift + Tab` - Moves focus away from the card

## Best Practices

### Content Structure

- Use CardTitle for the main heading of the card
- Use CardDescription for additional context or subtitle
- Keep CardContent focused and scannable
- Use CardFooter for actions or metadata

### Layout Guidelines

- Maintain consistent spacing between card elements
- Use appropriate card widths for your layout (avoid too wide on large screens)
- Consider responsive behavior for mobile devices
- Group related actions in the footer

### Visual Hierarchy

- Use CardTitle to establish the primary information
- Use CardDescription for secondary information
- Keep content concise and focused
- Use consistent styling across all cards in your application

> Avoid nesting cards within cards as it can create visual confusion and accessibility issues.

## Related Components

- [Button](/docs/components/ui/button) - For actions within card footers
- [Badge](/docs/components/ui/badge) - For status indicators in cards
- [Avatar](/docs/components/ui/avatar) - For user information in cards
