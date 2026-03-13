# Global Header

Source: `content/docs/blocks/global-header.mdx`

```tsx
"use client";

import { GlobalHeader } from "@/components/blocks/header/global-header";

export function GlobalHeaderDemo() {
  return (
    <div className="relative min-h-[300px] w-full overflow-hidden rounded-lg bg-muted ring-1 ring-border">
      <GlobalHeader
        user={{
          name: "Jane Doe",
          email: "jane@acme.com",
          initials: "JD",
          profileHref: "/profile",
          menuItems: [
            { label: "Settings", href: "/settings" },
            { label: "Billing", href: "/billing" },
          ],
          onSignOut: () => {
            /* Handle sign out */
          },
        }}
      />
    </div>
  );
}

```

## Overview

The Global Header is a streamlined header component designed for authenticated applications. Built with shadcn/ui components (Button, Dropdown Menu, Tooltip, Avatar), it provides a consistent navigation experience with brand identity, search, support menu, notifications, and user account management – all in a framework-agnostic design.

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/global-header
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import { GlobalHeader } from "@/components/header/global-header";
```

```tsx
export function AppLayout() {
  return (
    <GlobalHeader
      user={{
        name: "Jane Doe",
        email: "jane@acme.com",
        initials: "JD",
        profileHref: "/profile",
        menuItems: [
          { label: "Settings", href: "/settings" },
          { label: "Billing", href: "/billing" },
        ],
        onSignOut: () => handleSignOut(),
      }}
    />
  );
}
```

### With Custom Search

Replace the default search placeholder with your own search component:

```tsx
import { GlobalHeader } from "@/components/header/global-header";
import { SearchBar } from "@/components/search-bar";

export function AppHeader() {
  return (
    <GlobalHeader
      searchComponent={
        <SearchBar
          placeholder="Search projects, files, or ask AI…"
          onSearch={handleSearch}
        />
      }
      user={{
        name: "Jane Doe",
        email: "jane@acme.com",
      }}
    />
  );
}
```

## API Reference

### GlobalHeaderProps

| Prop              | Type               | Required | Default             | Description                       |
| ----------------- | ------------------ | -------- | ------------------- | --------------------------------- |
| `user`            | `GlobalHeaderUser` | No       | -                   | User account information and menu |
| `searchComponent` | `ReactNode`        | No       | Default placeholder | Custom search component           |
| `className`       | `string`           | No       | -                   | Additional CSS classes            |

### GlobalHeaderUser

| Property      | Type                                                          | Required | Description                                                  |
| ------------- | ------------------------------------------------------------- | -------- | ------------------------------------------------------------ |
| `name`        | `string`                                                      | No       | User's display name                                          |
| `email`       | `string`                                                      | No       | User's email address                                         |
| `avatarUrl`   | `string`                                                      | No       | Avatar image URL                                             |
| `initials`    | `string`                                                      | No       | Fallback initials (auto-generated from name if not provided) |
| `menuItems`   | `Array<{label: string, href?: string, onClick?: () => void}>` | No       | Custom user menu items                                       |
| `onSignOut`   | `() => void`                                                  | No       | Sign out handler                                             |
| `profileHref` | `string`                                                      | No       | Profile page URL                                             |

## Features

### Built-in Components

The Global Header includes several pre-configured elements:

- **Brand Section** - "Acme Inc." logo and name (left side)
- **Search Bar** - Centered search with keyboard shortcut indicator (`/`)
- **Support Menu** - Help & support dropdown with:
  - Report an issue
  - Chat with support
  - View help center
- **Notifications** - Bell icon with badge count (hardcoded to 2)
- **User Menu** - Avatar dropdown with theme switcher, profile, and sign out

### User Menu Features

The integrated UserMenu component includes:

- User avatar with fallback initials
- Name and email display
- Theme switcher (Light, Dark, System)
- Keyboard shortcuts display
- Profile link
- Custom menu items
- Sign out action

## Layout Structure

The header uses a three-section layout:

```
┌──────────────────────────────────────────────────┐
│ [Logo + Name]     [Search Bar]     [? 🔔 👤]    │
└──────────────────────────────────────────────────┘
   ↑ Left            ↑ Center          ↑ Right
```

## Accessibility

The Global Header follows WAI-ARIA best practices:

- **Semantic HTML**: Uses `<header>` landmark
- **Keyboard navigation**: Full keyboard support for all interactive elements
- **ARIA attributes**:
  - `aria-label` on icon-only buttons
  - Proper button types and roles
  - Tooltip content for context
- **Focus management**: Visible focus indicators on all interactive elements
- **Screen reader support**:
  - Icon-only buttons have descriptive `aria-label`
  - Dropdown menus are properly labeled
  - Notification badge announces count

### Keyboard Navigation

- `Tab` - Navigate through header elements
- `Shift + Tab` - Navigate backwards
- `Enter` or `Space` - Activate buttons, open dropdowns
- `/` - Focus search input (when implemented in search component)
- Theme switcher shortcuts within user menu

## Customization

### Logo

The logo is hardcoded in the component. To customize it:

1. Edit the `Logo` function in `global-header.tsx`
2. Replace the SVG with your brand logo
3. Adjust the `size-8` class if needed

### Brand Name

The brand name "Acme Inc." is hardcoded. To customize it:

1. Edit the `<span>` text in the brand section
2. Or extract it as a prop in your implementation

### Notification Count

The notification count is currently hardcoded to `2`. To make it dynamic:

1. Add `notificationCount?: number` to `GlobalHeaderProps`
2. Pass it to the `NotificationBell` component
3. Update your implementation

Example modification:

```tsx
// In GlobalHeaderProps
export interface GlobalHeaderProps {
  // ... existing props
  notificationCount?: number;
}

// In component
<NotificationBell count={notificationCount ?? 2} />;
```

### Support Menu Items

The support menu items are hardcoded. To customize them:

1. Add `supportActions?: Array<{label: string, onClick: () => void}>` prop
2. Map over the actions in the `SupportMenu` component

## Design Considerations

### Responsive Behavior

- **Desktop**: Full layout with all elements visible
- **Mobile**: User name/email hidden on small screens (Avatar only)
- Sticky positioning keeps header accessible during scroll
- 56px (14 tailwind units) fixed height

### Visual Hierarchy

- **Brand**: Left-aligned, prominent placement
- **Search**: Centered, max-width 600px
- **Actions**: Right-aligned with consistent spacing
- **User menu**: Far right, follows web conventions

### Theming

The component uses CSS variables from your theme:

- `--background` - Header background
- `--foreground` - Text color
- `--border` - Border colors
- `--muted` - Hover states and muted text
- `--destructive` - Notification badge, sign out button
- `--ring` - Focus indicators

The UserMenu component includes a theme switcher that integrates with `next-themes`.

## Best Practices

### User Experience

- Always provide user object when user is authenticated
- Include user name and email for context
- Provide meaningful menu items
- Make sign out easily discoverable
- Show notification count when there are updates

### Search Integration

- Provide custom `searchComponent` for better UX
- Implement keyboard shortcuts (e.g., `Cmd+K`, `/`)
- Support contextual search results
- Consider AI/Copilot integration in placeholder

### Performance

- Lazy load user menu content
- Optimize avatar images (use CDN, proper sizing)
- Consider suspense boundaries for async data
- Minimize layout shift on user data load

> The component is framework-agnostic and works with React, Next.js, Vite, and other React-based setups. It uses plain `<a>` tags for links – customize with your router's Link component as needed.

## Related Components

- [Page Header](/docs/blocks/page-header) - Page-level header with breadcrumbs and actions
- [Button](/docs/components/button) - Used for header actions
- [Avatar](/docs/components/avatar) - Used in user menu
- [Dropdown Menu](/docs/components/dropdown-menu) - Used for support and user menus
- [Tooltip](/docs/components/tooltip) - Used for icon button hints
