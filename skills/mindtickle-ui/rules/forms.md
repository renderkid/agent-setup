# Forms

Mindtickle form UIs should use the Field and InputGroup composition helpers
instead of raw div-based spacing patterns.

## FieldGroup + Field

Use `FieldGroup` and `Field` for labeled controls, descriptions, and error
states.

```tsx
<FieldGroup>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" type="email" />
    <FieldDescription>We'll never share your email.</FieldDescription>
  </Field>
</FieldGroup>
```

Use `orientation="horizontal"` or `orientation="responsive"` for settings
layouts. Use `FieldSet` and `FieldLegend` to group related controls.

## InputGroup composition

Do not place raw `Input` or `Textarea` directly inside `InputGroup`.

```tsx
// Wrong
<InputGroup>
  <Input placeholder="Search..." />
</InputGroup>

// Correct
<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon>
    <Button size="icon">
      <SearchIcon data-icon="inline-start" />
    </Button>
  </InputGroupAddon>
</InputGroup>
```

## Validation states

Apply `data-invalid` or `data-disabled` to the wrapping `Field`. Apply
`aria-invalid` or `disabled` to the actual control.

```tsx
<Field data-invalid>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" aria-invalid />
  <FieldError>Invalid email address.</FieldError>
</Field>
```

## Option-set guidance

- Use `ToggleGroup` for 2-7 dense options
- Use `RadioGroup` for mutually exclusive form selections
- Use `Checkbox` or `Switch` for independent booleans
- Use `Select` for closed option lists and `Combobox` for searchable lists
