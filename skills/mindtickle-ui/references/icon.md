# Icon

Source: `content/docs/components/icon.mdx`

```tsx
"use client";

import { Icon } from "@/components/ui/icon";

export function IconDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Icon name="gear" />
      <Icon name="gear" variant="solid" />
      <Icon name="users" />
      <Icon name="chart-simple" color="accent" variant="solid" />
      <Icon name="graduation-cap" label="Training" />
    </div>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/icon
```

- No extra npm dependencies are required.

- 
  Copy both files into your project: <code>components/ui/icon.tsx</code> and{" "}
  <code>components/ui/icon-data.ts</code>. The CLI install above copies both;
  for manual install, copy the first file below and generate or copy{" "}
  <code>icon-data.ts</code> from the registry (same item, second file).

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import { Icon } from "@/components/ui/icon";
```

```tsx
<Icon name="gear" />
<Icon name="users" variant="solid" size="lg" color="accent" />
```

## API

| Prop        | Type                             | Default   | Description                                                     |
| ----------- | -------------------------------- | --------- | --------------------------------------------------------------- |
| `name`      | `IconName`                       | required  | Icon identifier (e.g. `"gear"`, `"chart-simple"`).              |
| `variant`   | `"solid" \| "light"`             | `"light"` | Visual style.                                                   |
| `size`      | `"sm" \| "base" \| "lg" \| "xl"` | —         | Matches text sizes; omit to inherit from parent (1em).          |
| `color`     | Design token name                | —         | `accent`, `destructive`, `muted`, `warning`, `success`, `info`. |
| `label`     | `string`                         | —         | Accessible label for meaningful icons; omit for decorative.     |
| `className` | `string`                         | —         | Merged with root SVG.                                           |

## Examples

### Variants

Default variant is **light**. Use **solid** for filled icons.

```tsx
"use client";

import { Icon } from "@/components/ui/icon";

export function IconVariants() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-start gap-2">
        <span className="text-xs text-muted-foreground">Light (default)</span>
        <div className="flex items-center gap-4">
          <Icon name="gear" />
          <Icon name="users" />
          <Icon name="chart-simple" />
          <Icon name="graduation-cap" label="Training" />
          <Icon name="bell" />
          <Icon name="money-bill-trend-up" />
          <Icon name="sidebar" />
          <Icon name="waveform-lines" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <span className="text-xs text-muted-foreground">Solid</span>
        <div className="flex items-center gap-4">
          <Icon name="gear" variant="solid" />
          <Icon name="users" variant="solid" />
          <Icon name="chart-simple" variant="solid" />
          <Icon name="graduation-cap" label="Training" variant="solid" />
          <Icon name="bell" variant="solid" />
          <Icon name="money-bill-trend-up" variant="solid" />
          <Icon name="sidebar" variant="solid" />
          <Icon name="waveform-lines" variant="solid" />
        </div>
      </div>
    </div>
  );
}

```

```tsx
<Icon name="gear" variant="light" />
<Icon name="gear" variant="solid" />
```

### Sizes

Use the `size` prop to match text sizes, or omit to inherit (1em).

```tsx
"use client";

import { Icon } from "@/components/ui/icon";

export function IconSizes() {
  return (
    <div className="flex flex-wrap items-end gap-8">
      <div className="flex flex-col items-center gap-2">
        <Icon name="users" size="sm" />
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="users" size="base" />
        <span className="text-xs text-muted-foreground">base</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="users" size="lg" />
        <span className="text-xs text-muted-foreground">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="users" size="xl" />
        <span className="text-xs text-muted-foreground">xl</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm">
          <Icon name="users" />
        </span>
        <span className="text-xs text-muted-foreground">Inherit (1rem)</span>
      </div>
    </div>
  );
}

```

```tsx
<Icon name="users" size="sm" />
<Icon name="users" size="base" />
<Icon name="users" size="lg" />
<Icon name="users" size="xl" />
```

### Colors

Use the `color` prop for design token colors, or `className` (e.g. `text-muted-foreground`) for custom styling. Icons use `currentColor` by default.

```tsx
"use client";

import { Icon } from "@/components/ui/icon";

export function IconColors() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="accent" />
        <span className="text-xs text-accent-muted-foreground">accent</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="destructive" />
        <span className="text-xs text-destructive-muted-foreground">
          destructive
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="muted" />
        <span className="text-xs text-muted-foreground">muted</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="warning" />
        <span className="text-xs text-warning-muted-foreground">warning</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="success" />
        <span className="text-xs text-success-muted-foreground">success</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="house-blank" size="lg" color="info" />
        <span className="text-xs text-info-muted-foreground">info</span>
      </div>
    </div>
  );
}

```

```tsx
<Icon name="chart-simple" color="accent" />
<Icon name="chart-simple" color="destructive" />
<Icon name="chart-simple" color="muted" />
```

### Accessibility

- **Decorative icons**: Omit the `label` prop. The icon will have `aria-hidden="true"`.
- **Meaningful icons**: Pass a `label` so screen readers get a proper name (e.g. `<Icon name="graduation-cap" label="Training" />`).

## Available icons

Icons are named after Font Awesome identifiers. Current set:

`cabinet-filing`, `chalkboard-user`, `chart-simple`, `door-open`, `file-chart-pie`, `gear`, `graduation-cap`, `house-blank`, `money-bill-trend-up`, `sidebar`, `users`, `users-rectangle`, `waveform-lines`.

## Adding new icons

1. Download the SVG(s) from Font Awesome Pro.
2. Save in `registry/default/icons-src/` as `{name}-light.svg` and/or `{name}-solid.svg` (or `-light-full` / `-solid-full`).
3. Run `pnpm icons:build` in `apps/ui`.
4. The new icon is available as `<Icon name="{name}" />`.

## Related Components

- [Button](/docs/components/button) – Often used with icons
- [Badge](/docs/components/badge) – Can include icons
