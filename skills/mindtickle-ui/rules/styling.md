# Styling

Use Mindtickle UI's semantic tokens and built-in variants before writing custom
styling. Mindtickle aligns with shadcn token names, but extends them with
`*-muted` surface tokens for softer backgrounds and callouts.

## Semantic tokens first

Use semantic classes such as `bg-background`, `text-foreground`,
`text-muted-foreground`, `bg-accent`, and `text-destructive`. Do not reach
for raw Tailwind colors like `bg-blue-500` or `text-red-600`.

```tsx
// Wrong
<div className="bg-blue-500 text-white" />

// Correct
<div className="bg-primary text-primary-foreground" />
```

## Use `*-muted` for subtle surfaces

Use vivid semantic tokens for actions and strong emphasis. Use `*-muted` for
soft fills, hover states, and low-emphasis callouts.

```tsx
// Strong action
<Button color="destructive">Delete</Button>

// Soft status surface
<Alert className="bg-destructive-muted text-destructive-muted-foreground" />
```

## Built-in variants before custom classes

Prefer component variants like `outline`, `ghost`, `soft`, and `surface`
over hand-authored borders and backgrounds.

```tsx
// Wrong
<Button className="border border-input bg-transparent hover:bg-accent-muted">
  Cancel
</Button>

// Correct
<Button variant="outline">Cancel</Button>
```

## className is for layout, not theme overrides

Use `className` for layout concerns like width, margin, and flex behavior. Do
not use it to override colors or typography that should come from tokens,
variants, or shared CSS variables.

## Tailwind conventions

- Use `gap-*` instead of `space-x-*` or `space-y-*`
- Use `size-*` when width and height are equal
- Use `truncate` instead of composing overflow utility triplets
- Use `cn()` for conditional classes
- Avoid manual `dark:` color overrides when a semantic token already exists
- Do not add custom z-index values to overlay primitives like Dialog, Sheet,
  DropdownMenu, Popover, Tooltip, or HoverCard
