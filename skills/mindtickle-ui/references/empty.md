# Empty

Source: `content/docs/components/empty.mdx`

```tsx
import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchIcon />
        </EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>
          Try adjusting your search or filter to find what you're looking for.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Clear filters</Button>
      </EmptyContent>
    </Empty>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/empty
```

- Install the following dependencies:

```bash
npm install class-variance-authority
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
```

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <SearchIcon />
    </EmptyMedia>
    <EmptyTitle>No results</EmptyTitle>
    <EmptyDescription>Try a different search term.</EmptyDescription>
  </EmptyHeader>
</Empty>
```

## API Reference

### Root

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| variant | `"default" | "icon"` | `"default"` | - |

## Best Practices

### Be Helpful, Not Apologetic

Empty states should guide users toward action rather than just stating the obvious.

```tsx
// ✅ Good - actionable
<EmptyTitle>No projects yet</EmptyTitle>
<EmptyDescription>
  Create your first project to get started.
</EmptyDescription>
<Button>Create project</Button>

// ❌ Bad - just states the problem
<EmptyTitle>No results</EmptyTitle>
```

### Provide Context

Explain why the state is empty and what users can do about it.

### Use Appropriate Icons

Choose icons that represent the empty state meaningfully (search for no results, folder for no files, etc.).

## Related Components

- [Skeleton](/docs/components/skeleton) - For loading states
- [Card](/docs/components/card) - Often contains empty states
