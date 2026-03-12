# Alert Dialog

Source: `content/docs/components/alert-dialog.mdx`

```tsx
"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline" color="destructive" />}
      >
        Delete Account
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your account? This action cannot be
            undone. This will permanently delete your account and remove your
            data from the system.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction color="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/alert-dialog
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
```

```tsx
<AlertDialog>
  <AlertDialogTrigger>Delete</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

## API Reference

### Root

## Accessibility

The AlertDialog component follows WAI-ARIA alert dialog guidelines:

- Focus trapped within dialog when open
- Escape key closes dialog
- Background content inert
- Focus returns to trigger when closed
- Proper ARIA labels and descriptions

### Keyboard Navigation

- `Escape` - Closes the dialog
- `Tab` - Moves between action buttons
- `Space/Enter` - Activates focused button

## Best Practices

### Use for Critical Confirmations

Reserve alert dialogs for destructive or irreversible actions that need explicit confirmation.

```tsx
// ✅ Good - destructive action
<AlertDialog>
  <AlertDialogTitle>Delete account?</AlertDialogTitle>
  <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
</AlertDialog>

// ❌ Bad - not critical
<AlertDialog>
  <AlertDialogTitle>Save changes?</AlertDialogTitle>
</AlertDialog>
```

### Clear Title and Description

Always provide both title and description explaining the consequence.

### Action Button Order

Place the safe action (Cancel) first, destructive action last.

### Don't Overuse

Alert dialogs interrupt the user experience. Use regular dialogs for non-critical actions.

## Related Components

- [Dialog](/docs/components/dialog) - For non-critical interactions
- [Drawer](/docs/components/drawer) - For mobile-friendly panels
- [Sheet](/docs/components/sheet) - For side panels
