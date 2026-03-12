# Input Group

Source: `content/docs/components/input-group.mdx`

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export function InputGroupDemo() {
  return (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="Username" />
    </InputGroup>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

    ```bash npx shadcn@latest add @mindtickle/input-group ```

      - Install the following dependencies:
      ```bash npm install class-variance-authority ```
      - Copy and paste the following code into your project.
      _Registry source is installed via the Mindtickle shadcn registry._
      - Update the import paths to match your project setup.

## Usage

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
  InputGroupText,
} from "@/components/ui/input-group";
```

```tsx
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>@</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="Username" />
</InputGroup>
```

## Examples

### With Icons

#### Leading Icon

Add icons at the start of inputs for better visual communication.

```tsx
import { Mail, Search, User } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export function InputGroupIconLeading() {
  return (
    <div className="space-y-4 max-w-sm w-full">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <Search />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <Mail />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Email address" type="email" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <User />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Username" />
      </InputGroup>
    </div>
  );
}

```

#### Trailing Icon

Place icons at the end of inputs for status indicators or actions.

```tsx
import { AlertCircle, Check, Info } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export function InputGroupIconTrailing() {
  return (
    <div className="space-y-4 max-w-sm w-full">
      <InputGroup>
        <InputGroupInput placeholder="Valid input" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>
            <Check className="text-success-muted-foreground" />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Invalid input" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>
            <AlertCircle className="text-destructive-muted-foreground" />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Info input" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>
            <Info className="text-info-muted-foreground" />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

```

#### Both Sides

Combine icons on both sides for comprehensive input enhancement.

```tsx
import { Check, DollarSign, Mail, Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export function InputGroupIconBoth() {
  return (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <Search />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Search products..." />
        <InputGroupAddon align="inline-end">
          <InputGroupText>⌘K</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <Mail />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Email address" type="email" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>
            <Check className="text-success" />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <DollarSign />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" type="number" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

```

### With Text Addons

#### URL Input

Add protocol prefixes and domain suffixes for URL inputs.

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export function InputGroupUrl() {
  return (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="www.example.com" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="example" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="www.example.com" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>/page</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

```

#### Price Input

Display currency symbols and units for monetary inputs.

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export function InputGroupPrice() {
  return (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" type="number" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="100" type="number" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>€</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" type="number" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>EUR</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

```

#### Email Domain

Provide domain suggestions or fixed email domains.

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export function InputGroupEmail() {
  return (
    <div className="space-y-4">
      <InputGroup>
        <InputGroupInput placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

```

### With Buttons

#### Search Input

Combine input with a search button for search functionality.

```tsx
import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupSearch() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="sm">
          <Search />
          Search
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

```

#### Copy to Clipboard

Add a copy button to easily duplicate input content.

```tsx
"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupCopy() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("sk_test_1234567890abcdef");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <InputGroup>
      <InputGroupInput readOnly value="sk_test_1234567890abcdef" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label="Copy to clipboard"
          onClick={handleCopy}
          size="icon-xs"
        >
          {copied ? <Check /> : <Copy />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

```

#### Password Toggle

Show/hide password with a toggle button.

```tsx
"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <InputGroupInput
        placeholder="Enter password"
        type={showPassword ? "text" : "password"}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => setShowPassword(!showPassword)}
          size="icon-xs"
        >
          {showPassword ? <EyeOff /> : <Eye />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

```

#### Clear Button

Add a clear button to quickly reset input values.

```tsx
"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export function InputGroupClear() {
  const [value, setValue] = useState("");

  return (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <InputGroupText>
          <Search />
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        value={value}
      />
      {value && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="Clear input"
            onClick={() => setValue("")}
            size="icon-xs"
          >
            <X />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  );
}

```

### With Textarea

#### Top Addon

Add addons at the top of textarea elements.

```tsx
import { FileText } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
  InputGroupText,
} from "@/components/ui/input-group";

export function InputGroupTextareaTop() {
  return (
    <InputGroup>
      <InputGroupAddon align="block-start">
        <InputGroupText>
          <FileText />
        </InputGroupText>
        <InputGroupText>Description</InputGroupText>
      </InputGroupAddon>
      <InputGroupTextarea
        placeholder="Enter a detailed description..."
        rows={4}
      />
    </InputGroup>
  );
}

```

#### Bottom Addon

Place action buttons at the bottom of textareas.

```tsx
import { ArrowUp } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
  InputGroupButton,
} from "@/components/ui/input-group";

export function InputGroupTextareaBottom() {
  return (
    <InputGroup>
      <InputGroupTextarea placeholder="Write a message..." rows={4} />
      <InputGroupAddon align="block-end">
        <InputGroupButton
          className="ml-auto"
          aria-label="Send message"
          size="sm"
          color="accent"
          variant="soft"
        >
          Send
          <ArrowUp />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

```

#### With Multiple Actions

Combine multiple buttons and dropdowns with textareas.

```tsx
import { ArrowUp, ChevronDown, Paperclip, Smile } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

export function InputGroupTextareaActions() {
  return (
    <InputGroup>
      <InputGroupTextarea placeholder="Compose your message..." rows={5} />
      <InputGroupAddon align="block-end">
        <InputGroupButton aria-label="Add emoji" size="icon-sm">
          <Smile />
        </InputGroupButton>
        <InputGroupButton aria-label="Attach file" size="icon-sm">
          <Paperclip />
        </InputGroupButton>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton size="sm">
              <ChevronDown />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Save Draft</DropdownMenuItem>
            <DropdownMenuItem>Schedule</DropdownMenuItem>
            <DropdownMenuItem>Preview</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <InputGroupButton
          size="sm"
          className="ml-auto"
          color="accent"
          variant="soft"
          aria-label="Send message"
        >
          Send
          <ArrowUp />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

```

### With Dropdown

Integrate dropdown menus for additional options or filters.

```tsx
import { ChevronDown, Search } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupDropdown() {
  return (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton size="sm">
              All
              <ChevronDown />
            </InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>All Categories</DropdownMenuItem>
            <DropdownMenuItem>Products</DropdownMenuItem>
            <DropdownMenuItem>Services</DropdownMenuItem>
            <DropdownMenuItem>Documentation</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-sm">
          <Search />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

```

### With Tooltips

Add informational tooltips to provide context or help.

```tsx
import { HelpCircle } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function InputGroupTooltip() {
  return (
    <TooltipProvider>
      <InputGroup>
        <InputGroupInput placeholder="Enter your password" type="password" />
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                aria-label="Password requirements"
                size="icon-xs"
              >
                <HelpCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-medium">Password requirements:</p>
              <ul className="mt-2 list-inside list-disc text-sm">
                <li>At least 8 characters</li>
                <li>One uppercase letter</li>
                <li>One number</li>
                <li>One special character</li>
              </ul>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </TooltipProvider>
  );
}

```

### Loading State

Show loading indicators for async operations.

```tsx
import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

export function InputGroupLoading() {
  return (
    <div className="space-y-4 max-w-sm w-full">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>
            <Search />
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupInput disabled placeholder="Searching..." />
        <InputGroupAddon align="inline-end">
          <InputGroupText>
            <Spinner />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput disabled placeholder="Processing..." />
        <InputGroupAddon align="inline-end">
          <InputGroupText>
            <Spinner />
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

```

### Validation States

Display validation status with icons and colors.

```tsx
import { AlertCircle, Check } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

export function InputGroupValidation() {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <InputGroup>
          <InputGroupInput
            className="border-success-muted focus-visible:ring-success-muted/50"
            defaultValue="john.doe@example.com"
            type="email"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>
              <Check className="text-success" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <p className="text-success text-sm">Email is valid</p>
      </div>
      <div className="space-y-1.5">
        <InputGroup>
          <InputGroupInput
            aria-invalid="true"
            defaultValue="invalid-email"
            type="email"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>
              <AlertCircle className="text-destructive" />
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <p className="text-destructive text-sm">
          Please enter a valid email address
        </p>
      </div>
    </div>
  );
}

```

## API Reference

### Root

Groups an input with addons, buttons, or text for enhanced form controls.

**Root Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| align | `"inline-start" | "inline-end" | "block-start" | "block-end"` | `"inline-start"` | - |
| size | `"xs" | "sm" | "icon-xs" | "icon-sm"` | `"xs"` | - |

### Addon

Container for buttons or controls positioned at either end of the input group.

**Addon Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| align | `"start" | "end" | "block-start" | "block-end"` | `"end"` | Position of the addon. Use start for left/top, end for right/bottom, block-start for top of textarea, or block-end for bottom of textarea. |

### Button

A button styled to integrate seamlessly within an input group.

### Input

Single-line input field styled to work within an input group.

### Text

Text or icon content for displaying static information within the input group.

### Textarea

Multi-line textarea styled to work within an input group.

### InputGroupText

Text or icon content for displaying static information.

| Prop        | Type        | Default |
| ----------- | ----------- | ------- |
| `children`  | `ReactNode` | -       |
| `className` | `string`    | -       |

<div className="mt-4 leading-relaxed text-sm text-muted-foreground">
  All components forward their native HTML attributes to the underlying
  elements.
</div>

## Accessibility

The InputGroup component follows accessibility best practices:

- **Focus Management**: Maintains proper focus behavior for nested controls
- **Keyboard Accessible**: All interactive elements are keyboard accessible
- **ARIA Attributes**: Supports all standard ARIA attributes on inputs
- **Role Attributes**: InputGroup has `role="group"` for semantic grouping
- **Label Association**: Works with Field and Label components for proper labeling
- **Button Labels**: Icon-only buttons should include `aria-label` for screen readers

### Keyboard Navigation

- `Tab` - Moves focus to the input or next interactive element
- `Shift + Tab` - Moves focus to the previous element
- `Enter` - Activates buttons within the group
- `Space` - Activates buttons when focused
- All standard input keyboard shortcuts apply to the input element

## Best Practices

### Addon Alignment

- **inline-start / inline-end**: For regular inputs with horizontal addons
- **block-start / block-end**: For textarea elements with vertical addons
- Place addons after the input element in the DOM for proper focus order

```tsx
// Good: Addon after input for proper tab order
<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">
    <InputGroupButton>Search</InputGroupButton>
  </InputGroupAddon>
</InputGroup>

// Avoid: Addon before input (unless visually starting)
<InputGroup>
  <InputGroupAddon align="inline-end">
    <InputGroupButton>Search</InputGroupButton>
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>
```

### Icon Usage

- **Leading icons**: Use for input type indicators (search, email, lock)
- **Trailing icons**: Use for status indicators (check, error, loading)
- **Icon size**: InputGroupText automatically sizes icons to 16px (size-4)
- **Icon clarity**: Choose clear, recognizable icons from a consistent set

```tsx
import { Search, Mail, Lock, Check, AlertCircle } from "lucide-react";

// Search input with icon
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>
      <Search />
    </InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>;
```

### Button Guidelines

- **Size selection**: Use `xs` for compact inputs, `sm` for standard inputs
- **Icon-only buttons**: Use `icon-xs` or `icon-sm` sizes with `aria-label`
- **Action clarity**: Button actions should be obvious from icon or text
- **Loading states**: Disable buttons and show loading indicator during async operations

```tsx
// Copy button with proper aria-label
<InputGroupButton size="icon-xs" aria-label="Copy to clipboard">
  <Copy />
</InputGroupButton>

// Action button with text
<InputGroupButton size="sm">
  <Search />
  Search
</InputGroupButton>
```

### Text Addons

- **Prefix usage**: Protocol (https://), currency ($, €), username (@)
- **Suffix usage**: Domain (.com), units (USD, kg, m), file extensions
- **Keep it short**: 1-4 characters maximum for text addons
- **Muted styling**: Text addons automatically use muted colors

```tsx
// Good: Short, clear prefixes
<InputGroupText>$</InputGroupText>
<InputGroupText>https://</InputGroupText>
<InputGroupText>@</InputGroupText>

// Avoid: Long text in addons
<InputGroupText>Price in dollars:</InputGroupText>
```

### Combining with Field

Wrap InputGroup with Field components for complete form controls:

```tsx
<Field>
  <FieldLabel htmlFor="search">Search Query</FieldLabel>
  <InputGroup>
    <InputGroupAddon align="inline-start">
      <InputGroupText>
        <Search />
      </InputGroupText>
    </InputGroupAddon>
    <InputGroupInput id="search" placeholder="Type to search..." />
    <InputGroupAddon align="inline-end">
      <InputGroupButton size="sm">Search</InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
  <FieldDescription>Enter keywords to search through content.</FieldDescription>
</Field>
```

### Validation and Error States

- **Error indication**: Set `aria-invalid="true"` on InputGroupInput
- **Error messages**: Use FieldError outside of InputGroup
- **Visual feedback**: Use icons in addons to show validation status
- **State management**: Coordinate validation states between Field and InputGroup

```tsx
<Field data-invalid={!!error}>
  <FieldLabel>Email</FieldLabel>
  <InputGroup>
    <InputGroupInput type="email" aria-invalid={!!error} />
    <InputGroupAddon align="inline-end">
      <InputGroupText>{error ? <AlertCircle /> : <Check />}</InputGroupText>
    </InputGroupAddon>
  </InputGroup>
  <FieldError>{error}</FieldError>
</Field>
```

### Multiple Addons

You can include multiple elements within a single addon:

```tsx
<InputGroupAddon align="inline-end">
  <InputGroupButton size="icon-xs" aria-label="Show help">
    <HelpCircle />
  </InputGroupButton>
  <InputGroupButton size="icon-xs" aria-label="Clear input">
    <X />
  </InputGroupButton>
</InputGroupAddon>
```

### Responsive Considerations

- InputGroup automatically handles focus states and borders
- Test on mobile devices for touch target sizes
- Ensure buttons are at least 44x44px for touch accessibility
- Consider stacking addons vertically on very small screens

> Place InputGroupAddon elements after the input control in the DOM for proper keyboard navigation order, even when visually positioned at the start.

> For textareas, use <code>block-start</code> or <code>block-end</code> alignment. For regular inputs, use <code>inline-start</code> or <code>inline-end</code>.

## Related Components

- [Input](/docs/components/input) - Base input component
- [Textarea](/docs/components/textarea) - Multi-line text input
- [Field](/docs/components/field) - Form field composition
- [Button](/docs/components/button) - Button component used in addons
- [Label](/docs/components/label) - Input labeling
- [Tooltip](/docs/components/tooltip) - For addon help text
- [DropdownMenu](/docs/components/dropdown-menu) - For addon menus
