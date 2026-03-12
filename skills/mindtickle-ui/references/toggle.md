# Toggle

Source: `content/docs/components/toggle.mdx`

```tsx
"use client";

import { BoldIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <BoldIcon />
    </Toggle>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/toggle
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
import { Toggle } from "@/components/ui/toggle";
```

```tsx
<Toggle aria-label="Toggle bold">
  <BoldIcon />
</Toggle>
```

## Examples

### Outline Variant

Use the outline variant for a more defined appearance.

```tsx
"use client";

import { ItalicIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <ItalicIcon />
    </Toggle>
  );
}

```

### With Text

Combine icons with text for clearer affordance.

```tsx
"use client";

import { ItalicIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <ItalicIcon />
      Italic
    </Toggle>
  );
}

```

### Sizes

Toggle supports `sm`, `default`, and `lg` sizes.

```tsx
"use client";

import { BoldIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export function ToggleSizes() {
  return (
    <div className="flex items-center gap-2">
      <Toggle size="sm" aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle size="default" aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle size="lg" aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
    </div>
  );
}

```

## API Reference

### Toggle

**Toggle Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| variant | `"default" | "outline"` | `"default"` | - |
| size | `"default" | "sm" | "lg"` | `"default"` | - |

## Accessibility

The Toggle component follows WAI-ARIA guidelines:

- Uses Base UI's accessible toggle primitive
- `aria-pressed` state automatically managed
- Keyboard navigable with `Space` or `Enter`
- Focus visible styles for keyboard users
- Always include `aria-label` for icon-only toggles

### Keyboard Navigation

- `Space` or `Enter` - Toggles the state
- `Tab` - Moves focus to/from the toggle

## Best Practices

### Toggle vs Switch

Use toggles for UI state that applies immediately (like bold/italic in a text editor). Use switches for settings that persist beyond the current session.

```tsx
// ✅ Toggle - immediate UI state
<Toggle aria-label="Toggle bold">
  <BoldIcon />
</Toggle>

// ✅ Switch - persistent setting
<Switch id="notifications" />
<Label htmlFor="notifications">Enable notifications</Label>
```

### Always Provide Accessible Names

Icon-only toggles must include `aria-label` to be accessible to screen reader users.

```tsx
// ✅ Good
<Toggle aria-label="Toggle bold">
  <BoldIcon />
</Toggle>

// ❌ Bad - no accessible name
<Toggle>
  <BoldIcon />
</Toggle>
```

### Controlled State

For controlled toggles, use the `pressed` prop with `onPressedChange`:

```tsx
const [isBold, setIsBold] = useState(false);

<Toggle pressed={isBold} onPressedChange={setIsBold} aria-label="Toggle bold">
  <BoldIcon />
</Toggle>;
```

## Related Components

- [Toggle Group](/docs/components/toggle-group) - For related toggle options
- [Switch](/docs/components/switch) - For persistent on/off states
- [Button](/docs/components/button) - For one-time actions
