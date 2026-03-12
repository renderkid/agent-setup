# Avatar

Source: `content/docs/components/avatar.mdx`

```tsx
"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/avatar
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
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";
```

```tsx
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="@username" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

## Examples

### Sizes

Avatars come in three sizes: `sm`, `default`, and `lg`.

```tsx
<Avatar size="sm">
  <AvatarImage src="/avatar.jpg" alt="@username" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar size="default">
  <AvatarImage src="/avatar.jpg" alt="@username" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Avatar size="lg">
  <AvatarImage src="/avatar.jpg" alt="@username" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

### With Badge

Add a status badge to indicate online status, notifications, or other states.

```tsx
<Avatar>
  <AvatarImage src="/avatar.jpg" alt="@username" />
  <AvatarFallback>CN</AvatarFallback>
  <AvatarBadge />
</Avatar>
```

### Group

Display multiple avatars together with automatic overlap and spacing.

```tsx
<AvatarGroup>
  <Avatar>
    <AvatarImage src="/avatar1.jpg" alt="User 1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarImage src="/avatar2.jpg" alt="User 2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
</AvatarGroup>
```

## API Reference

### Root

Displays a user's profile picture or initials as a circular image with fallback support.

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| size | `"sm" | "default" | "lg"` | `"default"` | Controls the avatar size. Use sm for compact spaces (24px), default for standard UI (32px), or lg for prominent displays (40px). |

## Accessibility

The Avatar component follows accessibility best practices:

- Always provide `alt` text for `AvatarImage` to describe the user
- `AvatarFallback` should contain meaningful initials or text
- Badges should include `aria-label` when they convey important status information
- Group counts should be announced to screen readers when relevant

## Best Practices

- Use `AvatarImage` when you have a profile picture URL
- Always include `AvatarFallback` as a backup for when images fail to load
- Keep fallback text to 1-2 characters (initials) for best visual appearance
- Use badges sparingly – only for important status indicators
- Group avatars work best with 3-5 visible avatars before showing a count
