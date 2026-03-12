# Base UI Patterns

Mindtickle UI uses Base UI primitives for most interactive components. Follow this
file over generic Radix examples whenever they conflict.

## Component Composition Patterns (CRITICAL)

Mindtickle UI interactive primitives use **Base UI** (`@base-ui/react`) composition.
Use the `render` prop for trigger composition.

### Default pattern: Base UI `render` prop

```tsx
<DialogTrigger render={<Button variant="outline" />}>Open dialog</DialogTrigger>

<DropdownMenuTrigger render={<Button variant="ghost" />}>
  Open menu
</DropdownMenuTrigger>

<TooltipTrigger render={<Button size="icon" variant="ghost" />}>
  Hover for details
</TooltipTrigger>
```

### Exception: Drawer uses Vaul `asChild`

```tsx
<DrawerTrigger asChild>
  <Button variant="outline">Open drawer</Button>
</DrawerTrigger>
```

### Common mistake

```tsx
// Wrong: Radix-style pattern on Base UI triggers
<DropdownMenuTrigger asChild>
  <Button>Open menu</Button>
</DropdownMenuTrigger>

// Correct: Base UI pattern
<DropdownMenuTrigger render={<Button />}>Open menu</DropdownMenuTrigger>
```

### Non-button render targets need `nativeButton={false}`

When `render` changes the underlying element to something other than a native
`<button>` (for example `<a>` or `<span>`), add `nativeButton={false}`.

```tsx
// Wrong: Base UI still treats this like a button
<Button render={<a href="/docs" />}>Read docs</Button>

// Correct
<Button render={<a href="/docs" />} nativeButton={false}>
  Read docs
</Button>

// Same rule applies to trigger composition
<PopoverTrigger render={<a href="/filters" />} nativeButton={false}>
  Open filters
</PopoverTrigger>
```

| Component    | Library          | Pattern   | Since  |
| ------------ | ---------------- | --------- | ------ |
| AlertDialog  | `@base-ui/react` | `render`  | v0.1.0 |
| Dialog       | `@base-ui/react` | `render`  | v0.1.0 |
| DropdownMenu | `@base-ui/react` | `render`  | v0.1.0 |
| Sheet        | `@base-ui/react` | `render`  | v0.1.0 |
| Tooltip      | `@base-ui/react` | `render`  | v0.1.0 |
| Popover      | `@base-ui/react` | `render`  | v0.1.0 |
| HoverCard    | `@base-ui/react` | `render`  | v0.1.0 |
| Combobox     | `@base-ui/react` | `render`  | v0.1.0 |
| Drawer       | `vaul`           | `asChild` | v0.1.0 |

### Common Radix/shadcn mistakes (Base UI differences)

These are Radix UI / shadcn props that Base UI **silently ignores**. Using them causes broken behavior without any error.

| Radix / shadcn pattern                  | Base UI equivalent                                        |
| --------------------------------------- | --------------------------------------------------------- |
| `<DropdownMenuItem onSelect={fn}>`      | `<DropdownMenuItem onClick={fn}>`                         |
| `<Accordion type="multiple">`           | `<Accordion multiple>`                                    |
| `<Accordion type="single" collapsible>` | `<Accordion>` (single is default, always collapsible)     |
| `<Accordion defaultValue="item-1">`     | `<Accordion defaultValue={["item-1"]}>` (always an array) |
| `<ToggleGroup type="multiple">`         | `<ToggleGroup multiple>`                                  |
| `<ToggleGroup type="single">`           | `<ToggleGroup>` (single is the default)                   |
| `<Trigger asChild><Button /></Trigger>` | `<Trigger render={<Button />}>` (except Drawer)           |

### Select: Base UI requires `items`

Base UI Select uses an `items` prop on the root component. Mindtickle exports
`SelectPopup` as the main popup primitive and also aliases it as
`SelectContent` for backward compatibility.

```tsx
const frameworks = [
  { label: "Select framework", value: null },
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
];

// Wrong: Radix placeholder pattern
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select framework" />
  </SelectTrigger>
</Select>

// Correct: Base UI pattern
<Select items={frameworks}>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectPopup>
    <SelectGroup>
      {frameworks.map(({ label, value }) => (
        <SelectItem key={String(value)} value={value}>
          {label}
        </SelectItem>
      ))}
    </SelectGroup>
  </SelectPopup>
</Select>
```

### Select placeholder and positioning

- Placeholder items live in the `items` array as `{ label, value: null }`
- Use `alignItemWithTrigger` on `SelectPopup`; do not use Radix's
  `position="popper"`
- Base UI Select also supports `multiple` and object values via
  `itemToStringValue`

```tsx
<SelectPopup alignItemWithTrigger={false} side="bottom" />

<Select
  items={plans}
  itemToStringValue={(plan) => plan.name}
  defaultValue={plans[0]}
>
  <SelectTrigger>
    <SelectValue>{(plan) => plan.name}</SelectValue>
  </SelectTrigger>
</Select>
```

### Slider: single values use scalars

For a single-thumb slider, Base UI uses a number. Arrays are for range values.

```tsx
// Wrong: Radix-style single value
<Slider defaultValue={[50]} max={100} step={1} />

// Correct: Base UI single value
<Slider defaultValue={50} max={100} step={1} />

// Correct: Base UI range value
<Slider defaultValue={[25, 75]} max={100} step={1} />
```

### Controlled ToggleGroup values wrap arrays

When controlling a single-select ToggleGroup from scalar app state, wrap and
unwrap the value so it matches Base UI's primitive contract.

```tsx
const [alignment, setAlignment] = React.useState("center");

<ToggleGroup
  value={[alignment]}
  onValueChange={(next) => {
    const value = next[0];
    if (value) {
      setAlignment(value);
    }
  }}
>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>;
```
