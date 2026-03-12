# Progress

Source: `content/docs/components/progress.mdx`

```tsx
"use client";

import { useEffect, useState } from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return <Progress value={value} />;
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/progress
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
import { Progress } from "@/components/ui/progress";
```

```tsx
<Progress value={50} />
```

## Examples

### With Label and Value

Add context with labels and show the percentage value.

```tsx
"use client";

import { useEffect, useState } from "react";

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

export function ProgressWithLabel() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Progress value={value}>
      <ProgressLabel>Uploading files</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}

```

## API Reference

### Root

## Accessibility

The Progress component follows WAI-ARIA guidelines:

- Uses Base UI's accessible progress primitive with proper ARIA attributes
- `role="progressbar"` automatically applied
- Current value announced to screen readers via `aria-valuenow`
- Min/max values communicated via `aria-valuemin` and `aria-valuemax`
- Label associated via `aria-labelledby`

## Best Practices

### Use for Determinate Operations

Progress bars work best when you know the completion percentage. For indeterminate operations (unknown duration), use a spinner instead.

### Provide Context

Add a label to explain what's progressing. Users should understand what they're waiting for.

```tsx
// ✅ Good - clear context
<Progress value={progress}>
  <ProgressLabel>Uploading {files.length} files</ProgressLabel>
  <ProgressValue />
</Progress>

// ❌ Bad - no context
<Progress value={progress} />
```

### Update Frequently

Update progress values frequently enough to show continuous movement (at least every 200-500ms). Infrequent updates feel janky.

### Tabular Numbers

The `ProgressValue` component uses tabular numbers by default to prevent layout shift as the percentage changes.

## Related Components

- [Spinner](/docs/components/spinner) - For indeterminate operations
- [Skeleton](/docs/components/skeleton) - For content placeholders
