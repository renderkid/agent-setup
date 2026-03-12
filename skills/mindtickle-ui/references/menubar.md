# Menubar

Source: `content/docs/components/menubar.mdx`

```tsx
"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Toggle Sidebar</MenubarItem>
          <MenubarItem>Toggle Fullscreen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/menubar
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
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
```

```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New File</MenubarItem>
      <MenubarItem>Save</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

## API Reference

### Root

## Accessibility

The Menubar component follows WAI-ARIA menubar guidelines:

- Arrow keys navigate between menus
- Up/Down navigate within menus
- Escape closes open menu
- Home/End jump to first/last menu

### Keyboard Navigation

- `Arrow Left/Right` - Navigate between top-level menus
- `Arrow Down/Up` - Navigate menu items
- `Enter/Space` - Activates items
- `Escape` - Closes menu
- `Home/End` - First/last menu

## Best Practices

### Use for Application-Level Actions

Menubars work best for desktop apps with traditional menu structures (File, Edit, View, etc.).

### Group Logically

Organize commands into logical menu categories (File, Edit, View, Help).

### Show Keyboard Shortcuts

Display keyboard shortcuts using `MenubarShortcut` to educate users.

```tsx
<MenubarItem>
  Save <MenubarShortcut>⌘S</MenubarShortcut>
</MenubarItem>
```

### Keep Menus Short

Limit items per menu to reduce cognitive load. Use submenus for related commands.

### Mobile Considerations

Menubars are designed for desktop. On mobile, consider using a drawer or hamburger menu instead.

## Related Components

- [Dropdown Menu](/docs/components/dropdown-menu) - For action menus
- [Context Menu](/docs/components/context-menu) - For right-click menus
