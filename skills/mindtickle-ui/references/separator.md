# Separator

Source: `content/docs/components/separator.mdx`

```tsx
import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium">Mindtickle Design</h4>
        <p className="text-muted-foreground text-sm">
          Beautiful, accessible components for modern web applications.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Components</div>
        <Separator orientation="vertical" />
        <div>Documentation</div>
        <Separator orientation="vertical" />
        <div>Examples</div>
      </div>
    </div>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/separator
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
import { Separator } from "@/components/ui/separator";
```

```tsx
<Separator />
```

The separator defaults to horizontal. Use `orientation="vertical"` for vertical separators.

```tsx
<div className="flex items-center gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
</div>
```

## API Reference

### Separator

## Best Practices

### Vertical Separators Need Height

Vertical separators stretch to match their parent's height by default. If the parent has no explicit height, set one on the separator:

```tsx
// ✅ Good - separator inherits parent height
<div className="flex h-5 items-center gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" />
  <span>Item 2</span>
</div>

// ✅ Also good - explicit height on separator
<div className="flex items-center gap-4">
  <span>Item 1</span>
  <Separator orientation="vertical" className="h-5" />
  <span>Item 2</span>
</div>
```

### When to Use Separators

Use separators to create visual hierarchy and group related content. Don't overuse them – whitespace alone often provides enough separation.

## Related Components

- [Card](/docs/components/card) - Separators work well between card sections
