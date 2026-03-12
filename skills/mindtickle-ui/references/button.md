# Button

Source: `content/docs/components/button.mdx`

```tsx
"use client";

import { Button } from "@/components/ui/button";

export function ButtonExample() {
  return <Button>Click me</Button>;
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/button
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
import { Button } from "@/components/ui/button";
```

```tsx
<Button>Button</Button>
```

## Examples

### Variants

#### Default

Use the default variant for primary calls-to-action – it delivers the highest emphasis.

```tsx
"use client";

import { Button } from "@/components/ui/button";

export function ButtonExample() {
  return <Button>Click me</Button>;
}

```

#### Surface

Surface buttons mirror their background while keeping clear shape, making them ideal for secondary actions.

```tsx
"use client";

import { Button } from "@/components/ui/button";

export function ButtonSurface() {
  return <Button variant="surface">Surface</Button>;
}

```

#### Outline

Outline buttons keep visual weight low while remaining discoverable.

```tsx
"use client";

import { Button } from "@/components/ui/button";

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>;
}

```

#### Soft

Soft buttons add a subtle tint for surfaces where you want color without extra contrast.

```tsx
"use client";

import { Button } from "@/components/ui/button";

export function ButtonSoft() {
  return <Button variant="soft">Soft</Button>;
}

```

#### Ghost

Ghost buttons merge into the background and work well for inline or toolbar actions.

```tsx
"use client";

import { Button } from "@/components/ui/button";

export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>;
}

```

#### Link

Link buttons stay minimal while still feeling interactive – perfect for inline navigation.

```tsx
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function LinkAsButton() {
  return (
    <Button
      nativeButton={false}
      render={<Link href="/sign-in" />}
      variant="link"
    >
      Sign in
    </Button>
  );
}
```

> When using the <code>render</code> prop with non-button elements (like <code>&lt;Link&gt;</code> or <code>&lt;a&gt;</code>), you must set <code>nativeButton={false}</code> to avoid Base UI warnings. This tells the component that it's intentionally rendering as a non-button element.

```tsx
"use client";

import { Button } from "@/components/ui/button";

export function ButtonLink() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button nativeButton={false} render={<a href="/login" />} variant="link">
        Sign in
      </Button>
      <Button
        nativeButton={false}
        render={<a href="/docs" />}
        variant="surface"
      >
        Documentation
      </Button>
    </div>
  );
}

```

### Colors

Use the `color` prop to reflect state – `destructive`, `warning`, `success`, `info` – or to tone things down with `muted`. `accent` is the default and pairs with your theme.

```tsx
"use client";

import { Button } from "@/components/ui/button";

export function ButtonColors() {
  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col gap-2">
        <Button color="destructive">Destructive</Button>
        <Button color="destructive" variant="surface">
          Surface Destructive
        </Button>
        <Button color="destructive" variant="outline">
          Outline Destructive
        </Button>
        <Button color="destructive" variant="ghost">
          Ghost Destructive
        </Button>
        <Button color="destructive" variant="soft">
          Soft Destructive
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button color="warning">Warning</Button>
        <Button color="warning" variant="surface">
          Surface Warning
        </Button>
        <Button color="warning" variant="outline">
          Outline Warning
        </Button>
        <Button color="warning" variant="ghost">
          Ghost Warning
        </Button>
        <Button color="warning" variant="soft">
          Soft Warning
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button color="success">Success</Button>
        <Button color="success" variant="surface">
          Surface Success
        </Button>
        <Button color="success" variant="outline">
          Outline Success
        </Button>
        <Button color="success" variant="ghost">
          Ghost Success
        </Button>
        <Button color="success" variant="soft">
          Soft Success
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button color="info">Info</Button>
        <Button color="info" variant="surface">
          Surface Info
        </Button>
        <Button color="info" variant="outline">
          Outline Info
        </Button>
        <Button color="info" variant="ghost">
          Ghost Info
        </Button>
        <Button color="info" variant="soft">
          Soft Info
        </Button>
      </div>
    </div>
  );
}

```

### Sizes

Choose the size that matches the density of the surrounding layout. Use `xs` or `sm` in dense toolbars, `default` or `md` for standard actions, and `lg` for standout CTAs. For icon-only buttons use `icon-xs`, `icon-sm`, `icon`, or `icon-lg` for square triggers.

```tsx
"use client";

import { Button } from "@/components/ui/button";

export function ButtonSizes() {
  return (
    <div className="flex items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

```

### Icons & Composition

Buttons automatically space icons, no matter if they lead or trail the label.

```tsx
"use client";

import { ArrowRight, ChevronDown, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonIcons() {
  return (
    <div className="flex items-center gap-4">
      <Button>
        <Mail />
        Login with Email
      </Button>
      <Button variant="outline">
        Continue
        <ArrowRight />
      </Button>
      <Button variant="surface">
        Options
        <ChevronDown />
      </Button>
    </div>
  );
}

```

### Icon Buttons

Use `icon`, `icon-xs`, `icon-sm`, or `icon-lg` with an `aria-label` to expose the purpose to assistive tech.

```tsx
"use client";

import { Search, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonIconOnly() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col gap-1 col-span-1">
        <h3 className="text-sm text-muted-foreground">Default size</h3>
        <div className="flex items-center gap-4">
          <Button aria-label="Search" size="icon">
            <Search />
          </Button>
          <Button aria-label="Settings" size="icon" variant="outline">
            <Settings />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-1 col-span-1">
        <h3 className="text-sm text-muted-foreground">Large size</h3>
        <div className="flex items-center gap-4">
          <Button aria-label="Search" size="icon-lg">
            <Search />
          </Button>
          <Button aria-label="Settings" size="icon-lg" variant="outline">
            <Settings />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-1 col-span-1">
        <h3 className="text-sm text-muted-foreground">Extra Small size</h3>
        <div className="flex items-center gap-4">
          <Button aria-label="Search" size="icon-xs">
            <Search />
          </Button>
          <Button aria-label="Settings" size="icon-xs" variant="outline">
            <Settings />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-1 col-span-1">
        <h3 className="text-sm text-muted-foreground">Small size</h3>
        <div className="flex items-center gap-4">
          <Button aria-label="Search" size="icon-sm">
            <Search />
          </Button>
          <Button aria-label="Settings" size="icon-sm" variant="outline">
            <Settings />
          </Button>
        </div>
      </div>
    </div>
  );
}

```

### Loading & Disabled States

Disable the button while work is in flight to prevent duplicate submissions. The loading pattern preserves width so layouts stay stable.

```tsx
"use client";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonStates() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button disabled>Disabled</Button>
      <Button disabled variant="outline">
        Disabled
      </Button>
      <Button disabled variant="ghost">
        Disabled
      </Button>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
      <Button disabled variant="outline">
        <Loader2 className="animate-spin" />
        Loading
      </Button>
    </div>
  );
}

```

## API Reference

### Button

Displays a button or component that looks like a button.

**Button Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| variant | `"default" | "solid" | "surface" | "outline" | "soft" | "secondary" | "ghost" | "link"` | `"default"` | Controls the button's visual emphasis. Use default or solid for primary actions, surface for secondary actions, and outline, soft, secondary, ghost, or link as you reduce emphasis. solid matches default; secondary matches soft. |
| color | `"accent" | "destructive" | "warning" | "success" | "info" | "muted"` | `"accent"` | Provides semantic or tonal variations across every variant. Combine colors with any variant - for example variant="outline" with color="warning" keeps things light while signalling importance. |
| fullWidth | `"true" | "false"` | `false` | Whether the button should take up the full width of its container. |
| size | `"default" | "md" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"` | `"default"` | Adjusts height and padding. Use xs or sm in dense toolbars, default/md for standard, lg for standout CTAs. Icon sizes: icon-xs, icon-sm, icon, icon-lg for square icon-only triggers. |
| nativeButton | `boolean` | `true` | Controls whether the component expects a native button element. Set to false when using render with non-button elements like Link or a. Required to avoid Base UI warnings. |
| render | `React.ReactElement | ComponentRenderFn` | - | Applies button styles to a custom element via the Base UI render prop. Ideal when turning a Link into a button without losing routing behaviour. Remember to set nativeButton={false} when rendering as non-button elements. |

## Accessibility

The Button component follows WAI-ARIA guidelines:

- Uses semantic `<button>` element with `type="button"` by default
- Supports all standard button attributes including `type`, `disabled`, `aria-label`, etc.
- Focus visible styles for keyboard users with ring indicator
- Disabled state properly communicated to screen readers with `disabled` attribute
- Can be rendered as other elements (like `<a>`) while maintaining accessibility
- Icon-only buttons should include `aria-label` for screen reader users

### Keyboard Navigation

- `Space` or `Enter` - Activates the button
- `Tab` - Moves focus to the button
- `Shift + Tab` - Moves focus away from the button

## Best Practices

### Use the Right Variant

- **Default / Solid** - Primary actions (submit, save, continue). `solid` shares the same style as `default`.
- **Surface** - Secondary actions (cancel alternative flows)
- **Outline** - Low emphasis actions that still need clear affordance
- **Soft / Secondary** - Subtle tint for cards or surfaces with dense content. `secondary` shares the same style as `soft`.
- **Ghost** - Minimal actions, toolbar buttons, or inline controls
- **Link** - Navigation or when you need a button that looks like a link
- Combine the `color` prop with any variant to communicate `destructive`, `warning`, `success`, `info`, or `muted`; `accent` is the default theme color

### Icon Guidelines

- Place icons before text for actions (e.g., "Send Email")
- Place icons after text for navigation (e.g., "Continue →")
- Use icon-only buttons sparingly and always include `aria-label`
- Ensure icons are relevant and enhance understanding

### Loading States

- Always disable buttons during async operations
- Show a loading spinner to indicate progress
- Keep the button text visible when possible
- Use `aria-busy="true"` for screen readers if needed

### Polymorphic Rendering

When using the `render` prop to render the Button as a non-button element (like `<Link>` or `<a>`):

- **Always set `nativeButton={false}`** to avoid Base UI warnings
- This tells the component that it's intentionally rendering as a non-button element
- The component will still apply all button styles and behaviors to the rendered element

```tsx
// ✅ Correct: Using render with nativeButton={false}
<Button nativeButton={false} render={<Link href="/docs" />}>
  View Docs
</Button>

// ❌ Incorrect: Missing nativeButton={false}
<Button render={<Link href="/docs" />}>
  View Docs
</Button>
```

> Avoid using multiple default or destructive buttons in the same context. There should be one clear primary action.

## Related Components

- [Dropdown Menu](/docs/components/ui/dropdown-menu) - For buttons that open menus
- [Toggle](/docs/components/ui/toggle) - For buttons with on/off states
- [Toggle Group](/docs/components/ui/toggle-group) - For grouped toggle buttons
