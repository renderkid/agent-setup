# Slider

Source: `content/docs/components/slider.mdx`

```tsx
"use client";

import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  return <Slider defaultValue={50} />;
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/slider
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
import { Slider } from "@/components/ui/slider";
```

```tsx
<Slider defaultValue={50} />
```

## Examples

### With Value Display

Show the current value alongside the slider.

```tsx
"use client";

import { Slider, SliderValue } from "@/components/ui/slider";

export function SliderWithValue() {
  return (
    <Slider defaultValue={50}>
      <SliderValue />
    </Slider>
  );
}

```

### Range Slider

Pass an array of values to create a range slider with multiple thumbs.

```tsx
"use client";

import { Slider } from "@/components/ui/slider";

export function SliderRange() {
  return <Slider defaultValue={[25, 75]} />;
}

```

### With Steps

Use the `step` prop to constrain values to specific increments.

```tsx
"use client";

import { Slider } from "@/components/ui/slider";

export function SliderStep() {
  return <Slider defaultValue={50} max={100} min={0} step={10} />;
}

```

## API Reference

### Root

## Accessibility

The Slider component follows WAI-ARIA guidelines:

- Uses Base UI's accessible slider primitive with proper ARIA attributes
- Keyboard navigable with arrow keys
- `role="slider"` automatically applied
- Current value announced to screen readers via `aria-valuenow`
- Min/max values communicated via `aria-valuemin` and `aria-valuemax`
- Supports `aria-label` and `aria-labelledby` for accessible names

### Keyboard Navigation

- `Arrow Left/Down` - Decrease value by step
- `Arrow Right/Up` - Increase value by step
- `Home` - Set to minimum value
- `End` - Set to maximum value
- `Page Up` - Increase by larger step (10x step)
- `Page Down` - Decrease by larger step (10x step)

## Best Practices

### Provide Context

Always label sliders to explain what value they control.

```tsx
// ✅ Good - clear label
<div>
  <Label>Volume</Label>
  <Slider defaultValue={50} />
</div>

// ❌ Bad - no context
<Slider defaultValue={50} />
```

### Choose Appropriate Ranges

Set `min`, `max`, and `step` values that make sense for your use case:

```tsx
// Volume: 0-100 in steps of 1
<Slider min={0} max={100} step={1} />

// Price range: $0-$1000 in $10 increments
<Slider min={0} max={1000} step={10} defaultValue={[100, 500]} />
```

### Show Current Value

Display the current value, especially when the range isn't obvious or when precision matters.

### Controlled vs Uncontrolled

Use `defaultValue` for uncontrolled sliders, or `value` with `onValueChange` for controlled:

```tsx
// Uncontrolled
<Slider defaultValue={50} />;

// Controlled
const [value, setValue] = useState([50]);
<Slider value={value} onValueChange={setValue} />;
```

## Related Components

- [Progress](/docs/components/progress) - For read-only progress display
- [Field](/docs/components/field) - For form field layouts
