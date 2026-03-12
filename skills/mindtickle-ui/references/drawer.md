# Drawer

Source: `content/docs/components/drawer.mdx`

```tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            This is a drawer component built with Vaul.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-muted-foreground text-sm">
            Drawer content goes here. Pull down to dismiss.
          </p>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/drawer
```

- Install the following dependencies:

```bash
npm install vaul
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
```

```tsx
<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>Cancel</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

## API Reference

### Root

## Accessibility

The Drawer component is built on Vaul with accessibility features:

- Focus trapped within drawer when open
- Escape key closes drawer
- Drag gesture to dismiss
- Background content inert
- Proper ARIA labels

### Keyboard Navigation

- `Escape` - Closes the drawer
- `Tab` - Moves through interactive elements

## Best Practices

### Mobile-First Pattern

Drawers work best on mobile devices. Consider using Dialog on desktop.

### Drag Handle

The drag handle at the top provides a clear affordance for dismissal.

### Don't Nest Drawers

Avoid opening drawers from within other drawers – use Dialog instead.

### Keep Content Scrollable

Drawer content should scroll if it exceeds the available height.

## Related Components

- [Dialog](/docs/components/dialog) - For desktop modals
- [Sheet](/docs/components/sheet) - For side panels
- [Alert Dialog](/docs/components/alert-dialog) - For confirmations
