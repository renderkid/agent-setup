# Dropdown Menu

Source: `content/docs/components/dropdown-menu.mdx`

```tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Open
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/dropdown-menu
```

- Install the following dependencies:

```bash
npm install @base-ui/react lucide-react
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
```

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## API Reference

### Root

## Accessibility

The DropdownMenu component follows WAI-ARIA menu guidelines:

- Opens with click or Space/Enter
- Arrow keys navigate items
- Type-ahead to focus items
- Escape closes menu
- Focus returns to trigger when closed

### Keyboard Navigation

- `Space/Enter` - Opens menu and activates items
- `Arrow Down` - Moves to next item
- `Arrow Up` - Moves to previous item
- `Escape` - Closes menu
- `Tab` - Closes menu and moves focus

## Best Practices

### Group Related Actions

Use labels and separators to organize menu items into logical groups.

```tsx
<DropdownMenuContent>
  <DropdownMenuLabel>Actions</DropdownMenuLabel>
  <DropdownMenuItem>Edit</DropdownMenuItem>
  <DropdownMenuItem>Duplicate</DropdownMenuItem>
  <DropdownMenuSeparator />
  <DropdownMenuItem>Delete</DropdownMenuItem>
</DropdownMenuContent>
```

### Destructive Actions Last

Place destructive actions at the bottom, separated from other items.

### Show Keyboard Shortcuts

Use `DropdownMenuShortcut` to display keyboard shortcuts for discoverability.

### Disable When Appropriate

Disable menu items that aren't currently applicable rather than hiding them.

## Related Components

- [Context Menu](/docs/components/context-menu) - For right-click menus
- [Menubar](/docs/components/menubar) - For application menu bars
- [Popover](/docs/components/popover) - For custom popovers
