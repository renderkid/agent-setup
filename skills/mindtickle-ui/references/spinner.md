# Spinner

Source: `content/docs/components/spinner.mdx`

```tsx
import { Spinner } from "@/components/ui/spinner";

export function SpinnerDemo() {
  return <Spinner />;
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/spinner
```

- Install the following dependencies:

```bash
npm install lucide-react
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import { Spinner } from "@/components/ui/spinner";
```

```tsx
<Spinner />
```

## Examples

### Sizes

Control spinner size with Tailwind size utilities.

```tsx
import { Spinner } from "@/components/ui/spinner";

export function SpinnerSizes() {
  return (
    <div className="flex items-center gap-4">
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-10" />
    </div>
  );
}

```

### In Buttons

Pair spinners with button loading states to show progress.

```tsx
"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function SpinnerButton() {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      disabled={loading}
      onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      }}
    >
      {loading ? (
        <>
          <Spinner className="size-4" />
          Saving...
        </>
      ) : (
        "Save changes"
      )}
    </Button>
  );
}

```

## API Reference

### Spinner

## Accessibility

The Spinner component includes proper ARIA attributes:

- `role="status"` - Announces loading state to screen readers
- `aria-label="Loading"` - Provides accessible name

For context-specific loading states, override the `aria-label`:

```tsx
<Spinner aria-label="Saving changes" />
```

## Best Practices

### Use for Brief Operations

Spinners work best for operations under 5 seconds. For longer operations, use a progress bar with percentage indicators.

### Position Near Action

Place spinners close to the UI element triggering the loading state (like inside the button that was clicked).

### Button Loading States

When using spinners in buttons:

- Disable the button to prevent duplicate submissions
- Keep the button text visible alongside the spinner
- Use a descriptive loading message (e.g., "Saving..." not just a spinner)

```tsx
// ✅ Good
<Button disabled={loading}>
  {loading && <Spinner className="size-4" />}
  {loading ? "Saving..." : "Save"}
</Button>

// ❌ Bad - no text context
<Button disabled={loading}>
  {loading ? <Spinner /> : "Save"}
</Button>
```

## Related Components

- [Skeleton](/docs/components/skeleton) - For content placeholders
- [Progress](/docs/components/progress) - For determinate operations
- [Button](/docs/components/button) - Often paired with spinners
