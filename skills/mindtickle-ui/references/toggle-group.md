# Toggle Group

Source: `content/docs/components/toggle-group.mdx`

```tsx
"use client";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

export function ToggleGroupDemo() {
  return (
    <ToggleGroup multiple>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/toggle-group
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
```

```tsx
<ToggleGroup>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>
```

## Examples

### Single Selection

By default, `ToggleGroup` allows only one item to be selected at a time (mutually exclusive).

```tsx
"use client";

import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

export function ToggleGroupSingle() {
  return (
    <ToggleGroup defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Align justify">
        <AlignJustifyIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

```

### Outline Variant

Use the outline variant for a more defined appearance.

```tsx
"use client";

import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

export function ToggleGroupOutline() {
  return (
    <ToggleGroup variant="outline">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

```

## API Reference

### Root

## Accessibility

The ToggleGroup component follows WAI-ARIA guidelines:

- Uses Base UI's accessible toggle group primitive
- Arrow keys navigate between items
- Default (no `multiple` prop) enforces single selection (radio behavior)
- `multiple` prop allows multiple selections (checkbox behavior)
- Each item maintains its own pressed state
- Always include `aria-label` for icon-only toggle items

### Keyboard Navigation

- `Arrow Left/Up` - Move to previous toggle
- `Arrow Right/Down` - Move to next toggle
- `Space` or `Enter` - Toggle the focused item
- `Tab` - Move focus into/out of the group

## Best Practices

### Single vs Multiple Selection

Use the `multiple` boolean prop for independent multi-select. Omit it (or set `multiple={false}`) for mutually exclusive single selection:

```tsx
// Single selection (default) - mutually exclusive (e.g., text alignment)
<ToggleGroup>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>

// Multiple selection - independent options (e.g., text formatting)
<ToggleGroup multiple>
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
  <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
</ToggleGroup>
```

> **Note:** This component uses Base UI, not Radix UI. Do not use the `type="single"` / `type="multiple"` enum prop — it is a Radix/shadcn pattern that Base UI silently ignores. Use the `multiple` boolean instead.

### Provide Accessible Names

Icon-only toggle items must include `aria-label` for screen reader users.

### Default Selection

Provide a sensible default with `defaultValue` or `value`:

```tsx
<ToggleGroup defaultValue="left">{/* items */}</ToggleGroup>
```

### Connected vs Separated

The `spacing` prop controls visual separation:

```tsx
// Connected (default) - spacing={0}
<ToggleGroup spacing={0}>{/* items */}</ToggleGroup>

// Separated - spacing > 0
<ToggleGroup spacing={2}>{/* items */}</ToggleGroup>
```

## Related Components

- [Toggle](/docs/components/toggle) - For standalone toggles
- [Radio Group](/docs/components/radio-group) - For form selections
- [Tabs](/docs/components/tabs) - For content switching
