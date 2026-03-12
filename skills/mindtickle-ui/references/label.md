# Label

Source: `content/docs/components/label.mdx`

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LabelDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

    ```bash npx shadcn@latest add @mindtickle/label ```

      - Install the following dependencies:
      ```bash npm install @base-ui/react ```
      - Copy and paste the following code into your project.
      _Registry source is installed via the Mindtickle shadcn registry._
      - Update the import paths to match your project setup.

## Usage

```tsx
import { Label } from "@/components/ui/label";
```

```tsx
<Label htmlFor="email">Email</Label>
```

## Examples

### Default

The standard label for form controls.

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LabelDemo() {
  return (
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
  );
}

```

### With Input

Labels should always be associated with form controls using the `htmlFor` attribute.

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LabelWithInput() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" placeholder="name@example.com" type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
    </div>
  );
}

```

### With Checkbox

Labels work with checkbox controls for accessible selection.

```tsx
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function LabelWithCheckbox() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing">Subscribe to marketing emails</Label>
      </div>
    </div>
  );
}

```

### With Radio

Use labels with radio buttons for clear option selection.

```tsx
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function LabelWithRadio() {
  return (
    <RadioGroup defaultValue="email">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="email-option" value="email" />
        <Label htmlFor="email-option">Email</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="sms-option" value="sms" />
        <Label htmlFor="sms-option">SMS</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="push-option" value="push" />
        <Label htmlFor="push-option">Push notification</Label>
      </div>
    </RadioGroup>
  );
}

```

### Required Indicator

Add visual indicators for required fields.

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LabelRequired() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input id="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-req">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input id="email-req" required type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input id="phone" type="tel" />
      </div>
    </div>
  );
}

```

## API Reference

### Label

A text label for form controls that provides an accessible name and click target.

**Label Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| htmlFor | `string` | - | The id of the form control this label is associated with. Clicking the label will focus the associated control. |

## Accessibility

The Label component follows accessibility best practices:

- Uses semantic `<label>` element for proper form labeling
- Associates with form controls via `htmlFor` attribute matching control's `id`
- Supports clicking the label to focus the associated control
- Works with screen readers to announce form control purpose
- Automatically handles disabled state styling via peer selectors
- Supports `group-data-[disabled=true]` for parent-level disabled state

### Keyboard Navigation

- `Tab` - Moves focus to the associated form control when focused
- Clicking the label focuses the associated form control
- Screen readers announce the label text when the control is focused

## Best Practices

### Association

- **Always use htmlFor**: Connect labels to inputs using `htmlFor` and `id` attributes
- **One label per control**: Each form control should have exactly one associated label
- **Descriptive text**: Use clear, concise text that describes the input purpose
- **No placeholders as labels**: Never rely solely on placeholder text for labeling

```tsx
// Good: Proper label association
<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />

// Bad: Missing htmlFor and id
<Label>Email</Label>
<Input type="email" />
```

### Required Fields

- **Visual indication**: Use asterisks (\*) or "(required)" text for required fields
- **Consistent styling**: Apply the same pattern across all required fields
- **ARIA attributes**: Add `required` or `aria-required="true"` to the input

```tsx
<Label htmlFor="email">
  Email Address <span className="text-destructive">*</span>
</Label>
<Input id="email" required type="email" />
```

### Label Text

- **Clear and concise**: Use 1-3 words when possible
- **Sentence case**: Use sentence case for most labels (e.g., "Email address")
- **Title case**: Use title case for proper nouns (e.g., "GitHub Username")
- **Avoid redundancy**: Don't repeat information in placeholder text

```tsx
// Good: Clear and concise
<Label htmlFor="name">Full Name</Label>

// Avoid: Too verbose
<Label htmlFor="name">Please enter your full name below</Label>
```

### With Field Component

For complete form fields with descriptions and errors, use the Field component:

```tsx
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";

<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" />
  <FieldDescription>We'll never share your email.</FieldDescription>
</Field>;
```

### Layout and Positioning

- **Vertical layout (recommended)**: Place labels above inputs for better readability
- **Horizontal layout**: Use for compact forms or settings pages
- **Alignment**: Ensure labels align with their controls visually

### Disabled State

Labels automatically style appropriately when associated controls are disabled:

```tsx
<Label htmlFor="disabled-input">Disabled Field</Label>
<Input disabled id="disabled-input" />
```

> Never use placeholder text as the only way to label an input. Always provide a visible Label component for accessibility.

> For complex form layouts with descriptions and error messages, use the Field component instead of standalone Label components.

## Related Components

- [Field](/docs/components/field) - Complete form field composition with labels, descriptions, and errors
- [Input](/docs/components/input) - Text input fields
- [Textarea](/docs/components/textarea) - Multi-line text input
- [Select](/docs/components/select) - Dropdown selections
- [Checkbox](/docs/components/checkbox) - Checkbox controls
- [RadioGroup](/docs/components/radio-group) - Radio button groups
- [Switch](/docs/components/switch) - Toggle switches
