# Select

Source: `content/docs/components/select.mdx`

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Mango", value: "mango" },
];

export function SelectDemo() {
  return (
    <Select aria-label="Select a fruit" items={items}>
      <SelectTrigger className="max-w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {items.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

    ```bash npx shadcn@latest add @mindtickle/select ```

      - Install the following dependencies:
      ```bash npm install @base-ui/react ```
      - Copy and paste the following code into your project.
      _Registry source is installed via the Mindtickle shadcn registry._
      - Update the import paths to match your project setup.

## Usage

```tsx
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
```

```tsx
const items = [
  { label: "Select framework", value: null },
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
];

<Select items={items}>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectPopup>
    {items.map(({ label, value }) => (
      <SelectItem key={value} value={value}>
        {label}
      </SelectItem>
    ))}
  </SelectPopup>
</Select>;
```

**Note:** `SelectContent` is available as an alias for `SelectPopup` for backward compatibility.

## Examples

### Default

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Mango", value: "mango" },
];

export function SelectDemo() {
  return (
    <Select aria-label="Select a fruit" items={items}>
      <SelectTrigger className="max-w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {items.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

```

### Sizes

Select supports three trigger sizes: `sm`, `default`, and `lg`.

```tsx
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Select framework", value: null },
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
];

export function SelectSizes() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="small">Small</Label>
        <Select aria-label="Select framework" items={items}>
          <SelectTrigger className="w-[200px]" id="small" size="sm">
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            {items.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="default">Default</Label>
        <Select aria-label="Select framework" items={items}>
          <SelectTrigger className="w-[200px]" id="default">
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            {items.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="large">Large</Label>
        <Select aria-label="Select framework" items={items}>
          <SelectTrigger className="w-[200px]" id="large" size="lg">
            <SelectValue />
          </SelectTrigger>
          <SelectPopup>
            {items.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
      </div>
    </div>
  );
}

```

### With Field

For accessible labeling and validation, prefer using the `Field` component to wrap selects.

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Select your timezone", value: null },
  { label: "Pacific Standard Time (PST)", value: "pst" },
  { label: "Mountain Standard Time (MST)", value: "mst" },
  { label: "Central Standard Time (CST)", value: "cst" },
  { label: "Eastern Standard Time (EST)", value: "est" },
  { label: "Greenwich Mean Time (GMT)", value: "gmt" },
  { label: "Central European Time (CET)", value: "cet" },
];

export function SelectWithField() {
  return (
    <Field className="max-w-64">
      <FieldLabel htmlFor="timezone">Timezone</FieldLabel>
      <Select aria-label="Select timezone" items={items}>
        <SelectTrigger className="w-[280px]" id="timezone">
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          {items.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectPopup>
      </Select>
      <FieldDescription>
        Choose your timezone for accurate scheduling.
      </FieldDescription>
    </Field>
  );
}

```

### With Groups

Organize options into labeled groups with separators.

```tsx
import {
  Select,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectPopup,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const placeholder = [{ label: "Select framework", value: null }];

const frontend = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
];

const backend = [
  { label: "Express", value: "express" },
  { label: "NestJS", value: "nestjs" },
  { label: "Fastify", value: "fastify" },
  { label: "Django", value: "django" },
  { label: "Flask", value: "flask" },
  { label: "Rails", value: "rails" },
];

export function SelectGroups() {
  return (
    <Select
      aria-label="Select framework"
      items={[...placeholder, ...frontend, ...backend]}
    >
      <SelectTrigger className="max-w-64">
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        <SelectGroup>
          <SelectGroupLabel>Frontend</SelectGroupLabel>
          {frontend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectGroupLabel>Backend</SelectGroupLabel>
          {backend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectPopup>
    </Select>
  );
}

```

### With Icons

Add icons to select options for better visual communication.

```tsx
"use client";
import {
  CreditCard,
  DollarSign,
  Landmark,
  Smartphone,
  WalletCards,
} from "lucide-react";

import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Credit Card", value: "card", icon: CreditCard },
  { label: "Bank Transfer", value: "bank", icon: Landmark },
  { label: "PayPal", value: "paypal", icon: DollarSign },
  { label: "Mobile Payment", value: "mobile", icon: Smartphone },
];

export function SelectIcons() {
  return (
    <Select
      aria-label="Select payment method"
      defaultValue={items[0]}
      itemToStringValue={(item) => item.value}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue>
          {(item) => (
            <span className="flex items-center gap-2">
              {item.icon && <item.icon />}
              <span className="truncate">{item.label}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectPopup alignItemWithTrigger={false}>
        {items.map(({ label, value, icon: Icon }) => (
          <SelectItem key={value} value={value}>
            <span className="flex items-center gap-2">
              {Icon && <Icon />}
              <span className="truncate">{label}</span>
            </span>
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}

```

### Disabled States

Selects can be disabled entirely, or individual items can be disabled.

```tsx
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Select a country", value: null },
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
];

export function SelectDisabled() {
  return (
    <div className="space-y-2">
      <Label htmlFor="disabled-select">Country (Disabled)</Label>
      <Select aria-label="Select country" disabled items={items}>
        <SelectTrigger className="w-[280px]" id="disabled-select">
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          {items.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectPopup>
      </Select>
    </div>
  );
}

```

```tsx
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Select a subscription", value: null },
  { label: "Free (Current Plan)", value: "free" },
  { label: "Basic (Coming Soon)", value: "basic", disabled: true },
  { label: "Pro", value: "pro" },
  { label: "Enterprise (Contact Sales)", value: "enterprise", disabled: true },
];

export function SelectDisabledItems() {
  return (
    <Select aria-label="Select subscription" items={items}>
      <SelectTrigger className="w-[280px]">
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        {items.map(({ label, value, disabled }) => (
          <SelectItem key={value} disabled={disabled} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}

```

### Scrollable Content

Long lists of options are automatically scrollable with scroll indicators.

```tsx
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timezones = [
  { label: "Select timezone", value: null },
  { label: "Pacific/Midway", value: "Pacific/Midway" },
  { label: "Pacific/Honolulu", value: "Pacific/Honolulu" },
  { label: "America/Anchorage", value: "America/Anchorage" },
  { label: "America/Los_Angeles", value: "America/Los_Angeles" },
  { label: "America/Denver", value: "America/Denver" },
  { label: "America/Chicago", value: "America/Chicago" },
  { label: "America/New_York", value: "America/New_York" },
  { label: "America/Caracas", value: "America/Caracas" },
  { label: "America/Santiago", value: "America/Santiago" },
  { label: "America/Sao_Paulo", value: "America/Sao_Paulo" },
  { label: "Atlantic/Azores", value: "Atlantic/Azores" },
  { label: "Europe/London", value: "Europe/London" },
  { label: "Europe/Paris", value: "Europe/Paris" },
  { label: "Europe/Istanbul", value: "Europe/Istanbul" },
  { label: "Asia/Dubai", value: "Asia/Dubai" },
  { label: "Asia/Karachi", value: "Asia/Karachi" },
  { label: "Asia/Kolkata", value: "Asia/Kolkata" },
  { label: "Asia/Bangkok", value: "Asia/Bangkok" },
  { label: "Asia/Hong_Kong", value: "Asia/Hong_Kong" },
  { label: "Asia/Tokyo", value: "Asia/Tokyo" },
  { label: "Australia/Sydney", value: "Australia/Sydney" },
  { label: "Pacific/Auckland", value: "Pacific/Auckland" },
];

export function SelectScrollable() {
  return (
    <Select aria-label="Select timezone" items={timezones}>
      <SelectTrigger className="w-[280px]">
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        {timezones.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label.replaceAll("_", " ")}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}

```

## API Reference

### Root

Allows users to choose a single value from a list of options in a dropdown.

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| value | `string` | - | Controlled value of the selected option. Use with onValueChange for controlled select behavior. |
| defaultValue | `string` | - | Initial selected value for uncontrolled select. |
| onValueChange | `(value: string) => void` | - | Callback fired when the selected value changes. |
| open | `boolean` | - | Controlled open state of the dropdown. |
| defaultOpen | `boolean` | `false` | Initial open state for uncontrolled dropdown. |
| onOpenChange | `(open: boolean) => void` | - | Callback fired when the dropdown's open state changes. |
| disabled | `boolean` | `false` | Disables the select when true, preventing user interaction. |
| required | `boolean` | `false` | Marks the select as required for form validation. |

### SelectTrigger

The button that opens the select dropdown and displays the selected value.

### SelectValue

Displays the currently selected value or placeholder text within the trigger.

**SelectValue Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| placeholder | `string` | - | Text to display when no value is selected. |

### SelectPopup

The dropdown panel containing the list of options.

**SelectPopup Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| side | `"top" | "right" | "bottom" | "left"` | `"bottom"` | The preferred side where the dropdown should appear relative to the trigger. |
| sideOffset | `number` | `4` | Distance in pixels between the dropdown and the trigger element. |
| align | `"start" | "center" | "end"` | `"start"` | Alignment of the dropdown relative to the trigger. Use start for left alignment, center for centered positioning, or end for right alignment. |

### SelectGroup

Groups related options together with an optional label.

### SelectGroupLabel

A label for a group of options within the select dropdown.

### SelectSeparator

A visual divider between option groups or sections.

## Accessibility

The Select component follows accessibility best practices:

- **Keyboard Navigation**: Full keyboard support for opening, navigating, and selecting options
- **ARIA Attributes**: Proper ARIA roles and attributes for screen readers
- **Focus Management**: Clear focus indicators and focus trapping within dropdown
- **Label Association**: Works with Label components for proper form labeling
- **Disabled States**: Properly communicates disabled state to assistive technologies
- **Required Fields**: Supports required attribute for form validation
- **Screen Reader Announcements**: Selected values and changes are announced

### Keyboard Navigation

- `Space` / `Enter` - Opens the select dropdown when trigger is focused
- `Arrow Down` / `Arrow Up` - Navigate through options
- `Home` / `End` - Jump to first/last option
- `Escape` - Closes the dropdown
- `Tab` - Moves focus to next focusable element (closes dropdown)
- `Type to search` - Filter options by typing

## Best Practices

### Labeling

- Always provide visible labels using the Label component
- Connect labels to selects using proper `htmlFor` and `id` attributes
- Use descriptive labels that clearly indicate what is being selected
- Provide helpful placeholder text in SelectValue

```tsx
// Good: Proper labeling
<Label htmlFor="country">Country</Label>
<Select>
  <SelectTrigger id="country">
    <SelectValue placeholder="Select a country" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="us">United States</SelectItem>
    <SelectItem value="uk">United Kingdom</SelectItem>
  </SelectContent>
</Select>

// Bad: Missing label
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Country" />
  </SelectTrigger>
  <SelectContent>...</SelectContent>
</Select>
```

### Option Organization

- **Logical ordering**: Alphabetical, by frequency, or by category
- **Group related options**: Use SelectGroup and SelectLabel for categorization
- **Limit options**: Consider search functionality for lists > 10-15 items
- **Separators**: Use SelectSeparator to divide distinct groups

```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select region" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="us">United States</SelectItem>
      <SelectItem value="ca">Canada</SelectItem>
      <SelectItem value="mx">Mexico</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="uk">United Kingdom</SelectItem>
      <SelectItem value="de">Germany</SelectItem>
      <SelectItem value="fr">France</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
```

### Value Management

- **Controlled**: Use `value` and `onValueChange` for controlled selects
- **Uncontrolled**: Use `defaultValue` for uncontrolled selects
- **Items prop**: Use `items` prop for declarative option management
- **Object values**: Use `itemToStringValue` to convert objects to strings
- **Multiple selection**: Enable `multiple` prop for array values
- **Clear values**: Provide option to clear selection when appropriate
- **Form integration**: Use `name` prop for form submissions

```tsx
// With items prop
const items = [
  { label: "Select framework", value: null },
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
];

<Select items={items}>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectPopup>
    {items.map(({ label, value }) => (
      <SelectItem key={value} value={value}>
        {label}
      </SelectItem>
    ))}
  </SelectPopup>
</Select>

// Controlled
const [value, setValue] = useState("");

<Select value={value} onValueChange={setValue} items={items}>
  ...
</Select>

// Multiple selection
<Select multiple defaultValue={["js", "ts"]}>
  ...
</Select>

// Object values
const items = [{ label: "Next.js", value: "next", description: "..." }];

<Select
  items={items}
  itemToStringValue={(item) => item.value}
  defaultValue={items[0]}
>
  ...
</Select>
```

### Sizing

- **Default size**: Use for standard form fields
- **Small size**: Use in compact UIs, tables, or toolbars
- **Large size**: Use for prominent selections or hero sections
- **Consistent sizing**: Match size with other form controls in the same context

```tsx
// Small size for compact layouts
<SelectTrigger size="sm">
  <SelectValue />
</SelectTrigger>

// Default size for forms
<SelectTrigger>
  <SelectValue />
</SelectTrigger>

// Large size for prominent selections
<SelectTrigger size="lg">
  <SelectValue />
</SelectTrigger>
```

### With Icons

Enhance options with icons for better scannability:

```tsx
<SelectItem value="card">
  <CreditCard className="mr-2" />
  Credit Card
</SelectItem>
```

### Validation and Errors

- Use `aria-invalid` for validation states
- Show error messages using FieldError component
- Validate on change or blur based on UX requirements

```tsx
<Field data-invalid={!!error}>
  <FieldLabel htmlFor="country">Country</FieldLabel>
  <Select>
    <SelectTrigger aria-invalid={!!error} id="country">
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent>...</SelectContent>
  </Select>
  <FieldError>{error}</FieldError>
</Field>
```

### Combining with Field

For complete form fields with labels, descriptions, and errors:

```tsx
<Field>
  <FieldLabel htmlFor="role">Role</FieldLabel>
  <Select>
    <SelectTrigger id="role">
      <SelectValue placeholder="Select a role" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="admin">Administrator</SelectItem>
      <SelectItem value="editor">Editor</SelectItem>
      <SelectItem value="viewer">Viewer</SelectItem>
    </SelectContent>
  </Select>
  <FieldDescription>Choose the user's permission level.</FieldDescription>
</Field>
```

### Long Lists

For selects with many options:

- Consider search/filter functionality
- Use virtualization for very long lists (100+ items)
- Group options logically
- Show scroll indicators (built-in)

> Avoid using Select for very long lists (50+ items) without search functionality. Consider using a Combobox component instead.

> The Select component automatically positions the dropdown to stay within the viewport and includes scroll buttons for long option lists.

## Related Components

- [Field](/docs/components/field) - For structured form fields with labels and descriptions
- [Label](/docs/components/label) - For accessible select labeling
- [Input](/docs/components/input) - For text input fields
- [Textarea](/docs/components/textarea) - For multi-line text input
- [Checkbox](/docs/components/checkbox) - For multiple selection
- [RadioGroup](/docs/components/radio-group) - For mutually exclusive options
- [Combobox](/docs/components/combobox) - For searchable selects
