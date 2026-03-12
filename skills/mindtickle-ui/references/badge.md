# Badge

Source: `content/docs/components/badge.mdx`

```tsx
"use client";

import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Badge color="accent" variant="default">
        Accent
      </Badge>
      <Badge color="destructive" variant="default">
        Destructive
      </Badge>
      <Badge color="success" variant="default">
        Success
      </Badge>
      <Badge color="warning" variant="default">
        Warning
      </Badge>
      <Badge color="info" variant="default">
        Info
      </Badge>
      <Badge color="muted" variant="default">
        Muted
      </Badge>
    </div>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/badge
```

- Install the following dependencies:

```bash
npm install @base-ui/react class-variance-authority
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import { Badge } from "@/components/ui/badge";
```

```tsx
<Badge>Badge</Badge>
```

## Examples

### Variants

#### Default

Use the default variant for high-emphasis labels and status indicators that need to stand out.

```tsx
"use client";

import { Badge } from "@/components/ui/badge";

export function BadgeSolid() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Badge color="accent" variant="default">
        Accent
      </Badge>
      <Badge color="destructive" variant="default">
        Destructive
      </Badge>
      <Badge color="success" variant="default">
        Success
      </Badge>
      <Badge color="warning" variant="default">
        Warning
      </Badge>
      <Badge color="info" variant="default">
        Info
      </Badge>
      <Badge color="muted" variant="default">
        Muted
      </Badge>
    </div>
  );
}

```

#### Surface

Surface badges combine background and border for clear definition while maintaining hierarchy.

```tsx
"use client";

import { Badge } from "@/components/ui/badge";

export function BadgeSurface() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Badge color="accent" variant="surface">
        Accent
      </Badge>
      <Badge color="destructive" variant="surface">
        Destructive
      </Badge>
      <Badge color="success" variant="surface">
        Success
      </Badge>
      <Badge color="warning" variant="surface">
        Warning
      </Badge>
      <Badge color="info" variant="surface">
        Info
      </Badge>
      <Badge color="muted" variant="surface">
        Muted
      </Badge>
    </div>
  );
}

```

#### Outline

Outline badges keep visual weight minimal while remaining clear and discoverable.

```tsx
"use client";

import { Badge } from "@/components/ui/badge";

export function BadgeOutline() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Badge color="accent" variant="outline">
        Accent
      </Badge>
      <Badge color="destructive" variant="outline">
        Destructive
      </Badge>
      <Badge color="success" variant="outline">
        Success
      </Badge>
      <Badge color="warning" variant="outline">
        Warning
      </Badge>
      <Badge color="info" variant="outline">
        Info
      </Badge>
      <Badge color="muted" variant="outline">
        Muted
      </Badge>
    </div>
  );
}

```

#### Soft

Soft badges provide subtle color hints without adding visual noise – ideal for dense interfaces.

```tsx
"use client";

import { Badge } from "@/components/ui/badge";

export function BadgeSoft() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Badge color="accent" variant="soft">
        Accent
      </Badge>
      <Badge color="destructive" variant="soft">
        Destructive
      </Badge>
      <Badge color="success" variant="soft">
        Success
      </Badge>
      <Badge color="warning" variant="soft">
        Warning
      </Badge>
      <Badge color="info" variant="soft">
        Info
      </Badge>
      <Badge color="muted" variant="soft">
        Muted
      </Badge>
    </div>
  );
}

```

### Colors

Use the `color` prop to convey semantic meaning – `destructive` for errors, `success` for completed states, `warning` for alerts, `info` for informational tags, and `muted` for neutral labels. `accent` is the default and matches your theme.

```tsx
"use client";

import { Badge } from "@/components/ui/badge";

export function BadgeColors() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="w-20 text-sm text-muted-foreground">Solid:</span>
        <Badge variant="default" color="accent">
          Accent
        </Badge>
        <Badge variant="default" color="destructive">
          Destructive
        </Badge>
        <Badge variant="default" color="success">
          Success
        </Badge>
        <Badge variant="default" color="warning">
          Warning
        </Badge>
        <Badge variant="default" color="info">
          Info
        </Badge>
        <Badge variant="default" color="muted">
          Muted
        </Badge>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="w-20 text-sm text-muted-foreground">Surface:</span>
        <Badge variant="surface" color="accent">
          Accent
        </Badge>
        <Badge variant="surface" color="destructive">
          Destructive
        </Badge>
        <Badge variant="surface" color="success">
          Success
        </Badge>
        <Badge variant="surface" color="warning">
          Warning
        </Badge>
        <Badge variant="surface" color="info">
          Info
        </Badge>
        <Badge variant="surface" color="muted">
          Muted
        </Badge>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="w-20 text-sm text-muted-foreground">Outline:</span>
        <Badge variant="outline" color="accent">
          Accent
        </Badge>
        <Badge variant="outline" color="destructive">
          Destructive
        </Badge>
        <Badge variant="outline" color="success">
          Success
        </Badge>
        <Badge variant="outline" color="warning">
          Warning
        </Badge>
        <Badge variant="outline" color="info">
          Info
        </Badge>
        <Badge variant="outline" color="muted">
          Muted
        </Badge>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="w-20 text-sm text-muted-foreground">Soft:</span>
        <Badge variant="soft" color="accent">
          Accent
        </Badge>
        <Badge variant="soft" color="destructive">
          Destructive
        </Badge>
        <Badge variant="soft" color="success">
          Success
        </Badge>
        <Badge variant="soft" color="warning">
          Warning
        </Badge>
        <Badge variant="soft" color="info">
          Info
        </Badge>
        <Badge variant="soft" color="muted">
          Muted
        </Badge>
      </div>
    </div>
  );
}

```

### Sizes

Choose the size that fits the context. Small badges work in tight spaces like table cells, while large badges are better for prominent labels or feature tags.

```tsx
"use client";

import { Badge } from "@/components/ui/badge";

export function BadgeSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}

```

### With Icons

Badges automatically size and space icons alongside text for clearer communication.

```tsx
"use client";

import { AlertCircle, Check, Clock, Info, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgeIcons() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Badge color="success" variant="default">
        <Check />
        Completed
      </Badge>
      <Badge color="warning" variant="surface">
        <Clock />
        Pending
      </Badge>
      <Badge color="destructive" variant="outline">
        <AlertCircle />
        Error
      </Badge>
      <Badge color="info" variant="soft">
        <Info />
        Information
      </Badge>
      <Badge color="muted" variant="default">
        Inactive
        <X />
      </Badge>
    </div>
  );
}

```

### Icon Only

Use icon-only badges sparingly – ensure the meaning is clear from context.

```tsx
"use client";

import { AlertCircle, Check, Clock, Info } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function BadgeIconOnly() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge color="success" size="sm" variant="default">
        <Check />
      </Badge>
      <Badge color="success" size="md" variant="default">
        <Check />
      </Badge>
      <Badge color="success" size="lg" variant="default">
        <Check />
      </Badge>
      <Badge color="warning" size="md" variant="surface">
        <Clock />
      </Badge>
      <Badge color="destructive" size="md" variant="outline">
        <AlertCircle />
      </Badge>
      <Badge color="info" size="md" variant="soft">
        <Info />
      </Badge>
    </div>
  );
}

```

### Interactive Badges

Badges can be made interactive by using the `render` prop with a button or link element.

```tsx
"use client";

import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BadgeInteractive() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Badge
        render={
          <button onClick={() => alert("Badge clicked!")} type="button" />
        }
        color="accent"
        variant="default"
      >
        Clickable Badge
      </Badge>
      <Badge
        render={<button onClick={() => alert("Remove filter")} />}
        color="accent"
        variant="outline"
      >
        Design
        <X />
      </Badge>
      <Badge
        render={<a href="#api-reference" />}
        color="info"
        variant="surface"
      >
        Documentation
      </Badge>
      <Badge
        render={<button onClick={() => alert("Feature tag clicked")} />}
        color="success"
        variant="soft"
      >
        Featured
      </Badge>
    </div>
  );
}

```

## API Reference

### Badge

Displays a badge for status indicators, labels, and categorical information.

**Badge Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| variant | `"default" | "surface" | "outline" | "soft"` | `"default"` | Controls the badge's visual style and emphasis level. Use default for emphasis, surface for bordered clarity, outline for lightweight labels, or soft for subtle tints. |
| color | `"accent" | "destructive" | "warning" | "success" | "info" | "muted"` | `"accent"` | Provides semantic meaning through color. Colors work across all variants - pair variant="soft" with color="success" for gentle positive signals. |
| size | `"sm" | "md" | "lg"` | `"md"` | Adjusts padding and font size. Use sm for compact spaces like tables, md for standard UI elements, and lg for prominent labels. |
| render | `React.ReactElement | ComponentRenderFn` | - | Applies badge styles to a custom element via the Base UI render prop. Turn a <button> or <a> into a badge while preserving interaction behavior. |

## Accessibility

The Badge component follows accessibility best practices:

- Uses semantic `<span>` element by default for non-interactive badges
- Can be rendered as interactive elements (like `<button>` or `<a>`) using `render` prop
- Maintains proper contrast ratios across all color combinations
- Supports focus visible styles when used interactively
- Icon-only badges should be used carefully – ensure meaning is clear from context
- Consider adding `aria-label` for screen readers when badge meaning isn't obvious

### Keyboard Navigation (Interactive Badges)

When using `render` with interactive elements:

- `Space` or `Enter` - Activates the badge (if rendered as button)
- `Tab` - Moves focus to the badge
- `Shift + Tab` - Moves focus away from the badge

## Best Practices

### Use the Right Variant

- **Default** - High-priority status (error states, active filters, notifications)
- **Surface** - Medium-emphasis labels that need clear boundaries
- **Outline** - Low-emphasis categorical tags or metadata
- **Soft** - Subtle indicators in dense UIs or alongside other badges

### Color Guidelines

- **Destructive** - Errors, critical issues, blocked states
- **Warning** - Cautions, pending reviews, attention needed
- **Success** - Completed, approved, active states
- **Info** - Informational tags, metadata, helpful hints
- **Accent** - Default theme color for general categorization
- **Muted** - Neutral, inactive, or secondary information

### Content Guidelines

- Keep text concise – 1-2 words maximum
- Use title case for proper nouns, sentence case otherwise
- Avoid redundant words like "status" or "label"
- Good: "Active", "Pending", "Error"
- Avoid: "Status: Active", "This is pending"

### Layout & Spacing

- Use consistent badge variants within the same context
- Align badges with the text baseline when inline
- Add appropriate spacing between multiple badges
- Consider wrapping behavior for badge groups

### When to Use Badges

✅ **Do use badges for:**

- Status indicators (active, pending, closed)
- Categories and tags
- Notification counts
- Feature flags or labels
- Version numbers

❌ **Don't use badges for:**

- Action buttons (use Button component)
- Long text content (use Card or similar)
- Complex interactive elements
- Navigation items (use appropriate nav components)

> Avoid using too many different colors in close proximity. Stick to 2-3 colors maximum in a single view to maintain clarity.

## Examples in Context

### Status Indicators

Use badges to display status information inline with text or labels.

```tsx
"use client";

import { Badge } from "@/components/ui/badge";

export function BadgeStatus() {
  return (
    <div className="flex items-center gap-2">
      <span>Project Status:</span>
      <Badge variant="default" color="success">
        Active
      </Badge>
    </div>
  );
}

```

### Tag Lists

Group multiple badges together to show categories, technologies, or metadata.

```tsx
"use client";

import { Badge } from "@/components/ui/badge";

export function BadgeTags() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Badge color="accent" variant="soft">
        React
      </Badge>
      <Badge color="accent" variant="soft">
        TypeScript
      </Badge>
      <Badge color="accent" variant="soft">
        Tailwind
      </Badge>
    </div>
  );
}

```

### Notification Counts

Position badges absolutely to show notification or message counts.

```tsx
"use client";

import { Bell } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function BadgeNotification() {
  return (
    <Button
      variant="soft"
      color="muted"
      size="icon"
      className="relative"
      onClick={() => alert("3 new notifications")}
    >
      <Bell />
      <Badge
        variant="default"
        color="destructive"
        size="sm"
        className="absolute rounded-full -right-2 -top-2"
      >
        3
      </Badge>
    </Button>
  );
}

```

### Interactive Filters

Create removable filter badges with close buttons for interactive filtering.

```tsx
"use client";

import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";

export function BadgeFilter() {
  return (
    <div className="flex flex-wrap gap-2">
      <AlertDialog>
        <AlertDialogTrigger render={<Badge variant="outline" color="accent" />}>
          Design
          <X className="size-3" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Removed Design filter</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Okay</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog>
        {" "}
        <AlertDialogTrigger render={<Badge variant="outline" color="accent" />}>
          Development
          <X className="size-3" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Removed Development filter</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Okay</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger render={<Badge variant="outline" color="accent" />}>
          Marketing
          <X className="size-3" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Removed Marketing filter</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Okay</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

```

## Related Components

- [Button](/docs/components/button) - For actionable elements
- [Avatar](/docs/components/avatar) - Often paired with badges for status
- [Card](/docs/components/card) - For grouping badge collections
