# Composition

Prefer Mindtickle's existing blocks and composition primitives over custom
markup. Compose screens from shared building blocks instead of recreating them
with plain divs.

## Existing blocks first

- Use `MainNav` for app sidebars
- Use `GlobalHeader` for authenticated top-level headers
- Use `PageHeader` for page titles, breadcrumbs, metadata, thumbnails, and tabs
- Use `ButtonGroup` for grouped actions
- Use `Kbd` for keyboard shortcut UI
- Use `AssistedInput` for AI prompt input experiences

## Grouped items stay inside group containers

```tsx
// Wrong
<SelectPopup>
  <SelectItem value="apple">Apple</SelectItem>
</SelectPopup>

// Correct
<SelectPopup>
  <SelectGroup>
    <SelectItem value="apple">Apple</SelectItem>
  </SelectGroup>
</SelectPopup>
```

The same rule applies to `DropdownMenuGroup`, `MenubarGroup`,
`ContextMenuGroup`, and `CommandGroup`.

## Overlays need titles

Always include a title in `Dialog`, `Sheet`, `Drawer`, and
`AlertDialog`. Use `className="sr-only"` when the title should be visually
hidden.

## Use full Card composition

Prefer `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and
`CardFooter` over dumping everything into one container.

## Use shared feedback components

- `Alert` for callouts
- `Empty` for empty states
- `Separator` instead of `<hr>`
- `Skeleton` for loading placeholders
- `Badge` for inline status chips
- `toast()` from `sonner` for toast notifications

## Button loading state is composed

There is no `isLoading` or `isPending` prop on `Button`. Compose loading
state with `Spinner`, `data-icon`, and `disabled`.
