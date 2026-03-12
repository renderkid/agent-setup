# Resizable

Source: `content/docs/components/resizable.mdx`

```tsx
"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/resizable
```

- Install the following dependencies:

```bash
npm install react-resizable-panels
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
```

```tsx
<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>Panel One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Panel Two</ResizablePanel>
</ResizablePanelGroup>
```

## API Reference

### ResizableHandle

## Best Practices

### Set Default Sizes

Provide `defaultSize` to panels for predictable initial layouts.

```tsx
<ResizablePanel defaultSize={60}>Main content</ResizablePanel>
```

### Use Min/Max Constraints

Prevent panels from becoming unusable with `minSize` and `maxSize` props.

```tsx
<ResizablePanel minSize={20} maxSize={80}>
  Sidebar
</ResizablePanel>
```

### Add Visual Handles

Use `withHandle` prop to show a visible drag handle.

```tsx
<ResizableHandle withHandle />
```

### Direction Matters

Choose `direction="horizontal"` or `direction="vertical"` based on your layout needs.

## Related Components

- [Separator](/docs/components/separator) - For static divisions
- [Scroll Area](/docs/components/scroll-area) - Often used within panels
