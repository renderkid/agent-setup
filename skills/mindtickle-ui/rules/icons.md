# Icons

Mindtickle uses two icon patterns:

1. Product and navigation icons use the shared `Icon` component.
2. General UI action icons should follow the project's configured icon library.

## Use `Icon` for Mindtickle product metaphors

Use `Icon` when the design calls for Mindtickle's custom icon set such as
`gear`, `users`, or `chart-simple`.

```tsx
<Icon name="gear" />
<Icon name="users" variant="solid" size="lg" color="accent" />
```

Meaningful icons should receive a `label`. Decorative icons should omit it so
they render with `aria-hidden`.

## Icons inside components use `data-icon`

Buttons and related controls expect icon placement via `data-icon`.

```tsx
<Button>
  <SearchIcon data-icon="inline-start" />
  Search
</Button>
```

## No icon sizing classes inside shared components

Do not add `size-4`, `w-4 h-4`, or margin utilities to icons inside Button,
DropdownMenuItem, Alert, navigation items, or similar shared components unless
the user explicitly wants a custom size.

## Pass icon components, not string keys

When a custom component accepts an icon prop, pass the icon component itself
instead of a string lookup key.
