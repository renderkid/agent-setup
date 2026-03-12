# Dialog

Source: `content/docs/components/dialog.mdx`

Dialog,
  DialogTrigger,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogPanel,
  DialogFooter,
  DialogClose,
} from "@/registry/default/ui/dialog";
import { Button } from "@/registry/default/ui/button";

```tsx
"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDefault() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description that explains what the dialog is for.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <p className="text-sm">Dialog content goes here.</p>
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/dialog
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
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
```

```tsx
<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>
    Open Dialog
  </DialogTrigger>
  <DialogPopup>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a dialog description that explains what the dialog is for.
      </DialogDescription>
    </DialogHeader>
    <DialogPanel>
      <p className="text-sm">Dialog content goes here.</p>
    </DialogPanel>
    <DialogFooter>
      <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogPopup>
</Dialog>
```

**DialogFooter Variant**

The `DialogFooter` component supports a `variant` prop to control its styling:

- `default` (default): Includes a border-top, background color, and padding
- `bare`: Removes the border and background for a minimal appearance

```tsx
// Default variant (with border and background)
<DialogFooter>
  <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
  <Button>Save</Button>
</DialogFooter>

// Bare variant (no border or background)
<DialogFooter variant="bare">
  <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
  <Button>Save</Button>
</DialogFooter>
```

**DialogPanel Scrolling**

The `DialogPanel` component automatically wraps its content in a `ScrollArea` component. This means that if the content exceeds the dialog's maximum height, it will become scrollable automatically. The scrollbar will appear when needed, providing a smooth scrolling experience.

```tsx
<DialogPanel>
  {/* Long content that will scroll if it exceeds the dialog height */}
  <div>...</div>
</DialogPanel>
```

## Examples

### Default

```tsx
"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDefault() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description that explains what the dialog is for.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <p className="text-sm">Dialog content goes here.</p>
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

```

### Confirmation Dialog

A dialog for confirming destructive actions.

```tsx
"use client";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogConfirmation() {
  return (
    <Dialog>
      <DialogTrigger render={<Button color="destructive" />}>
        Delete Item
      </DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="size-5 text-destructive-muted-foreground" />
            Delete Item
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this item? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel>
          This will permanently remove the item from your account.
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <Button color="destructive">Delete</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

```

### Form Dialog

A dialog containing a form for data input.

```tsx
"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function DialogForm() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Add User</DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <form
          className="contents"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Enter the details for the new user account.
            </DialogDescription>
          </DialogHeader>
          <DialogPanel className="grid gap-4">
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input placeholder="Enter full name" type="text" />
            </Field>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input placeholder="Enter email address" type="email" />
            </Field>
            <Field>
              <FieldLabel>Role</FieldLabel>
              <Input placeholder="Enter role" type="text" />
            </Field>
          </DialogPanel>
          <DialogFooter>
            <DialogClose render={<Button variant="ghost" />}>
              Cancel
            </DialogClose>
            <Button type="submit">Add User</Button>
          </DialogFooter>
        </form>
      </DialogPopup>
    </Dialog>
  );
}

```

### Settings Dialog

A dialog for application settings with multiple sections.

```tsx
"use client";
import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogSettings() {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="flex items-center gap-2" variant="outline" />
        }
      >
        <Settings className="h-4 w-4" />
        Settings
      </DialogTrigger>
      <DialogPopup className="max-w-md">
        <DialogHeader>
          <DialogTitle>Application Settings</DialogTitle>
          <DialogDescription>
            Configure your application preferences and options.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel className="space-y-4">
          <div className="space-y-2">
            <label className="font-medium text-sm">Theme</label>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                Light
              </Button>
              <Button size="sm" variant="outline">
                Dark
              </Button>
              <Button size="sm" variant="outline">
                System
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium text-sm">Language</label>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                English
              </Button>
              <Button size="sm" variant="outline">
                Spanish
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-medium text-sm">Notifications</label>
            <div className="text-muted-foreground text-sm">
              Email notifications are enabled
            </div>
          </div>
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Reset</DialogClose>
          <Button>Save Changes</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

```

### Alert Dialog

A dialog for displaying important alerts or warnings.

```tsx
"use client";
import { AlertTriangle } from "lucide-react";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogAlert() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Show Alert
      </DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="size-5 text-amber-500" />
            Important Notice
          </DialogTitle>
          <DialogDescription>
            This is an important alert that requires your attention.
          </DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <Alert variant="warning">
            Your subscription will expire in 7 days. Please renew to continue
            using all features.
          </Alert>
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>
            Remind Me Later
          </DialogClose>
          <Button>Renew Now</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

```

### Dialog with Bare Footer

A dialog using the bare footer variant for a minimal appearance without border or background.

```tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function DialogBareFooter() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open Dialog
      </DialogTrigger>
      <DialogPopup className="sm:max-w-sm">
        <form
          className="contents"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <DialogPanel className="grid gap-4">
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input defaultValue="Margaret Welsh" type="text" />
            </Field>
            <Field>
              <FieldLabel>Username</FieldLabel>
              <Input defaultValue="@maggie.welsh" type="text" />
            </Field>
          </DialogPanel>
          <DialogFooter variant="bare">
            <DialogClose render={<Button variant="ghost" />}>
              Cancel
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogPopup>
    </Dialog>
  );
}

```

### Dialog with Scroll Inside

A dialog with scrollable content that automatically handles overflow using the built-in ScrollArea.

```tsx
"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogScroll() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Terms & Conditions
      </DialogTrigger>
      <DialogPopup className="sm:max-w-lg" showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Terms & Conditions</DialogTitle>
        </DialogHeader>
        <DialogPanel>
          <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
            <div className="space-y-4">
              <div className="space-y-1">
                <p>
                  <strong>Acceptance of Terms</strong>
                </p>
                <p>
                  By accessing and using this website, users agree to comply
                  with and be bound by these Terms of Service. Users who do not
                  agree with these terms should discontinue use of the website
                  immediately.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>User Account Responsibilities</strong>
                </p>
                <p>
                  Users are responsible for maintaining the confidentiality of
                  their account credentials. Any activities occurring under a
                  user&apos;s account are the sole responsibility of the account
                  holder. Users must notify the website administrators
                  immediately of any unauthorized account access.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>Content Usage and Restrictions</strong>
                </p>
                <p>
                  The website and its original content are protected by
                  intellectual property laws. Users may not reproduce,
                  distribute, modify, create derivative works, or commercially
                  exploit any content without explicit written permission from
                  the website owners.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>Limitation of Liability</strong>
                </p>
                <p>
                  The website provides content &ldquo;as is&rdquo; without any
                  warranties. The website owners shall not be liable for direct,
                  indirect, incidental, consequential, or punitive damages
                  arising from user interactions with the platform.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>User Conduct Guidelines</strong>
                </p>
                <ul className="list-disc pl-6">
                  <li>Not upload harmful or malicious content</li>
                  <li>Respect the rights of other users</li>
                  <li>
                    Avoid activities that could disrupt website functionality
                  </li>
                  <li>Comply with applicable local and international laws</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>Modifications to Terms</strong>
                </p>
                <p>
                  The website reserves the right to modify these terms at any
                  time. Continued use of the website after changes constitutes
                  acceptance of the new terms.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>Termination Clause</strong>
                </p>
                <p>
                  The website may terminate or suspend user access without prior
                  notice for violations of these terms or for any other reason
                  deemed appropriate by the administration.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>Governing Law</strong>
                </p>
                <p>
                  These terms are governed by the laws of the jurisdiction where
                  the website is primarily operated, without regard to conflict
                  of law principles.
                </p>
              </div>
            </div>
          </div>
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <Button type="button">I agree</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}

```

## API Reference

### Root

A modal dialog that interrupts the user with important content and expects a response.

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| open | `boolean` | - | Controlled open state. Use with onOpenChange for controlled dialog behavior. |
| defaultOpen | `boolean` | `false` | Initial open state for uncontrolled dialog. |
| onOpenChange | `(open: boolean) => void` | - | Callback fired when the dialog's open state changes. |
| modal | `boolean` | `true` | When true, prevents interaction with content outside the dialog and traps focus within it. |

### DialogTrigger

The button that opens the dialog.

### DialogBackdrop

Semi-transparent overlay that covers the page behind the dialog.

### DialogViewport

Container that positions the dialog popup within the viewport.

### DialogPopup

The dialog content container with animation and styling.

**DialogPopup Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| showCloseButton | `boolean` | `true` | Controls whether the close button appears in the dialog header. |
| bottomStickOnMobile | `boolean` | `true` | Makes the dialog stick to the bottom on mobile devices for better thumb reachability. |

### DialogHeader

Header section of the dialog, typically containing the title and close button.

### DialogFooter

Footer section of the dialog, typically containing action buttons.

### DialogTitle

The accessible title of the dialog, announced to screen readers.

### DialogDescription

Additional descriptive text for the dialog, announced to screen readers.

### DialogPanel

Main content area of the dialog with scrollable overflow handling.

## Accessibility

The Dialog component follows WAI-ARIA guidelines:

- Uses proper ARIA attributes for modal dialogs
- Implements focus management and trapping
- Provides proper labeling for screen readers
- Supports keyboard navigation and escape key handling
- Manages focus restoration when dialog closes

### Keyboard Navigation

- `Escape` - Closes the dialog
- `Tab` - Moves focus to the next focusable element within the dialog
- `Shift + Tab` - Moves focus to the previous focusable element within the dialog
- `Enter` or `Space` - Activates buttons or form elements

## Best Practices

### Content Guidelines

- Use clear, descriptive titles that explain the dialog's purpose
- Keep dialog content focused and concise
- Provide clear action buttons with descriptive labels
- Use appropriate button variants (destructive for dangerous actions)

### User Experience

- Use dialogs sparingly - only for important interactions that require immediate attention
- Provide clear ways to cancel or close the dialog
- Consider the user's workflow and context
- Use appropriate dialog sizes for the content

### Form Dialogs

- Validate form data before allowing submission
- Provide clear error messages and validation feedback
- Use proper form labels and accessibility attributes
- Consider using a stepper for complex multi-step forms

> Avoid using dialogs for content that users might want to reference while interacting with other parts of the application. Consider using a sidebar or panel instead.

## Related Components

- [Button](/docs/components/ui/button) - For dialog actions and triggers
- [Input](/docs/components/ui/input) - For form dialogs
- [Alert Dialog](/docs/components/ui/alert-dialog) - For destructive confirmations
- [Sheet](/docs/components/ui/sheet) - Alternative to dialogs for mobile-friendly modals
