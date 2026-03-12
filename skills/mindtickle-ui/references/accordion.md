# Accordion

Source: `content/docs/components/accordion.mdx`

```tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/accordion
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
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
```

```tsx
<Accordion>
  <AccordionItem>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Examples

### Multiple Items

Accordions can contain multiple collapsible items. Only one item can be open at a time by default.

```tsx
<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that match the other components.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

### Allow Multiple

Use the `multiple` prop to allow multiple items to be open simultaneously.

```tsx
<Accordion multiple>
  <AccordionItem value="item-1">
    <AccordionTrigger>Item 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Item 2</AccordionTrigger>
    <AccordionContent>Content 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

## API Reference

### Root

A vertically stacked set of interactive headings that each reveal a section of content.

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| multiple | `boolean` | `false` | Allow multiple items to be open simultaneously. When false, opening one item closes others. |
| defaultValue | `string | string[]` | - | The value(s) of the item(s) that should be open by default. Use an array when multiple is true. |
| value | `string | string[]` | - | Controlled value of the open item(s). Use with onValueChange to create a controlled accordion. |
| onValueChange | `(value: string | string[]) => void` | - | Callback fired when the open state changes. Receives the new value(s). |

## Accessibility

The Accordion component follows WAI-ARIA guidelines:

- Uses semantic HTML with proper ARIA attributes
- Supports keyboard navigation (Arrow keys, Home, End)
- Manages focus automatically when items expand/collapse
- Announces state changes to screen readers

### Keyboard Navigation

- `ArrowDown` / `ArrowUp` - Navigate between items
- `Home` / `End` - Jump to first/last item
- `Space` or `Enter` - Toggle the focused item

## Best Practices

- Use accordions for content that can be grouped into related sections
- Keep item titles concise and descriptive
- Avoid nesting accordions inside accordions
- Consider using `multiple` when users need to compare content across items
