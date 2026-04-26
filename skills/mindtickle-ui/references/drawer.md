# Drawer

Source: `content/docs/components/drawer.mdx`

```tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        Open drawer
      </DrawerTrigger>
      <DrawerPopup showBar>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            This drawer is built on Base UI primitives.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <p className="text-muted-foreground text-sm">
            Drawer content goes here. Swipe down to dismiss.
          </p>
        </DrawerPanel>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose render={<Button variant="outline" />}>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/drawer
```

- Install the following dependencies:

```bash
npm install @base-ui/react lucide-react
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
```

```tsx
<Drawer>
  <DrawerTrigger render={<Button variant="outline" />}>Open</DrawerTrigger>
  <DrawerPopup showBar>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
    <DrawerPanel>Content</DrawerPanel>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
    </DrawerFooter>
  </DrawerPopup>
</Drawer>
```

`DrawerContent` is kept as a shadcn-compatible alias for `DrawerPopup`, so existing code can continue to use the familiar subcomponent name while new examples use the Base UI `Popup` terminology.

## Examples

### Default

```tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        Open drawer
      </DrawerTrigger>
      <DrawerPopup showBar>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            This drawer is built on Base UI primitives.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <p className="text-muted-foreground text-sm">
            Drawer content goes here. Swipe down to dismiss.
          </p>
        </DrawerPanel>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose render={<Button variant="outline" />}>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

```

### Side Drawer

Use `position` to open the drawer from a specific edge.

```tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const details = [
  ["Owner", "Maya Chen"],
  ["Status", "In review"],
  ["Due date", "May 2"],
];

export function DrawerSide() {
  return (
    <Drawer position="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        Open side drawer
      </DrawerTrigger>
      <DrawerPopup showCloseButton>
        <DrawerHeader>
          <DrawerTitle>Deal details</DrawerTitle>
          <DrawerDescription>
            Review the key details before moving this deal forward.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerPanel className="space-y-4">
          <div className="rounded-lg border">
            {details.map(([label, value]) => (
              <div
                className="flex items-center justify-between gap-4 border-b px-4 py-3 last:border-b-0"
                key={label}
              >
                <span className="text-muted-foreground text-sm">{label}</span>
                <span className="font-medium text-sm">{value}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            Side drawers work well for focused details, filters, and lightweight
            editing flows.
          </p>
        </DrawerPanel>
        <DrawerFooter>
          <DrawerClose render={<Button variant="ghost" />}>Cancel</DrawerClose>
          <Button>Save changes</Button>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

```

### Inset Variant

Use `variant="inset"` for side drawers that need desktop spacing around the panel.

```tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerInset() {
  return (
    <Drawer position="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        Open inset drawer
      </DrawerTrigger>
      <DrawerPopup showCloseButton variant="inset">
        <DrawerHeader>
          <DrawerTitle>Quick filters</DrawerTitle>
          <DrawerDescription>
            Tune the list without leaving the current page.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerPanel className="grid gap-3">
          {["Assigned to me", "Active opportunities", "Needs follow-up"].map(
            (filter) => (
              <button
                className="flex items-center justify-between rounded-lg border px-3 py-2 text-left text-sm hover:bg-accent-muted"
                key={filter}
                type="button"
              >
                <span>{filter}</span>
                <span className="text-muted-foreground text-xs">On</span>
              </button>
            )
          )}
        </DrawerPanel>
        <DrawerFooter variant="bare">
          <DrawerClose render={<Button variant="ghost" />}>Reset</DrawerClose>
          <Button>Apply filters</Button>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

```

### Scrollable Content

`DrawerPanel` wraps content in `ScrollArea` by default so longer bodies can scroll without hiding footer actions.

```tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const updates = [
  "New enablement path assigned to the North America team.",
  "Manager review is pending for three learner submissions.",
  "Certification threshold changed from 80% to 85%.",
  "Two reps completed the objection handling module.",
  "A new coaching note was added to the enterprise segment.",
  "The Q2 readiness report is ready for review.",
  "Five learners need reminders before Friday.",
  "A content owner requested approval for a revised lesson.",
];

export function DrawerScrollable() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        View updates
      </DrawerTrigger>
      <DrawerPopup className="max-h-[80dvh]" showBar>
        <DrawerHeader>
          <DrawerTitle>Activity updates</DrawerTitle>
          <DrawerDescription>
            DrawerPanel keeps longer content scrollable while actions stay
            reachable.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerPanel className="space-y-3">
          {updates.map((update, index) => (
            <div className="rounded-lg border p-3" key={update}>
              <div className="font-medium text-sm">Update {index + 1}</div>
              <p className="mt-1 text-muted-foreground text-sm">{update}</p>
            </div>
          ))}
        </DrawerPanel>
        <DrawerFooter>
          <DrawerClose render={<Button variant="ghost" />}>Close</DrawerClose>
          <Button>Mark all read</Button>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

```

### Snap Points

Snap points let bottom drawers settle at progressive heights while the user drags. The popup needs enough height or content for snap points to resolve distinctly; drag from the handle or header.

```tsx
"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const snapPoints = ["300px", 1] as const;

export function DrawerSnapPoints() {
  const [snapPoint, setSnapPoint] = React.useState<
    (typeof snapPoints)[number] | null
  >(snapPoints[0]);

  return (
    <Drawer
      onSnapPointChange={(point) =>
        setSnapPoint(point as (typeof snapPoints)[number] | null)
      }
      position="bottom"
      snapPoint={snapPoint}
      snapPoints={[...snapPoints]}
      snapToSequentialPoints
    >
      <DrawerTrigger render={<Button variant="outline" />}>
        Open snap drawer
      </DrawerTrigger>
      <DrawerPopup showBar>
        <DrawerHeader>
          <DrawerTitle>Quarterly summary</DrawerTitle>
          <DrawerDescription>
            Drag the handle or header to snap between a compact peek and the
            full-height view.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerPanel className="space-y-4">
          <div className="grid grid-cols-2 gap-2 text-center">
            {["300px", "Full height"].map((label) => (
              <div className="rounded-lg border p-3" key={label}>
                <div className="font-medium text-sm">{label}</div>
                <div className="text-muted-foreground text-xs">Snap point</div>
              </div>
            ))}
          </div>
          <div className="grid gap-2">
            {Array.from({ length: 32 }, (_, index) => (
              <div
                className="rounded-lg border bg-muted/40 p-3 text-sm"
                key={index}
              >
                Report section {index + 1}
              </div>
            ))}
          </div>
        </DrawerPanel>
        <DrawerFooter>
          <DrawerClose render={<Button variant="ghost" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

```

### Menu Drawer

Use the `DrawerMenu` parts for mobile action menus that mirror menu item styling.

```tsx
"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerHeader,
  DrawerMenu,
  DrawerMenuCheckboxItem,
  DrawerMenuGroup,
  DrawerMenuGroupLabel,
  DrawerMenuItem,
  DrawerMenuRadioGroup,
  DrawerMenuRadioItem,
  DrawerMenuSeparator,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function DrawerMenuExample() {
  const [emailSummaries, setEmailSummaries] = React.useState(true);
  const [sortBy, setSortBy] = React.useState("recent");

  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        Open menu
      </DrawerTrigger>
      <DrawerPopup showBar>
        <DrawerHeader>
          <DrawerTitle>Workspace actions</DrawerTitle>
          <DrawerDescription>
            Use DrawerMenu for mobile action menus that mirror menu item
            styling.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <DrawerMenu>
            <DrawerMenuGroup>
              <DrawerMenuGroupLabel>Actions</DrawerMenuGroupLabel>
              <DrawerClose render={<DrawerMenuItem />}>Share</DrawerClose>
              <DrawerClose render={<DrawerMenuItem />}>Duplicate</DrawerClose>
              <DrawerClose render={<DrawerMenuItem variant="destructive" />}>
                Archive
              </DrawerClose>
            </DrawerMenuGroup>
            <DrawerMenuSeparator />
            <DrawerMenuCheckboxItem
              checked={emailSummaries}
              onCheckedChange={(checked) => setEmailSummaries(checked === true)}
              variant="switch"
            >
              Email summaries
            </DrawerMenuCheckboxItem>
            <DrawerMenuSeparator />
            <DrawerMenuGroup>
              <DrawerMenuGroupLabel>Sort by</DrawerMenuGroupLabel>
              <DrawerMenuRadioGroup onValueChange={setSortBy} value={sortBy}>
                <DrawerMenuRadioItem value="recent">
                  Most recent
                </DrawerMenuRadioItem>
                <DrawerMenuRadioItem value="priority">
                  Priority
                </DrawerMenuRadioItem>
                <DrawerMenuRadioItem value="owner">Owner</DrawerMenuRadioItem>
              </DrawerMenuRadioGroup>
            </DrawerMenuGroup>
          </DrawerMenu>
        </DrawerPanel>
      </DrawerPopup>
    </Drawer>
  );
}

```

## API Reference

### Drawer

Root component. Wraps `Drawer.Root` from Base UI and maps `position` to the matching `swipeDirection`.

| Prop             | Type                                     | Default    | Description                                                                 |
| ---------------- | ---------------------------------------- | ---------- | --------------------------------------------------------------------------- |
| `position`       | `"right" \| "left" \| "top" \| "bottom"` | `"bottom"` | Controls which edge the drawer opens from.                                  |
| `direction`      | `"right" \| "left" \| "top" \| "bottom"` | -          | Deprecated compatibility alias for `position` from the previous shadcn API. |
| `swipeDirection` | `"up" \| "down" \| "left" \| "right"`    | derived    | Overrides the swipe direction derived from `position`.                      |

All other props from Base UI `Drawer.Root` are supported, including `open`, `onOpenChange`, `modal`, `snapPoints`, `snapPoint`, `onSnapPointChange`, and `snapToSequentialPoints`.

### DrawerTrigger

Trigger button that opens the drawer. Use Base UI composition with `render`.

```tsx
<DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger>
```

### DrawerPopup / DrawerContent

Popup container that renders the portal, backdrop, viewport, and drawer surface. `DrawerContent` is an alias for this component for shadcn/Radix-compatible naming.

| Prop              | Type                                  | Default     | Description                                                        |
| ----------------- | ------------------------------------- | ----------- | ------------------------------------------------------------------ |
| `variant`         | `"default" \| "straight" \| "inset"` | `"default"` | Controls corner radius and desktop inset spacing.                  |
| `showCloseButton` | `boolean`                             | `false`     | Displays a close button in the top-right corner.                   |
| `showBar`         | `boolean`                             | `false`     | Displays a drag handle indicator.                                  |
| `portalProps`     | `Drawer.Portal.Props`                 | -           | Props forwarded to the internal Base UI portal.                    |

### DrawerHeader

Container for the drawer title and description. Supports the `render` prop for polymorphic composition.

| Prop             | Type      | Default | Description                                                                 |
| ---------------- | --------- | ------- | --------------------------------------------------------------------------- |
| `allowSelection` | `boolean` | `false` | Wraps the header in Base UI's content wrapper to reduce swipe interference on selection. |

### DrawerFooter

Footer section for actions. Supports the `render` prop for polymorphic composition.

| Prop             | Type                  | Default     | Description                                                                 |
| ---------------- | --------------------- | ----------- | --------------------------------------------------------------------------- |
| `variant`        | `"default" \| "bare"` | `"default"` | `default` includes border/background. `bare` removes them.                  |
| `allowSelection` | `boolean`             | `true`      | Wraps the footer in Base UI's content wrapper to reduce swipe interference on selection. |

### DrawerPanel

Content container. When `scrollable` is true, it wraps content in `ScrollArea`.

| Prop             | Type      | Default | Description                                                                 |
| ---------------- | --------- | ------- | --------------------------------------------------------------------------- |
| `scrollable`     | `boolean` | `true`  | Wraps content in a `ScrollArea`.                                             |
| `scrollFade`     | `boolean` | `true`  | Shows a fade effect at scroll edges when scrollable.                         |
| `allowSelection` | `boolean` | `true`  | Wraps the panel in Base UI's content wrapper to reduce swipe interference on selection. |

### DrawerMenu

Container for drawer menu items. Use with `DrawerMenuItem`, `DrawerMenuSeparator`, `DrawerMenuGroup`, `DrawerMenuGroupLabel`, `DrawerMenuCheckboxItem`, `DrawerMenuRadioGroup`, `DrawerMenuRadioItem`, and `DrawerMenuTrigger`.

### DrawerMenuItem

Styled menu item. It does not close the drawer automatically; wrap it with `DrawerClose` when close-on-click is needed.

```tsx
<DrawerClose render={<DrawerMenuItem />}>Edit</DrawerClose>
```

| Prop       | Type                         | Default     | Description                                      |
| ---------- | ---------------------------- | ----------- | ------------------------------------------------ |
| `variant`  | `"default" \| "destructive"` | `"default"` | Uses destructive text color when destructive.    |
| `disabled` | `boolean`                    | -           | Disables the item.                               |

### DrawerMenuTrigger

Trigger for a nested drawer, styled like a menu item with a trailing chevron.

```tsx
<DrawerMenuTrigger>Add to playlist</DrawerMenuTrigger>
```

### Other Exports

- `DrawerCreateHandle` creates handles for detached drawer triggers.
- `DrawerTitle` and `DrawerDescription` are Base UI title/description aliases.
- `DrawerContent` is kept as an alias for `DrawerPopup`.
- `DrawerOverlay` is kept as an alias for `DrawerBackdrop`.
- `Drawer direction="right"` continues to work as a compatibility alias for `position="right"`.
- `DrawerPrimitiveContent` exposes Base UI's lower-level `Drawer.Content` wrapper for advanced render-prop composition.
- `DrawerClose`, `DrawerPortal`, `DrawerBackdrop`, `DrawerViewport`, `DrawerSwipeArea`, and `DrawerBar` expose the underlying Base UI drawer parts.

### Root

### Trigger

### Popup

### Header

### Footer

### Panel

### Title

### Description

### Close

### Portal

### Backdrop

### Overlay

### Viewport

### SwipeArea

### Bar

### Content

### Menu

### MenuItem

### MenuSeparator

### MenuGroup

### MenuGroupLabel

### MenuTrigger

### MenuCheckboxItem

### MenuRadioGroup

### MenuRadioItem

## Accessibility

Drawer extends Base UI Dialog with gesture support:

- Focus is trapped in modal drawers.
- Escape closes the drawer.
- Swipe gestures can dismiss the drawer.
- Background content is inert for modal drawers.
- Title and description wire into accessible dialog labeling.

## Best Practices

### Use render, not asChild

Drawer now follows the same Base UI composition pattern as the rest of Mindtickle UI.

```tsx
// Correct
<DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger>

// Wrong
<DrawerTrigger asChild>
  <Button variant="outline">Open drawer</Button>
</DrawerTrigger>
```

### Use DrawerPopup for the surface

`DrawerPopup` renders the portal, backdrop, viewport, and popup shell. Put `DrawerHeader`, `DrawerPanel`, and `DrawerFooter` inside it.

### Keep bottom drawers scrollable

Use `DrawerPanel` for body content. It enables the shared `ScrollArea` by default and keeps footer actions reachable.

### Nested Drawers

Nested drawers are supported. Use `DrawerMenuTrigger` for nested menu flows and rely on swipe gestures to go back.

## Related Components

- [Dialog](/docs/components/dialog) - For desktop modals
- [Sheet](/docs/components/sheet) - For non-gesture side panels
- [Alert Dialog](/docs/components/alert-dialog) - For confirmations
