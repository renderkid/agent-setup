# Sheet

Source: `content/docs/components/sheet.mdx`

```tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open Sheet
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 px-4">
          <p className="">Sheet content goes here.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/sheet
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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
```

```tsx
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

## API Reference

### Root

## Accessibility

The Sheet component follows dialog accessibility guidelines:

- Focus trapped within sheet when open
- Escape key closes sheet
- Background content inert
- Proper ARIA labels
- Close button included by default

### Keyboard Navigation

- `Escape` - Closes the sheet
- `Tab` - Moves through interactive elements

## Best Practices

### Choose the Right Side

Sheets can slide from any edge – choose based on content and context:

- **Right (default)** - Settings, filters, details
- **Left** - Navigation, menus
- **Bottom** - Mobile actions, quick selections
- **Top** - Notifications, announcements

```tsx
<SheetContent side="left">{/* content */}</SheetContent>
```

### Don't Overload Content

Keep sheet content focused. For complex workflows, use multiple steps or a full page.

### Provide Clear Title

Always include SheetTitle and SheetDescription for context.

### Mobile Considerations

On mobile, sheets from left/right take 75% width by default. Bottom sheets are often more mobile-friendly.

## Related Components

- [Dialog](/docs/components/dialog) - For centered modals
- [Drawer](/docs/components/drawer) - For bottom sheets with drag
- [Sidebar](/docs/components/sidebar) - For persistent navigation
