# Input

Source: `content/docs/components/input.mdx`

```tsx
import { Input } from "@/components/ui/input";

export function InputDefault() {
  return <Input placeholder="Enter your name" />;
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

    ```bash npx shadcn@latest add @mindtickle/input ```

      - Copy and paste the following code into your project.
      _Registry source is installed via the Mindtickle shadcn registry._
      - Update the import paths to match your project setup.

## Usage

```tsx
import { Input } from "@/components/ui/input";
```

```tsx
<Input placeholder="Enter your name" />
```

## Examples

### Default

The standard input field for text entry.

```tsx
import { Input } from "@/components/ui/input";

export function InputDefault() {
  return <Input placeholder="Enter your name" />;
}

```

### With Label

Use inputs with labels for accessible form fields.

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" placeholder="Enter your email" type="email" />
    </div>
  );
}

```

### Disabled State

Inputs can be disabled to prevent user interaction.

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputDisabled() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled Input</Label>
        <Input disabled id="disabled" placeholder="This input is disabled" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="readonly">Read Only Input</Label>
        <Input id="readonly" readOnly value="This input is read only" />
      </div>
    </div>
  );
}

```

### Different Types

Inputs support various HTML input types for different data formats.

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputTypes() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="text">Text</Label>
        <Input id="text" placeholder="Enter text" type="text" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="Enter email" type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" placeholder="Enter password" type="password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number">Number</Label>
        <Input id="number" placeholder="Enter number" type="number" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tel">Phone</Label>
        <Input id="tel" placeholder="Enter phone number" type="tel" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="url">URL</Label>
        <Input id="url" placeholder="Enter URL" type="url" />
      </div>
    </div>
  );
}

```

### File Upload

Input with file type for file selection.

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-2">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  );
}

```

### With Button

Combine inputs with buttons for actions like subscription or search.

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input placeholder="Email" type="email" />
      <Button type="submit">Subscribe</Button>
    </div>
  );
}

```

## API Reference

### Input

A single-line text input field for user data entry.

**Input Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| type | `string` | `"text"` | The input type. Use text for general input, email for email addresses, password for secure entry, number for numeric values, tel for phone numbers, url for web addresses, date for date selection, or file for file uploads. |
| placeholder | `string` | - | Placeholder text displayed when the input is empty. |
| value | `string` | - | The controlled value of the input. |
| defaultValue | `string` | - | The initial value for uncontrolled inputs. |
| disabled | `boolean` | `false` | Disables the input when true, preventing user interaction and displaying reduced opacity. |
| readOnly | `boolean` | `false` | Makes the input read-only when true, preventing edits while maintaining focusability. |
| required | `boolean` | `false` | Marks the input as required for form validation. |

## Accessibility

The Input component follows accessibility best practices:

- Uses semantic `<input>` element with proper type attributes
- Supports all standard HTML input attributes including `aria-*` attributes
- Works with Label components for proper labeling via `htmlFor` and `id`
- Focus visible styles for keyboard users with ring indicator
- Disabled state properly communicated to screen readers
- Supports `aria-invalid` for validation states
- Placeholder text should be used as hints, not as labels

### Keyboard Navigation

- `Tab` - Moves focus to the input
- `Shift + Tab` - Moves focus away from the input
- `Arrow Keys` - Navigate within the input text (varies by input type)
- `Home/End` - Move to beginning/end of input
- `Ctrl/Cmd + A` - Select all text
- `Ctrl/Cmd + C/V/X` - Copy/paste/cut text

## Best Practices

### Labeling

- Always provide visible labels using the Label component
- Connect labels to inputs using `htmlFor` and `id` attributes
- Use descriptive labels that clearly indicate what information is expected
- For required fields, indicate this in the label with visual indicators
- Use placeholder text sparingly as hints, not as primary labels

### Input Types

- **Text** - General text input (names, addresses, etc.)
- **Email** - Email addresses with built-in validation
- **Password** - Secure password entry with masked characters
- **Number** - Numeric input with increment/decrement controls
- **Tel** - Telephone numbers
- **URL** - Web addresses with validation
- **Date** - Date selection with native picker
- **File** - File upload selection

### Validation

- Provide clear feedback when validation fails
- Use appropriate input types for automatic validation
- Add `aria-invalid` attribute for screen readers
- Show error messages near the input
- Validate on blur or submit, not on every keystroke (unless intentional)

### User Experience

- Set appropriate `autocomplete` attributes for common fields
- Use `inputMode` for mobile keyboard optimization
- Consider `maxLength` for fields with character limits
- Provide helpful placeholder text when appropriate
- Disable inputs when they shouldn't be editable

> Never use placeholder text as the only way to label an input. Always provide proper visible labels for accessibility.

## Related Components

- [Field](/docs/components/field) - For structured form fields with labels and descriptions
- [InputGroup](/docs/components/input-group) - For inputs with icons, buttons, and addons
- [Label](/docs/components/label) - For accessible input labeling
- [Textarea](/docs/components/textarea) - For multi-line text input
- [Select](/docs/components/select) - For dropdown selections
