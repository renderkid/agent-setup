# Hover Card

Source: `content/docs/components/hover-card.mdx`

```tsx
"use client";

import { CalendarDaysIcon } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-muted-foreground text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="text-muted-foreground flex items-center pt-2 text-xs">
              <CalendarDaysIcon className="mr-2 size-4 opacity-70" />
              <span>Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/hover-card
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
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
```

```tsx
<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>Rich content preview here</HoverCardContent>
</HoverCard>
```

## API Reference

### Root

## Accessibility

The HoverCard component follows WAI-ARIA guidelines:

- Uses Base UI's accessible preview card primitive
- Shows on hover with appropriate delay
- Dismissible with Escape key
- Focus returns to trigger when closed
- Proper ARIA attributes for screen readers

### Keyboard Navigation

- `Escape` - Closes the hover card
- `Tab` - Moves focus (card stays open while focused)

## Best Practices

### Use for Preview Content

Hover cards work best for supplementary information like user profiles, link previews, or additional context.

### Keep It Lightweight

Hover cards should load quickly. Avoid heavy content or images that delay appearance.

### Don't Hide Critical Info

Never put essential information only in hover cards – they're inaccessible on touch devices and easy to miss.

```tsx
// ✅ Good - supplementary info
<HoverCard>
  <HoverCardTrigger>@username</HoverCardTrigger>
  <HoverCardContent>
    <UserProfile /> {/* Additional context */}
  </HoverCardContent>
</HoverCard>

// ❌ Bad - critical action hidden
<HoverCard>
  <HoverCardTrigger>Settings</HoverCardTrigger>
  <HoverCardContent>
    <Button>Delete account</Button> {/* Should be in Dialog */}
  </HoverCardContent>
</HoverCard>
```

### Timing Matters

Default delay before showing prevents accidental triggers during cursor movement.

## Related Components

- [Popover](/docs/components/popover) - For click-triggered content
- [Tooltip](/docs/components/tooltip) - For simple text hints
- [Dialog](/docs/components/dialog) - For critical interactions
