# Context Menu

Source: `content/docs/components/context-menu.mdx`

```tsx
"use client";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="text-muted-foreground flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>Open</ContextMenuItem>
        <ContextMenuItem>Download</ContextMenuItem>
        <ContextMenuItem>Print</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/context-menu
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
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
```

```tsx
<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Action 1</ContextMenuItem>
    <ContextMenuItem>Action 2</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## API Reference

### Root

## Accessibility

The ContextMenu component follows WAI-ARIA guidelines:

- Opens on right-click or long-press
- Arrow keys navigate items
- Escape closes menu
- Focus returns to trigger when closed
- Touch-friendly with long-press

### Keyboard Navigation

- `Arrow Down` - Moves to next item
- `Arrow Up` - Moves to previous item
- `Escape` - Closes menu
- `Space/Enter` - Activates item

## Best Practices

### Use Sparingly

Context menus are a secondary interaction pattern. Don't hide primary actions in context menus.

### Provide Alternative Access

Always provide alternative ways to access context menu actions (toolbar buttons, dropdown menus).

### Don't Surprise Users

Only add context menus where users expect them (items, containers, canvas areas).

```tsx
// ✅ Good - expected context
<ContextMenu>
  <ContextMenuTrigger>
    <Card>{/* card content */}</Card>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Edit</ContextMenuItem>
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>

// ❌ Bad - unexpected on buttons
<ContextMenu>
  <ContextMenuTrigger>
    <Button>Click me</Button> {/* Buttons already have actions */}
  </ContextMenuTrigger>
</ContextMenu>
```

### Touch Considerations

Context menus work on touch devices with long-press, but consider providing visible alternatives.

## Related Components

- [Dropdown Menu](/docs/components/dropdown-menu) - For click-triggered menus
- [Menubar](/docs/components/menubar) - For application menus
