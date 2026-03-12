# Radio Group

Source: `content/docs/components/radio-group.mdx`

```tsx
"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/radio-group
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
```

```tsx
<RadioGroup defaultValue="option-one">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
```

## Examples

### Disabled Items

Individual radio items can be disabled while keeping the group functional.

```tsx
"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-two" id="option-two" disabled />
        <Label htmlFor="option-two">Option Two (Disabled)</Label>
      </div>
    </RadioGroup>
  );
}

```

## API Reference

### Root

## Accessibility

The RadioGroup component follows WAI-ARIA guidelines:

- Uses Base UI's accessible radio group primitive
- Arrow keys navigate between options
- Only one radio can be selected at a time
- First radio or selected radio receives focus
- Focus visible styles for keyboard users
- Works with form labels via `id` and `htmlFor`
- Disabled items properly communicated to assistive tech

### Keyboard Navigation

- `Arrow Down/Right` - Move to next option
- `Arrow Up/Left` - Move to previous option
- `Space` - Select focused option
- `Tab` - Move focus to/from the group

## Best Practices

### Use for Mutually Exclusive Choices

Radio groups enforce single selection. For multiple selections, use checkboxes instead.

### Always Provide Labels

Each radio item should have a label that explains the choice.

```tsx
// ✅ Good
<RadioGroup>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="yes" id="yes" />
    <Label htmlFor="yes">Yes</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="no" id="no" />
    <Label htmlFor="no">No</Label>
  </div>
</RadioGroup>

// ❌ Bad - no labels
<RadioGroup>
  <RadioGroupItem value="yes" />
  <RadioGroupItem value="no" />
</RadioGroup>
```

### Group Related Options

Use a fieldset with a legend to provide context for the group:

```tsx
<fieldset>
  <legend className="text-sm font-medium">Notification preferences</legend>
  <RadioGroup defaultValue="all">{/* Radio items */}</RadioGroup>
</fieldset>
```

### Provide Default Selection

For required choices, always provide a sensible default selection using `defaultValue` or `value`.

### Radio vs Select

Use radio groups when there are 2-5 options and you want all choices visible. For 6+ options, consider using a Select component instead.

## Related Components

- [Checkbox](/docs/components/checkbox) - For multiple selections
- [Select](/docs/components/select) - For larger option sets
- [Field](/docs/components/field) - For form field layouts
