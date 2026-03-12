# Switch

Source: `content/docs/components/switch.mdx`

```tsx
"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/switch
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
import { Switch } from "@/components/ui/switch";
```

```tsx
<Switch />
```

## Examples

### With Label

Pair switches with labels to clarify what the toggle controls.

```tsx
"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  );
}

```

### Sizes

Switch supports `sm` and `default` sizes.

```tsx
"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchSizes() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch id="sm" size="sm" defaultChecked />
        <Label htmlFor="sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="default" defaultChecked />
        <Label htmlFor="default">Default</Label>
      </div>
    </div>
  );
}

```

### Disabled

Use the `disabled` prop to prevent interaction.

```tsx
"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchDisabled() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off">Disabled off</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on">Disabled on</Label>
      </div>
    </div>
  );
}

```

## API Reference

### Switch

## Accessibility

The Switch component follows WAI-ARIA guidelines:

- Uses Base UI's accessible switch primitive with proper ARIA attributes
- Keyboard navigable with `Space` to toggle
- Focus visible styles for keyboard users
- Works with form labels via `id` and `htmlFor`
- Disabled state properly communicated to assistive tech
- Checked state announced to screen readers

### Keyboard Navigation

- `Space` - Toggles the switch
- `Tab` - Moves focus to/from the switch

## Best Practices

### Switch vs Checkbox

Use switches for settings that take immediate effect (like toggling a feature on/off). Use checkboxes for selections that require a form submission or explicit save action.

```tsx
// ✅ Good - immediate effect
<Switch id="notifications" />
<Label htmlFor="notifications">Enable notifications</Label>

// ❌ Use checkbox instead - requires save
<Checkbox id="terms" />
<Label htmlFor="terms">I agree to terms</Label>
```

### Always Use Labels

Like checkboxes, switches should always have an associated label for clarity and accessibility.

### State Management

For controlled switches, use the `checked` prop with `onCheckedChange`:

```tsx
const [enabled, setEnabled] = useState(false);

<Switch checked={enabled} onCheckedChange={setEnabled} />;
```

## Related Components

- [Checkbox](/docs/components/checkbox) - For multi-select or require-save scenarios
- [Toggle](/docs/components/toggle) - For UI state toggles (like bold/italic)
- [Field](/docs/components/field) - For form field layouts
