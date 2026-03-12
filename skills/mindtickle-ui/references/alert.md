# Alert

Source: `content/docs/components/alert.mdx`

```tsx
"use client";

import { TriangleAlert } from "lucide-react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";

export function AlertDemo() {
  return (
    <Alert variant="warning">
      <TriangleAlert className="size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/alert
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import {
  Alert,
  AlertTitle,
  AlertDescription,
  AlertAction,
} from "@/components/ui/alert";
```

```tsx
<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>
```

## Examples

### Variants

Use variants to convey different types of information. Each variant has semantic meaning and appropriate styling.

```tsx
<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Your session has expired.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>
```

### With Icon

Add an icon to make alerts more visually distinct and easier to scan.

```tsx
<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>
```

## API Reference

### Root

Displays a callout for important information that requires user attention.

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| variant | `"default" | "destructive" | "warning" | "success" | "info" | "muted"` | `"default"` | Controls the alert's visual style and semantic meaning. Use destructive for errors, warning for cautions, success for confirmations, info for helpful tips, muted for secondary information, or default for neutral messages. |

## Accessibility

The Alert component follows accessibility best practices:

- Uses `role="alert"` to announce important information to screen readers
- Maintains proper color contrast across all variants
- Supports keyboard navigation when interactive elements are included
- Icons are decorative and don't interfere with screen reader announcements

## Best Practices

- **Default** - General information or neutral messages
- **Destructive** - Errors, critical issues, or actions that cannot be undone
- **Warning** - Cautions, pending actions, or attention needed
- **Success** - Confirmation of successful actions or positive states
- **Info** - Helpful information or tips
- **Muted** - Secondary or less important information

Keep alert content concise and actionable. Use `AlertTitle` for the main message and `AlertDescription` for additional context.
