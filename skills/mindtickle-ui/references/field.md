# Field

Source: `content/docs/components/field.mdx`

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldDemo() {
  return (
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" placeholder="Enter your email" type="email" />
      <FieldDescription>We'll never share your email.</FieldDescription>
    </Field>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

    ```bash npx shadcn@latest add @mindtickle/field ```

      - Install the following dependencies:
      ```bash npm install class-variance-authority ```
      - Copy and paste the following code into your project.
      _Registry source is installed via the Mindtickle shadcn registry._
      - Update the import paths to match your project setup.

## Usage

```tsx
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldContent,
} from "@/components/ui/field";
```

### Basic (Vertical)

```tsx
<Field>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" />
  <FieldDescription>We'll never share your email.</FieldDescription>
</Field>
```

### Responsive

```tsx
<Field orientation="responsive">
  <FieldContent>
    <FieldLabel htmlFor="name">Name</FieldLabel>
    <FieldDescription>Provide your full name</FieldDescription>
  </FieldContent>
  <Input id="name" />
</Field>
```

## Examples

### Responsive Layout

#### Vertical (Default)

The standard vertical layout stacks label, control, and helper text – ideal for mobile-first layouts.

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldVertical() {
  return (
    <Field orientation="vertical">
      <FieldLabel htmlFor="name">Full Name</FieldLabel>
      <Input id="name" placeholder="Enter your full name" />
      <FieldDescription>
        This will be displayed on your public profile.
      </FieldDescription>
    </Field>
  );
}

```

#### Responsive

Automatically switches between vertical and horizontal layouts based on container width. Use `orientation="responsive"` with `@container/field-group` classes on FieldGroup for automatic breakpoint-aware orientation switching.

```tsx
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function FieldResponsive() {
  return (
    <div className="w-full max-w-4xl">
      <form>
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>Fill in your profile information.</FieldDescription>
          <FieldSeparator />
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <FieldDescription>
                  Provide your full name for identification
                </FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="John Doe" required />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <FieldDescription>
                  You can write your message here. Keep it short, preferably
                  under 100 characters.
                </FieldDescription>
              </FieldContent>
              <Textarea
                className="min-h-[100px] resize-none sm:min-w-[300px]"
                id="message"
                placeholder="Hello, world!"
                required
              />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}

```

### With Input

Combine Field with Input for complete form controls.

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldInput() {
  return (
    <div className="space-y-6">
      <Field>
        <FieldLabel htmlFor="email">Email Address</FieldLabel>
        <Input id="email" placeholder="name@example.com" type="email" />
        <FieldDescription>
          We'll use this for account recovery and notifications.
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <Input id="password" type="password" />
        <FieldDescription>Must be at least 8 characters long.</FieldDescription>
      </Field>
    </div>
  );
}

```

### With Textarea

Field works seamlessly with textarea elements for multi-line input.

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export function FieldTextarea() {
  return (
    <Field>
      <FieldLabel htmlFor="bio">Bio</FieldLabel>
      <Textarea id="bio" placeholder="Tell us about yourself" />
      <FieldDescription>
        Write a short introduction about yourself.
      </FieldDescription>
    </Field>
  );
}

```

### With Select

Use Field to structure select dropdowns with proper labeling.

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FieldSelect() {
  return (
    <Field>
      <FieldLabel htmlFor="country">Country</FieldLabel>
      <Select>
        <SelectTrigger id="country">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
          <SelectItem value="de">Germany</SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription>
        Select your country of residence for shipping.
      </FieldDescription>
    </Field>
  );
}

```

### With Checkbox

Field supports checkbox controls with flexible layouts.

```tsx
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";

export function FieldCheckbox() {
  return (
    <Field orientation="horizontal">
      <Checkbox id="terms" />
      <FieldContent>
        <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
        <FieldDescription>
          You agree to our Terms of Service and Privacy Policy.
        </FieldDescription>
      </FieldContent>
    </Field>
  );
}

```

### With Radio Group

Structure radio button groups with Field components.

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function FieldRadio() {
  return (
    <FieldSet>
      <FieldLegend>Notification Preferences</FieldLegend>
      <FieldDescription>
        Choose how you want to receive notifications.
      </FieldDescription>
      <RadioGroup defaultValue="email">
        <Field orientation="horizontal">
          <RadioGroupItem id="email" value="email" />
          <FieldContent>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <FieldDescription>
              Receive notifications via email.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="sms" value="sms" />

          <FieldContent>
            <FieldLabel htmlFor="sms">SMS</FieldLabel>
            <FieldDescription>
              Receive notifications via text message.
            </FieldDescription>
          </FieldContent>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="push" value="push" />
          <FieldContent>
            <FieldLabel htmlFor="push">Push</FieldLabel>
            <FieldDescription>
              Receive push notifications on your device.
            </FieldDescription>
          </FieldContent>
        </Field>
      </RadioGroup>
    </FieldSet>
  );
}

```

### With Switch

Combine Field with Switch for toggle controls.

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export function FieldSwitch() {
  return (
    <div className="space-y-4">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="marketing">Marketing emails</FieldLabel>
          <FieldDescription>
            Receive emails about new products and features.
          </FieldDescription>
        </FieldContent>
        <Switch id="marketing" />
      </Field>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="security">Security emails</FieldLabel>
          <FieldDescription>
            Receive emails about your account security.
          </FieldDescription>
        </FieldContent>
        <Switch defaultChecked id="security" />
      </Field>
    </div>
  );
}

```

### Error State

Display validation errors using FieldError component.

```tsx
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldErrorExample() {
  return (
    <Field data-invalid="true">
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input
        aria-invalid="true"
        id="username"
        placeholder="Choose a username"
      />
      <FieldError>Username must be at least 3 characters long.</FieldError>
    </Field>
  );
}

```

### Multiple Errors

FieldError automatically renders multiple validation messages as a list.

```tsx
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldMultipleErrors() {
  const errors = [
    { message: "Password must be at least 8 characters long" },
    { message: "Password must contain at least one uppercase letter" },
    { message: "Password must contain at least one number" },
  ];

  return (
    <Field data-invalid="true">
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <Input aria-invalid="true" id="password" type="password" />
      <FieldError errors={errors} />
    </Field>
  );
}

```

### Field Groups

Use FieldGroup to organize multiple related fields.

```tsx
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldGroupExample() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="first-name">First Name</FieldLabel>
        <Input id="first-name" placeholder="John" />
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
        <Input id="last-name" placeholder="Doe" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" placeholder="john.doe@example.com" type="email" />
        <FieldDescription>
          We'll never share your email with anyone else.
        </FieldDescription>
      </Field>
    </FieldGroup>
  );
}

```

### Field Set

Use FieldSet and FieldLegend for semantic grouping of related fields.

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldSetExample() {
  return (
    <FieldSet>
      <FieldLegend>Personal Information</FieldLegend>
      <FieldDescription>
        Please provide your personal details below.
      </FieldDescription>
      <Field>
        <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
        <Input id="full-name" placeholder="John Doe" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email-address">Email Address</FieldLabel>
        <Input id="email-address" placeholder="john@example.com" type="email" />
      </Field>
      <Field>
        <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
        <Input id="phone" placeholder="+1 (555) 000-0000" type="tel" />
      </Field>
    </FieldSet>
  );
}

```

### Field Separator

Add visual separation between field groups.

```tsx
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function FieldSeparatorExample() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <Input id="username" placeholder="johndoe" />
      </Field>
      <Field>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" placeholder="john@example.com" type="email" />
      </Field>

      <FieldSeparator>Security</FieldSeparator>

      <Field>
        <FieldLabel htmlFor="current-password">Current Password</FieldLabel>
        <Input id="current-password" type="password" />
      </Field>
      <Field>
        <FieldLabel htmlFor="new-password">New Password</FieldLabel>
        <Input id="new-password" type="password" />
      </Field>
    </FieldGroup>
  );
}

```

## API Reference

### Root

The wrapper component for creating structured form fields.

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| orientation | `"vertical" | "horizontal" | "responsive"` | `"vertical"` | Controls the layout direction of label and input. vertical (default) stacks elements, responsive switches between vertical and horizontal based on container width with @container/field-group, and horizontal aligns label and control side-by-side. |
| data-invalid | `string` | - | - |
| data-disabled | `string` | - | - |
| className | `string` | - | - |

## Accessibility

The Field component system follows accessibility best practices:

- **Semantic Structure**: FieldSet and FieldLegend provide proper semantic grouping
- **ARIA Attributes**: Field outputs `role="group"` for nested label inheritance
- **Error Announcements**: FieldError uses `role="alert"` for screen reader announcements
- **Label Association**: FieldLabel properly associates with inputs via `htmlFor` and `id`
- **Validation States**: Supports `data-invalid` and `aria-invalid` for proper error communication
- **Focus Management**: All interactive elements maintain proper focus order

### Keyboard Navigation

- `Tab` - Moves focus through form fields in logical order
- `Shift + Tab` - Moves focus backward through fields
- `Arrow Keys` - Navigate within specific controls (selects, radio groups, etc.)
- `Space` - Activates checkboxes, radio buttons, and switches
- `Enter` - Submits forms when focused on inputs

## Best Practices

### Structure and Composition

- **Use Field for all form controls**: Provides consistent structure and accessibility
- **Group related fields**: Use FieldGroup to organize multiple fields logically
- **Semantic grouping**: Use FieldSet and FieldLegend for related field groups
- **Use FieldContent for responsive layouts**: Wrap labels and descriptions in FieldContent when using `orientation="responsive"` or `orientation="horizontal"`
- **Proper nesting**: Always place FieldLabel before the control, FieldDescription and FieldError after

```tsx
// Good: Complete field structure (vertical)
<Field>
  <FieldLabel htmlFor="email">Email Address</FieldLabel>
  <Input id="email" type="email" />
  <FieldDescription>We'll use this for account recovery.</FieldDescription>
</Field>

// Good: Responsive field with FieldContent
<Field orientation="responsive">
  <FieldContent>
    <FieldLabel htmlFor="email">Email Address</FieldLabel>
    <FieldDescription>We'll use this for account recovery.</FieldDescription>
  </FieldContent>
  <Input id="email" type="email" />
</Field>

// Bad: Missing label
<Field>
  <Input placeholder="Email" />
</Field>
```

### Layout Orientation

- **Vertical (default)**: Best for mobile-first designs and standard forms. Stacks label, control, and helper text.
- **Responsive**: Automatically switches between vertical and horizontal based on container width. Use with `FieldGroup` and `@container/field-group` classes for breakpoint-aware orientation switching.
- **Horizontal**: For explicit side-by-side layouts. Use `orientation="horizontal"` with `FieldContent` to keep descriptions aligned with controls.

```tsx
// Responsive fields that adapt to container width
<FieldGroup>
  <Field orientation="responsive">
    <FieldContent>
      <FieldLabel htmlFor="name">Name</FieldLabel>
      <FieldDescription>
        Provide your full name for identification
      </FieldDescription>
    </FieldContent>
    <Input id="name" />
  </Field>
  <Field orientation="responsive">
    <FieldContent>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <FieldDescription>We'll use this for notifications</FieldDescription>
    </FieldContent>
    <Input id="email" type="email" />
  </Field>
</FieldGroup>
```

### Validation and Errors

- **Set states properly**: Add `data-invalid="true"` to Field and `aria-invalid="true"` to inputs
- **Clear error messages**: Use FieldError to display specific, actionable error messages
- **Multiple errors**: Pass error arrays to `errors` prop for automatic list rendering
- **Timing**: Show errors after user interaction (on blur) or form submission

```tsx
<Field data-invalid={!!errors.email}>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" aria-invalid={!!errors.email} />
  <FieldError errors={[{ message: errors.email }]} />
</Field>
```

### Form Validation Integration

Field works seamlessly with popular validation libraries:

```tsx
// With React Hook Form and Zod
const {
  register,
  formState: { errors },
} = useForm();

<Field data-invalid={!!errors.email}>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" {...register("email")} aria-invalid={!!errors.email} />
  <FieldError errors={errors.email ? [errors.email] : undefined} />
</Field>;
```

### Descriptions and Help Text

- **Use FieldDescription** for helpful context, not instructions
- **Keep it concise**: 1-2 sentences maximum
- **Position correctly**: Always after the input control
- **Link support**: FieldDescription supports links for additional help

```tsx
<Field>
  <FieldLabel>Password</FieldLabel>
  <Input type="password" />
  <FieldDescription>
    Must be at least 8 characters.{" "}
    <a href="/help/passwords">Password requirements</a>
  </FieldDescription>
</Field>
```

### Grouping and Organization

- **Logical sections**: Use FieldSeparator to divide form sections
- **Related fields**: Group with FieldSet for semantic and visual grouping
- **Progressive disclosure**: Show related fields conditionally based on user input

> Always provide visible labels using FieldLabel. Never rely solely on placeholder text for labeling inputs.

> For form validation, use the `errors` prop on FieldError with validation libraries like Zod or Valibot for automatic error message rendering.

## Related Components

- [Input](/docs/components/input) - Text input fields
- [Textarea](/docs/components/textarea) - Multi-line text input
- [Select](/docs/components/select) - Dropdown selections
- [Checkbox](/docs/components/checkbox) - Checkbox controls
- [RadioGroup](/docs/components/radio-group) - Radio button groups
- [Switch](/docs/components/switch) - Toggle switches
- [Label](/docs/components/label) - Standalone labels
- [InputGroup](/docs/components/input-group) - Enhanced inputs with addons
