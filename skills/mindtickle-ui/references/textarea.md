# Textarea

Source: `content/docs/components/textarea.mdx`

```tsx
import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo() {
  return <Textarea placeholder="Enter your message..." />;
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

    ```bash npx shadcn@latest add @mindtickle/textarea ```

      - Copy and paste the following code into your project.
      _Registry source is installed via the Mindtickle shadcn registry._
      - Update the import paths to match your project setup.

## Usage

```tsx
import { Textarea } from "@/components/ui/textarea";
```

```tsx
<Textarea placeholder="Enter your message" />
```

## Examples

### Default

The standard textarea for multi-line text entry.

```tsx
import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo() {
  return <Textarea placeholder="Enter your message..." />;
}

```

### With Label

Use textarea with labels for accessible form fields.

```tsx
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  );
}

```

### With Field

Combine with Field components for complete form controls with descriptions and validation.

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithField() {
  return (
    <Field>
      <FieldLabel htmlFor="bio">Bio</FieldLabel>
      <Textarea id="bio" placeholder="Tell us about yourself..." />
      <FieldDescription>
        Write a short introduction about yourself (max 500 characters).
      </FieldDescription>
    </Field>
  );
}

```

### Disabled State

Textareas can be disabled to prevent user interaction.

```tsx
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaDisabled() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled</Label>
        <Textarea
          disabled
          id="disabled"
          placeholder="This textarea is disabled"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="readonly">Read Only</Label>
        <Textarea
          id="readonly"
          readOnly
          value="This textarea is read only and cannot be edited."
        />
      </div>
    </div>
  );
}

```

### With Rows

Control the initial height using the `rows` attribute.

```tsx
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaRows() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="short">Short (3 rows)</Label>
        <Textarea id="short" placeholder="A short comment..." rows={3} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="medium">Medium (5 rows)</Label>
        <Textarea id="medium" placeholder="A medium description..." rows={5} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="long">Long (10 rows)</Label>
        <Textarea id="long" placeholder="A detailed essay..." rows={10} />
      </div>
    </div>
  );
}

```

### With Character Count

Display character count for textareas with length limits.

```tsx
"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaCharacterCount() {
  const [value, setValue] = useState("");
  const maxLength = 280;

  return (
    <div className="space-y-2">
      <Label htmlFor="tweet">Tweet</Label>
      <Textarea
        id="tweet"
        maxLength={maxLength}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What's happening?"
        rows={4}
        value={value}
      />
      <p className="text-muted-foreground text-sm">
        {value.length}/{maxLength} characters
      </p>
    </div>
  );
}

```

### Auto-resize

The textarea automatically adjusts its height based on content using `field-sizing-content`.

```tsx
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaAutoResize() {
  return (
    <div className="space-y-2">
      <Label htmlFor="auto">Auto-resizing Textarea</Label>
      <Textarea
        id="auto"
        placeholder="Start typing and watch this textarea grow automatically..."
        rows={3}
      />
      <p className="text-muted-foreground text-sm">
        This textarea automatically adjusts its height based on content.
      </p>
    </div>
  );
}

```

## API Reference

### Textarea

A multi-line text input field that allows users to enter and edit longer text content.

**Textarea Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| rows | `number` | - | Sets the initial visible height of the textarea. The textarea will auto-expand beyond this initial height as content grows. |
| placeholder | `string` | - | - |
| value | `string` | - | - |
| defaultValue | `string` | - | - |
| disabled | `boolean` | `false` | - |
| readOnly | `boolean` | `false` | - |
| required | `boolean` | `false` | - |
| maxLength | `number` | - | - |
| className | `string` | - | - |

## Accessibility

The Textarea component follows accessibility best practices:

- Uses semantic `<textarea>` element with proper attributes
- Supports all standard HTML textarea attributes including `aria-*` attributes
- Works with Label components for proper labeling via `htmlFor` and `id`
- Focus visible styles for keyboard users with ring indicator
- Disabled state properly communicated to screen readers
- Supports `aria-invalid` for validation states
- Auto-resizing maintains accessibility and usability
- Placeholder text should be used as hints, not as labels

### Keyboard Navigation

- `Tab` - Moves focus to the textarea
- `Shift + Tab` - Moves focus away from the textarea
- `Arrow Keys` - Navigate within the textarea text
- `Home/End` - Move to beginning/end of current line
- `Ctrl/Cmd + Home/End` - Move to beginning/end of textarea
- `Ctrl/Cmd + A` - Select all text
- `Ctrl/Cmd + C/V/X` - Copy/paste/cut text
- `Enter` - Creates new line within textarea

## Best Practices

### Labeling

- Always provide visible labels using the Label component
- Connect labels to textareas using `htmlFor` and `id` attributes
- Use descriptive labels that clearly indicate what information is expected
- For required fields, indicate this in the label with visual indicators
- Use placeholder text sparingly as hints, not as primary labels

```tsx
// Good: Proper labeling
<Label htmlFor="bio">Biography</Label>
<Textarea id="bio" placeholder="Tell us about yourself..." />

// Bad: Missing label
<Textarea placeholder="Bio" />
```

### Height and Sizing

- **Initial height**: Use `rows` attribute to set appropriate starting height
- **Auto-resize**: The textarea automatically expands with content
- **Min height**: Default minimum height is 4rem (64px)
- **Max height**: Consider adding `max-h-*` classes for very long content

```tsx
// Short comments
<Textarea rows={3} placeholder="Add a comment..." />

// Longer content
<Textarea rows={8} placeholder="Write your essay..." />

// With max height
<Textarea className="max-h-96" rows={5} />
```

### Character Limits

- Set `maxLength` for hard character limits
- Display character counters for user feedback
- Show remaining characters, not just count
- Warn users when approaching the limit

```tsx
<div>
  <Textarea maxLength={500} />
  <p className="text-muted-foreground text-sm">{value.length}/500 characters</p>
</div>
```

### Placeholder Text

- Keep placeholder text concise and helpful
- Use examples of expected format when helpful
- Don't use placeholder text as the only label
- Consider showing examples outside the textarea for complex formats

```tsx
// Good: Helpful hint
<Textarea placeholder="Describe your product features..." />

// Avoid: Instructions as placeholder
<Textarea placeholder="Please write a detailed description of your product including all features and benefits..." />
```

### Validation and Errors

- Use `aria-invalid` for validation states
- Show error messages using FieldError component
- Validate on blur or submit, not on every keystroke
- Provide clear, actionable error messages

```tsx
<Field data-invalid={!!error}>
  <FieldLabel htmlFor="message">Message</FieldLabel>
  <Textarea aria-invalid={!!error} id="message" />
  <FieldError>{error}</FieldError>
</Field>
```

### Combining with Field

For complete form fields with labels, descriptions, and errors:

```tsx
<Field>
  <FieldLabel htmlFor="description">Description</FieldLabel>
  <Textarea id="description" placeholder="Provide details..." rows={5} />
  <FieldDescription>
    Describe your product in detail (max 500 characters).
  </FieldDescription>
</Field>
```

### With InputGroup

Use InputGroup for textareas with action buttons or metadata:

```tsx
<InputGroup>
  <InputGroupTextarea placeholder="Write a message..." rows={4} />
  <InputGroupAddon align="block-end">
    <Button size="sm">
      <Send />
      Send
    </Button>
  </InputGroupAddon>
</InputGroup>
```

### User Experience

- Set appropriate `autocomplete` attributes
- Consider `spellcheck` for user-facing content
- Use `wrap` attribute to control text wrapping behavior
- Provide helpful descriptions for complex fields
- Show character counters for limited fields

> Never use placeholder text as the only way to label a textarea. Always provide proper visible labels for accessibility.

> The textarea includes <code>field-sizing-content</code> which automatically adjusts height based on content. You can override this behavior with custom height classes if needed.

## Related Components

- [Field](/docs/components/field) - For structured form fields with labels and descriptions
- [InputGroup](/docs/components/input-group) - For textareas with action buttons and addons
- [Label](/docs/components/label) - For accessible textarea labeling
- [Input](/docs/components/input) - For single-line text input
- [Select](/docs/components/select) - For dropdown selections
