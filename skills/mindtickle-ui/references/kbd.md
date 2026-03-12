# Kbd

Source: `content/docs/components/kbd.mdx`

```tsx
import { Kbd } from "@/components/ui/kbd";

export function KbdDemo() {
  return (
    <div className="text-sm">
      Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette
    </div>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/kbd
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import { Kbd } from "@/components/ui/kbd";
```

```tsx
<Kbd>⌘</Kbd>
```

## Examples

### Keyboard Shortcut Groups

Use `KbdGroup` to visually connect related keys in a shortcut combination.

```tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export function KbdGroupDemo() {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <div>
        Save changes:{" "}
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <span>+</span>
          <Kbd>S</Kbd>
        </KbdGroup>
      </div>
      <div>
        Open file:{" "}
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <span>+</span>
          <Kbd>O</Kbd>
        </KbdGroup>
      </div>
      <div>
        Close window:{" "}
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <span>+</span>
          <Kbd>W</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
}

```

## API Reference

### Root

## Best Practices

### Use Semantic HTML

The component renders as `<kbd>`, which is the semantic HTML element for keyboard input.

### Platform-Specific Symbols

Use appropriate symbols for different platforms:

- **macOS**: `⌘` (Command), `⌥` (Option), `⌃` (Control), `⇧` (Shift)
- **Windows/Linux**: `Ctrl`, `Alt`, `Shift`, `Win`

Consider detecting the user's platform and showing the appropriate keys:

```tsx
const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

<div>
  Save: <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd> <Kbd>S</Kbd>
</div>;
```

### Separate Keys with Plain Text

When showing key combinations, separate individual keys with plain text (like "+") rather than nesting them:

```tsx
// ✅ Good
<KbdGroup>
  <Kbd>⌘</Kbd>
  <span>+</span>
  <Kbd>K</Kbd>
</KbdGroup>

// ❌ Bad - confusing hierarchy
<Kbd>
  ⌘ + K
</Kbd>
```

### Context is Key

Kbd elements should appear inline with descriptive text that explains what the shortcut does.

```tsx
// ✅ Good - clear context
<div>
  Press <Kbd>?</Kbd> to view keyboard shortcuts
</div>

// ❌ Bad - no context
<Kbd>?</Kbd>
```

## Related Components

- [Tooltip](/docs/components/tooltip) - Often paired with kbd to show shortcuts on hover
