# Skeleton

Source: `content/docs/components/skeleton.mdx`

```tsx
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/skeleton
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import { Skeleton } from "@/components/ui/skeleton";
```

```tsx
<Skeleton className="h-4 w-[250px]" />
```

## Examples

### Card Loading State

Skeleton mirrors the shape and layout of the content it replaces.

```tsx
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

```

## API Reference

### Skeleton

## Best Practices

### Match Final Layout

Skeletons should closely mirror the structure and dimensions of the content they're replacing to prevent layout shift when content loads.

```tsx
// ✅ Good - mirrors actual content structure
<div className="flex items-center gap-4">
  <Skeleton className="size-12 rounded-full" /> {/* Avatar */}
  <div className="space-y-2">
    <Skeleton className="h-4 w-[200px]" /> {/* Name */}
    <Skeleton className="h-3 w-[150px]" /> {/* Email */}
  </div>
</div>
```

### Avoid Empty States

Show skeletons immediately on load rather than a blank screen. This communicates that content is loading and reduces perceived wait time.

### Semantic HTML

Skeletons render as `div` elements. They're purely presentational and hidden from screen readers via CSS, so the loading state should be announced separately with `aria-live` or similar.

## Related Components

- [Spinner](/docs/components/spinner) - For inline loading indicators
- [Progress](/docs/components/progress) - For determinate loading states
