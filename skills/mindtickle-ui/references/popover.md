# Popover

Source: `content/docs/components/popover.mdx`

```tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Are you absolutely sure?</PopoverTitle>
          <PopoverDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/popover
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
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";
```

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Are you absolutely sure?</PopoverTitle>
      <PopoverDescription>This action cannot be undone.</PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>
```

## Examples

### Positioning

Control where the popover appears relative to the trigger using `side` and `align` props.

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent side="top" align="end">
    <PopoverHeader>
      <PopoverTitle>Popover Title</PopoverTitle>
      <PopoverDescription>Popover description text.</PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>
```

## API Reference

### Root

Displays rich content in a floating panel, anchored to a trigger element.

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| open | `boolean` | - | Controlled open state. Use with onOpenChange for controlled popover behavior. |
| defaultOpen | `boolean` | `false` | Initial open state for uncontrolled popover. |
| onOpenChange | `(open: boolean) => void` | - | Callback fired when the popover's open state changes. |
| modal | `boolean` | `false` | When true, prevents interaction with content outside the popover. When false, allows clicking outside to close. |

## Accessibility

The Popover component follows WAI-ARIA guidelines:

- Manages focus automatically when opened/closed
- Traps focus within the popover when open
- Returns focus to the trigger when closed
- Supports keyboard navigation (Escape to close)
- Announces state changes to screen readers

### Keyboard Navigation

- `Escape` - Closes the popover
- `Tab` - Moves focus within the popover
- Clicking outside the popover closes it

## Best Practices

- Use popovers for supplementary content that doesn't require immediate attention
- Keep content concise – popovers work best for short forms, actions, or information
- Position popovers to avoid covering important UI elements
- Consider mobile users – popovers may need different positioning on smaller screens
- Use `PopoverHeader`, `PopoverTitle`, and `PopoverDescription` for structured content
