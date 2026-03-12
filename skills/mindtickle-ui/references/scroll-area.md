# Scroll Area

Source: `content/docs/components/scroll-area.mdx`

```tsx
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={String(i)}>
            <div className="text-sm">Tag {i + 1}</div>
            {i !== 49 && <Separator className="my-2" />}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/scroll-area
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
import { ScrollArea } from "@/components/ui/scroll-area";
```

```tsx
<ScrollArea className="h-72 w-48">{/* Scrollable content */}</ScrollArea>
```

## API Reference

### Root

### ScrollBar

## Best Practices

### Set Explicit Dimensions

ScrollArea requires explicit height (and optionally width) to create a scroll container.

```tsx
// ✅ Good - explicit height
<ScrollArea className="h-[600px]">{/* content */}</ScrollArea>

// ❌ Bad - no height constraint
<ScrollArea>{/* content */}</ScrollArea>
```

### Use Native Scroll When Possible

Only use ScrollArea when you need custom styled scrollbars. Native browser scrollbars are more accessible and performant.

### Scrollbar Visibility

Scrollbars appear on hover/scroll by default. This provides a clean look while maintaining discoverability.

### Performance

ScrollArea uses native scroll behavior, so it performs well even with large amounts of content.

## Related Components

- [Separator](/docs/components/separator) - Often used within scroll areas
- [Dialog](/docs/components/dialog) - May contain scroll areas
