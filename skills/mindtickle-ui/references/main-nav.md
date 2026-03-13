# Main Nav

Source: `content/docs/blocks/main-nav.mdx`

```tsx
"use client";

import { useState } from "react";

import { MainNav } from "@/components/blocks/navigation/main-nav";

export function MainNavDemo() {
  const [currentPath, setCurrentPath] = useState("/training/overview");

  // Custom link component that updates the demo's current path
  const DemoLink = ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    // oxlint-disable-next-line no-html-link-for-pages
    <a
      className={className}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        setCurrentPath(href);
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="relative flex h-[600px] w-full overflow-hidden rounded-lg bg-muted ring-1 ring-border">
      <MainNav
        currentPath={currentPath}
        LinkComponent={DemoLink}
        site="admin"
      />
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="text-center">
          <p className="font-medium text-muted-foreground text-sm">
            Current path:
          </p>
          <code className="mt-1 block rounded bg-background px-3 py-1.5 font-mono text-sm">
            {currentPath}
          </code>
        </div>
      </div>
    </div>
  );
}

```

## Overview

The Main Nav is a production-ready sidebar navigation component featuring smooth animations, collapsible states, hover cards for quick access, and built-in route configurations for admin and learner sites. It's designed to be framework-agnostic, working seamlessly with Next.js, React Router, or plain React applications.

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/main-nav
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Copy the routes configuration file.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import { MainNav } from "@/components/navigation/main-nav";
```

### Basic Usage

```tsx
export function AppLayout() {
  return (
    <div className="flex h-screen">
      <MainNav site="admin" currentPath="/training" />
      <main className="flex-1">{/* Page content */}</main>
    </div>
  );
}
```

### With Next.js

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainNav } from "@/components/navigation/main-nav";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen">
      <MainNav site="admin" currentPath={pathname} LinkComponent={Link} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
```

### With React Router

```tsx
import { Link, useLocation } from "react-router-dom";
import { MainNav } from "@/components/navigation/main-nav";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex h-screen">
      <MainNav
        site="learner"
        currentPath={location.pathname}
        LinkComponent={Link}
      />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
```

## Examples

### Collapsed State

The navigation can start collapsed by default, showing only icons with labels.

```tsx
"use client";

import { useState } from "react";

import { MainNav } from "@/components/blocks/navigation/main-nav";

export function MainNavCollapsedDemo() {
  const [currentPath, setCurrentPath] = useState("/training/overview");

  const DemoLink = ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    // oxlint-disable-next-line no-html-link-for-pages
    <a
      className={className}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        setCurrentPath(href);
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="relative flex h-[500px] w-full overflow-hidden rounded-lg bg-muted ring-1 ring-border">
      <MainNav
        currentPath={currentPath}
        defaultCollapsed
        LinkComponent={DemoLink}
        site="admin"
      />
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="text-center">
          <p className="font-medium text-muted-foreground text-sm">
            Collapsed by default
          </p>
          <p className="mt-2 text-muted-foreground text-xs">
            Hover over items to see submenu
          </p>
        </div>
      </div>
    </div>
  );
}

```

### Learner Site

Use `site="learner"` for the learner-facing navigation structure.

```tsx
"use client";

import { useState } from "react";

import { MainNav } from "@/components/blocks/navigation/main-nav";

export function MainNavLearnerDemo() {
  const [currentPath, setCurrentPath] = useState("/home");

  const DemoLink = ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    // oxlint-disable-next-line no-html-link-for-pages
    <a
      className={className}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        setCurrentPath(href);
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="relative flex h-[600px] w-full overflow-hidden rounded-lg bg-muted ring-1 ring-border">
      <MainNav
        currentPath={currentPath}
        LinkComponent={DemoLink}
        site="learner"
      />
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="text-center">
          <p className="font-medium text-muted-foreground text-sm">
            Learner site navigation
          </p>
          <code className="mt-1 block rounded bg-background px-3 py-1.5 font-mono text-sm">
            {currentPath}
          </code>
        </div>
      </div>
    </div>
  );
}

```

### New Learner Site (Experimental)

Use `site="learner-new"` for the new learner-facing navigation structure (experimental).

```tsx
"use client";

import { useState } from "react";

import { MainNav } from "@/components/blocks/navigation/main-nav";

export function MainNavLearnerDemo() {
  const [currentPath, setCurrentPath] = useState("/home");

  const DemoLink = ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    // oxlint-disable-next-line no-html-link-for-pages
    <a
      className={className}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        setCurrentPath(href);
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="relative flex h-[600px] w-full overflow-hidden rounded-lg bg-muted ring-1 ring-border">
      <MainNav
        currentPath={currentPath}
        LinkComponent={DemoLink}
        site="learner-new"
      />
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="text-center">
          <p className="font-medium text-muted-foreground text-sm">
            New (experimental) learner site navigation
          </p>
          <code className="mt-1 block rounded bg-background px-3 py-1.5 font-mono text-sm">
            {currentPath}
          </code>
        </div>
      </div>
    </div>
  );
}

```

### Controlled State

Control the collapsed state externally for advanced use cases.

```tsx
"use client";

import { useState } from "react";

import { MainNav } from "@/components/blocks/navigation/main-nav";
import { Button } from "@/components/ui/button";

export function MainNavControlledDemo() {
  const [currentPath, setCurrentPath] = useState("/training/overview");
  const [collapsed, setCollapsed] = useState(false);

  const DemoLink = ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    // oxlint-disable-next-line no-html-link-for-pages
    <a
      className={className}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        setCurrentPath(href);
      }}
    >
      {children}
    </a>
  );

  return (
    <div className="relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg bg-muted ring-1 ring-border">
      <div className="flex items-center gap-4 border-b bg-background p-4">
        <Button
          color="muted"
          onClick={() => setCollapsed(!collapsed)}
          size="sm"
          variant="outline"
        >
          {collapsed ? "Expand" : "Collapse"}
        </Button>
        <span className="text-muted-foreground text-sm">
          Controlled state: <code>{collapsed ? "collapsed" : "expanded"}</code>
        </span>
      </div>
      <div className="flex flex-1">
        <MainNav
          collapsed={collapsed}
          currentPath={currentPath}
          LinkComponent={DemoLink}
          onCollapsedChange={setCollapsed}
          site="admin"
        />
        <div className="flex flex-1 items-center justify-center p-8">
          <code className="rounded bg-background px-3 py-1.5 font-mono text-sm">
            {currentPath}
          </code>
        </div>
      </div>
    </div>
  );
}

```

## API Reference

### MainNavProps

| Prop                      | Type                                       | Required | Default   | Description                                 |
| ------------------------- | ------------------------------------------ | -------- | --------- | ------------------------------------------- |
| `site`                    | `"admin" \| "learner"`                     | Yes      | -         | Determines which navigation list to display |
| `currentPath`             | `string`                                   | No       | `""`      | Current URL path for active state detection |
| `defaultCollapsed`        | `boolean`                                  | No       | `false`   | Initial collapsed state (uncontrolled)      |
| `collapsed`               | `boolean`                                  | No       | -         | Controlled collapsed state                  |
| `onCollapsedChange`       | `(collapsed: boolean) => void`             | No       | -         | Callback when collapsed state changes       |
| `LinkComponent`           | `ComponentType<MainNavLinkComponentProps>` | No       | `<a>`     | Custom link component for routing           |
| `showLabelsWhenCollapsed` | `boolean`                                  | No       | `true`    | Show text labels under icons when collapsed |
| `className`               | `string`                                   | No       | -         | Additional CSS classes                      |
| `footerSlot`              | `ReactNode`                                | No       | AI button | Custom footer content                       |

### MainNavLinkComponentProps

Props passed to the custom `LinkComponent`:

| Property    | Type                     | Description      |
| ----------- | ------------------------ | ---------------- |
| `href`      | `string`                 | Link destination |
| `children`  | `ReactNode`              | Link content     |
| `className` | `string`                 | CSS classes      |
| `ref`       | `Ref<HTMLAnchorElement>` | Forwarded ref    |

### NavLinkProps

Route configuration type exported from `routes.tsx`:

| Property       | Type                   | Required | Description                       |
| -------------- | ---------------------- | -------- | --------------------------------- |
| `href`         | `string`               | Yes      | Route path                        |
| `label`        | `string`               | Yes      | Display label                     |
| `compactLabel` | `string`               | No       | Shorter label for collapsed state |
| `icon`         | `ReactNode`            | Yes      | Icon for default state            |
| `iconActive`   | `ReactNode`            | Yes      | Icon for active state             |
| `children`     | `Array<{label, href}>` | No       | Submenu items                     |
| `related`      | `Array<{label, href}>` | No       | Related pages (not rendered)      |

## Features

### Smooth Animations

The Main Nav uses Motion (Framer Motion) for fluid transitions:

- **Width transitions** - Smooth expand/collapse animations
- **Submenu reveal** - Animated submenu appearance when parent is active
- **Icon transitions** - Fade in/out effects on navigation items
- **Layout animations** - Footer elements reposition smoothly

### Hover Cards

When collapsed or when a parent item has children:

- Hover over a nav item to see a preview card
- Card shows the full label and submenu items
- Quick access to child pages without expanding the nav

### Active State Detection

The component automatically detects active states:

- Parent items are active when `currentPath` starts with their `href`
- Child items are active on exact match
- Active items show filled icons and highlighted backgrounds

### Collapsible Behavior

Two modes of operation:

1. **Uncontrolled**: Use `defaultCollapsed` prop
2. **Controlled**: Use `collapsed` and `onCollapsedChange` props

The toggle button in the footer controls the collapsed state.

## Layout Structure

### Expanded State

```
┌──────────────────────────────────┐
│ Training      ←─ Parent item     │
│   Overview    ←─ Child item      │
│   Series                         │
│   Modules                        │
│ Assets                           │
│ Recordings                       │
│ ...                              │
│                                  │
│ ┌────────────────────────────┐   │
│ │ [✨]              [◀]      │   │ ← Footer
│ └────────────────────────────┘   │
└──────────────────────────────────┘
```

### Collapsed State

```
┌────────┐
│  🎓    │ ← Icon with label below
│Training│
│  📊    │
│ Assets │
│  🎙️    │
│  ...   │
│        │
│ [✨]   │
│ [◀]    │
└────────┘
```

## Customization

### Custom Routes

Modify `routes.tsx` to customize navigation items:

```tsx
// routes.tsx
import { Home, Settings } from "lucide-react";

export const adminNavList: NavLinkProps[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <Home className="size-4" />,
    iconActive: <Home className="size-4 fill-current" />,
    children: [
      { label: "Overview", href: "/overview" },
      { label: "Analytics", href: "/analytics" },
    ],
  },
  // Add more items...
];
```

### Custom Footer

Replace the default AI button with custom content:

```tsx
<MainNav
  site="admin"
  currentPath={pathname}
  footerSlot={
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <UserMenu />
    </div>
  }
/>
```

### Custom Link Component

Integrate with your routing library:

```tsx
// For Next.js App Router
import Link from "next/link";

<MainNav site="admin" currentPath={pathname} LinkComponent={Link} />;

// For React Router
import { Link } from "react-router-dom";

<MainNav site="admin" currentPath={location.pathname} LinkComponent={Link} />;
```

### Without Labels When Collapsed

Hide text labels in collapsed state for a more compact look:

```tsx
<MainNav site="admin" currentPath={pathname} showLabelsWhenCollapsed={false} />
```

## Accessibility

The Main Nav follows WAI-ARIA best practices:

- **Semantic HTML**: Uses `<aside>` landmark and `<nav>` element
- **Keyboard navigation**: Full keyboard support for all interactive elements
- **ARIA attributes**:
  - Toggle button has `aria-label` describing action
  - Links are properly focusable
- **Focus management**: Visible focus indicators on all elements
- **Screen reader support**:
  - Icon-only buttons have descriptive labels
  - Collapsed state is communicated

### Keyboard Navigation

- `Tab` - Navigate through nav items
- `Shift + Tab` - Navigate backwards
- `Enter` or `Space` - Activate links and buttons
- Toggle button collapses/expands navigation

## Theming

The component uses CSS variables from your theme:

| Variable             | Usage                  |
| -------------------- | ---------------------- |
| `--background`       | Nav background         |
| `--muted`            | Hover states           |
| `--accent`           | Active item background |
| `--muted-foreground` | Inactive text          |
| `--foreground`       | Active text            |
| `--border`           | Right border           |
| `--popover`          | Hover card background  |

## Best Practices

### Layout Integration

- Place MainNav as direct child of a flex container
- Use `h-screen` or `h-full` on parent
- Main content should have `flex-1 overflow-auto`

```tsx
<div className="flex h-screen">
  <MainNav {...props} />
  <main className="flex-1 overflow-auto">{children}</main>
</div>
```

### Route Management

- Keep routes in a separate file for maintainability
- Use consistent icon styles (all outline or all filled)
- Group related items under parent navigation
- Limit depth to 2 levels (parent → children)

### Performance

- The component uses `AnimatePresence` efficiently
- Submenu items only render when parent is active
- Hover cards are lazy-rendered
- Animations respect `prefers-reduced-motion`

> The component is framework-agnostic and works with React, Next.js, Vite, and other React-based setups. Customize `LinkComponent` for your router's Link component.

## Related Components

- [Global Header](/docs/blocks/global-header) - Site-level header with navigation and user menu
- [Page Header](/docs/blocks/page-header) - Page-level header with breadcrumbs and actions
- [Button](/docs/components/button) - Used for toggle button
- [Hover Card](/docs/components/hover-card) - Used for submenu preview
- [Scroll Area](/docs/components/scroll-area) - Used for scrollable nav content
- [Tooltip](/docs/components/tooltip) - Used for toggle button hint
