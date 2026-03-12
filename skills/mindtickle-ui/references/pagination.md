# Pagination

Source: `content/docs/components/pagination.mdx`

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/pagination
```

- Install the following dependencies:

```bash
npm install lucide-react
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
```

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## API Reference

### Root

## Accessibility

The Pagination component follows accessibility best practices:

- Uses semantic `<nav>` with `aria-label="pagination"`
- Current page marked with `isActive` and appropriate ARIA attributes
- Keyboard navigable via Tab and Enter
- Disabled states properly communicated

## Best Practices

### Show Current Page

Always indicate which page is currently active using the `isActive` prop.

### Use Ellipsis for Long Ranges

For pagination with many pages, use `PaginationEllipsis` to collapse middle pages.

### Disable at Boundaries

Disable Previous on the first page and Next on the last page to prevent invalid navigation.

```tsx
<PaginationPrevious
  href={currentPage > 1 ? `/page/${currentPage - 1}` : undefined}
  aria-disabled={currentPage === 1}
/>
```

## Related Components

- [Breadcrumb](/docs/components/breadcrumb) - For hierarchical navigation
- [Table](/docs/components/table) - Often paired with pagination
