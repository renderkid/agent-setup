# Tooltip

Source: `content/docs/components/tooltip.mdx`

```tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        Hover
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/tooltip
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
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
```

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>
```

## Examples

### Positioning

Control tooltip position using `side` and `align` props.

```tsx
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover</Button>
  </TooltipTrigger>
  <TooltipContent side="top" align="end">
    <p>Add to library</p>
  </TooltipContent>
</Tooltip>
```

### With Delay

Use `TooltipProvider` to configure a delay before tooltips appear.

```tsx
<TooltipProvider delay={300}>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This tooltip appears after 300ms</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## API Reference

### Root

Displays informative text when users hover over or focus on an element.

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| open | `boolean` | - | Controlled open state. Use with onOpenChange for controlled tooltip behavior. |
| defaultOpen | `boolean` | `false` | Initial open state for uncontrolled tooltip. |
| onOpenChange | `(open: boolean) => void` | - | Callback fired when the tooltip's open state changes. |
| delay | `number` | `0` | Delay in milliseconds before showing the tooltip. Use 0 for instant display or 700 for delayed display. |

## Accessibility

The Tooltip component follows WAI-ARIA guidelines:

- Automatically manages focus and hover states
- Announces tooltip content to screen readers
- Supports keyboard users (tooltips appear on focus)
- Respects `prefers-reduced-motion` for animations

### Keyboard Navigation

- `Tab` - Focus moves to trigger, tooltip appears
- `Escape` - Dismisses the tooltip
- Tooltips automatically appear on focus for keyboard users

## Best Practices

- Keep tooltip text concise – one line when possible
- Use tooltips for supplementary information, not critical content
- Don't rely on tooltips for essential instructions or error messages
- Consider mobile users – tooltips may not work well on touch devices
- Use `TooltipProvider` at a higher level to configure delay for all tooltips in a section
- Position tooltips to avoid covering important UI elements
