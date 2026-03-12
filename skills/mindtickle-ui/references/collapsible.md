# Collapsible

Source: `content/docs/components/collapsible.mdx`

```tsx
"use client";

import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDemo() {
  return (
    <Collapsible className="max-w-[300px] space-y-2">
      <CollapsibleTrigger className="inline-flex items-center gap-2 font-medium text-sm data-panel-open:[&_svg]:rotate-180">
        <h4 className="text-sm font-semibold">
          @renderkid starred 2 repositories
        </h4>
        <ChevronDownIcon className="size-4" />
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-2">
        <div className="rounded-md bg-muted px-3 py-2 text-sm">
          @base-ui/react
        </div>
        <div className="rounded-md bg-muted px-3 py-2 text-sm">
          class-variance-authority
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/collapsible
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
```

```tsx
<Collapsible>
  <CollapsibleTrigger>Show more</CollapsibleTrigger>
  <CollapsibleContent>Hidden content goes here</CollapsibleContent>
</Collapsible>
```

## API Reference

### Root

## Accessibility

The Collapsible component follows WAI-ARIA guidelines:

- Uses Base UI's accessible collapsible primitive
- `aria-expanded` state automatically managed on trigger
- Content region properly associated with trigger
- Keyboard navigable with `Space` or `Enter`
- Focus visible styles for keyboard users

### Keyboard Navigation

- `Space` or `Enter` - Toggles the collapsible state
- `Tab` - Moves focus to/from the trigger

## Best Practices

### Provide Clear Trigger Labels

The trigger should clearly indicate what content will be revealed.

```tsx
// ✅ Good - clear action
<CollapsibleTrigger>Show 3 more items</CollapsibleTrigger>

// ❌ Bad - vague
<CollapsibleTrigger>More</CollapsibleTrigger>
```

### Use for Progressive Disclosure

Collapsibles work best for optional or secondary content that doesn't need to be visible by default.

### Icon Rotation

Rotate chevron icons to indicate state:

```tsx
<CollapsibleTrigger>
  <ChevronDownIcon className="group-data-[state=open]:rotate-180 transition-transform" />
</CollapsibleTrigger>
```

### Controlled State

For controlled collapsibles, use `open` with `onOpenChange`:

```tsx
const [open, setOpen] = useState(false);

<Collapsible open={open} onOpenChange={setOpen}>
  {/* content */}
</Collapsible>;
```

## Related Components

- [Accordion](/docs/components/accordion) - For multiple collapsible sections
- [Dialog](/docs/components/dialog) - For modal content
