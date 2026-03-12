# Checkbox

Source: `content/docs/components/checkbox.mdx`

```tsx
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/checkbox
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
import { Checkbox } from "@/components/ui/checkbox";
```

```tsx
<Checkbox />
```

## Examples

### With Label

Always pair checkboxes with labels for clarity and accessibility.

```tsx
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}

```

### With Text

For checkboxes that need additional context, add descriptive text below the label.

```tsx
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxWithText() {
  return (
    <div className="flex items-start gap-2">
      <Checkbox id="marketing" className="mt-0.5" />
      <div className="flex flex-col gap-1">
        <Label htmlFor="marketing">Marketing emails</Label>
        <p className="text-muted-foreground text-sm">
          Receive emails about new products, features, and more.
        </p>
      </div>
    </div>
  );
}

```

### Disabled

Use the `disabled` prop to prevent interaction.

```tsx
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDisabled() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked">Disabled unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked">Disabled checked</Label>
      </div>
    </div>
  );
}

```

## API Reference

### Checkbox

## Accessibility

The Checkbox component follows WAI-ARIA guidelines:

- Uses Base UI's accessible checkbox primitive
- Keyboard navigable with `Space` to toggle
- Focus visible styles for keyboard users
- Works with form labels via `id` and `htmlFor`
- Disabled state properly communicated to assistive tech
- Native form integration with `name` and `value` props

### Keyboard Navigation

- `Space` - Toggles the checkbox
- `Tab` - Moves focus to/from the checkbox

## Best Practices

### Always Use Labels

Checkboxes should always have an associated label. Use the Label component with matching `id` and `htmlFor` attributes.

```tsx
// ✅ Good
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>

// ❌ Bad - no label
<Checkbox />
```

### Alignment

When pairing with multi-line text, add `mt-0.5` to the checkbox to align with the first line of text.

### Group Related Checkboxes

For multiple related options, wrap checkboxes in a fieldset with a legend for screen readers.

## Related Components

- [Radio Group](/docs/components/radio-group) - For single selections
- [Switch](/docs/components/switch) - For binary on/off states
- [Field](/docs/components/field) - For form field layouts
