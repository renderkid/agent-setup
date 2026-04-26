# Toast

Source: `content/docs/components/toast.mdx`

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

    ```bash npx shadcn@latest add @mindtickle/toast ```

      - Install the following dependencies:
      ```bash npm install @base-ui/react lucide-react ```
      - Copy and paste the following code into your project.
      _Registry source is installed via the Mindtickle shadcn registry._
      - Update the import paths to match your project setup.

## Usage

Mindtickle exports two toast managers: corner toasts (`toastManager`) and
anchored toasts (`anchoredToastManager`). Pick the manager based on what the UI
is confirming.

| You want                                         | Use                                              |
| ------------------------------------------------ | ------------------------------------------------ |
| Notifications in a fixed viewport corner         | `toastManager` + `ToastProvider`                 |
| A small confirmation next to the clicked element | `anchoredToastManager` + `AnchoredToastProvider` |

### Wire Providers

Both providers must be mounted once, high in the tree. A missing provider means
`add()` calls do nothing.

```tsx
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";

<ToastProvider>
  <AnchoredToastProvider>{/* app */}</AnchoredToastProvider>
</ToastProvider>;
```

`ToastProvider` accepts an optional `position` prop:
`"bottom-right"` (default), `"top-left"`, `"top-center"`, `"top-right"`,
`"bottom-left"`, or `"bottom-center"`.

### Corner Toast

```tsx
import { toastManager } from "@/components/ui/toast";

toastManager.add({
  title: "Saved",
  description: "Your changes are live.",
  type: "success",
  timeout: 3000,
});
```

Supported fields include `title`, `description`, `type`, `timeout`, and
`actionProps`.

Pass a stable `id` when the same workflow should update an existing toast
instead of stacking another notification.

```tsx
toastManager.add({
  id: "sync-status",
  title: "Syncing",
  type: "loading",
});

toastManager.add({
  id: "sync-status",
  title: "Synced",
  type: "success",
  timeout: 3000,
});
```

### Anchored Toast

Anchored toasts position next to a DOM element, usually the button the user just
clicked.

```tsx
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { anchoredToastManager } from "@/components/ui/toast";

function CopyButton({ text }: { text: string }) {
  const anchorRef = useRef<HTMLSpanElement>(null);

  return (
    <span ref={anchorRef}>
      <Button
        onClick={() => {
          navigator.clipboard.writeText(text);
          anchoredToastManager.add({
            title: "Copied!",
            type: "success",
            timeout: 1500,
            positionerProps: { anchor: anchorRef.current, sideOffset: 6 },
          });
        }}
      >
        Copy
      </Button>
    </span>
  );
}
```

#### Anchor Required

`AnchoredToasts` returns `null` for any toast whose `positionerProps.anchor` is
falsy. If nothing renders, the ref is probably `null` at call time.

- Put the ref on the element the toast should point at, or on a wrapping
  `<span>`.
- A wrapping span is the safest pattern because it does not depend on the child
  component forwarding refs.
- Do not call `anchoredToastManager.add()` on first render or in an effect that
  runs before the ref attaches. Call it from a user event.

`positionerProps` accepts `anchor`, `sideOffset`, and other Base UI
`Positioner` props such as `side` and `align`.

### Tooltip-Style Variant

Pass `data: { tooltipStyle: true }` for a compact, tooltip-shaped popup.

```tsx
anchoredToastManager.add({
  title: "Link copied",
  timeout: 1200,
  positionerProps: { anchor: ref.current },
  data: { tooltipStyle: true },
});
```

## API Reference

### ToastProvider

### AnchoredToastProvider

## Best Practices

- Use corner toasts when the action and confirmation are not spatially related,
  or when confirmations might stack.
- Use anchored toasts when the confirmation belongs to a specific control, such
  as copy, bookmark, pin, or favorite.
- Keep toast titles short and descriptions optional.

## Related Components

- [Dialog](/docs/components/dialog) - For blocking confirmations
- [Alert](/docs/components/alert) - For persistent page-region messages
