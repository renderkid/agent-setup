# Breadcrumb

Source: `content/docs/components/breadcrumb.mdx`

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Components</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/breadcrumb
```

- Install the following dependencies:

```bash
npm install @base-ui/react lucide-react
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
```

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## API Reference

### Root

## Accessibility

The Breadcrumb component follows WAI-ARIA guidelines:

- Uses semantic `<nav>` with `aria-label="breadcrumb"`
- Current page marked with `aria-current="page"`
- Links properly structured in an ordered list
- Keyboard navigable via Tab key

## Best Practices

### Show the Full Path

Breadcrumbs should reflect the actual site hierarchy, not the user's navigation history.

```tsx
// ✅ Good - shows hierarchy
Home > Products > Electronics > Laptops

// ❌ Bad - shows history
Search > Product Details > Cart > Product Details
```

### Keep Labels Concise

Use short, clear labels that fit on one line.

```tsx
// ✅ Good
<BreadcrumbPage>Components</BreadcrumbPage>

// ❌ Bad - too verbose
<BreadcrumbPage>Component Documentation and Examples</BreadcrumbPage>
```

### Current Page is Not a Link

The final breadcrumb item should not be clickable since it represents the current page.

### Collapse Long Paths

For deep hierarchies, consider using `BreadcrumbEllipsis` to collapse middle items.

## Related Components

- [Pagination](/docs/components/pagination) - For page navigation
- [Tabs](/docs/components/tabs) - For section switching
