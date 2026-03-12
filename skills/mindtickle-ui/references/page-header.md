# Page Header

Source: `content/docs/blocks/page-header.mdx`

```tsx
import {
  PageHeader,
  PageHeaderTitle,
} from "@/components/blocks/header/page-header";

export function PageHeaderDemo() {
  return (
    <div className="w-full border border-border bg-background">
      <PageHeader>
        <PageHeaderTitle>Page title</PageHeaderTitle>
      </PageHeader>
    </div>
  );
}

```

## Overview

The Page Header is a flexible, composable block for building page-level headers. It adapts to various content types – from simple title-only headers to complex module headers with thumbnails, metadata, and navigation tabs. The component uses React Context to coordinate styling between condensed and full layouts.

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/page-header
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import {
  PageHeader,
  PageHeaderTitle,
  PageHeaderDescription,
  PageHeaderBreadcrumb,
  PageHeaderActions,
  PageHeaderMeta,
  PageHeaderThumbnail,
  PageHeaderTabs,
} from "@/components/blocks/page-header";
```

### Basic Usage

```tsx
<PageHeader>
  <PageHeaderTitle>Page title</PageHeaderTitle>
</PageHeader>
```

## Examples

### Title with Description

Add descriptive text below the title for additional context.

```tsx
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/blocks/header/page-header";

export function PageHeaderWithDescription() {
  return (
    <div className="w-full border border-border bg-background">
      <PageHeader className="gap-2">
        <PageHeaderTitle>Page title</PageHeaderTitle>
        <PageHeaderDescription collapsible>
          This hub serves as a continuous resource for ongoing enablement and
          in-depth information on Conversation Intelligence. Explore a
          comprehensive overview of features, best practices, and strategies to
          maximize your team's effectiveness with conversation analytics and
          AI-powered insights.
        </PageHeaderDescription>
      </PageHeader>
    </div>
  );
}

```

### Title with Actions

Include action buttons for primary and secondary operations.

```tsx
"use client";
import { MoreVertical } from "lucide-react";

import {
  PageHeader,
  PageHeaderActions,
  PageHeaderTitle,
} from "@/components/blocks/header/page-header";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function PageHeaderWithActions() {
  return (
    <div className="w-full border border-border bg-background">
      <PageHeader>
        <div className="flex items-center justify-between">
          <PageHeaderTitle>Page title</PageHeaderTitle>
          <PageHeaderActions>
            <Button variant="outline">Secondary</Button>
            <Button>Primary</Button>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button size="icon" variant="ghost" />}
              >
                <MoreVertical className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => {
                    console.log("Edit");
                  }}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    console.log("Duplicate");
                  }}
                >
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => {
                    console.log("Archive");
                  }}
                >
                  Archive
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </PageHeaderActions>
        </div>
      </PageHeader>
    </div>
  );
}

```

### With Breadcrumb and Metadata

Use breadcrumbs for navigation hierarchy and metadata for contextual information like status badges and creation details.

```tsx
import { FileText, Plus } from "lucide-react";

import {
  PageHeader,
  PageHeaderActions,
  PageHeaderBreadcrumb,
  PageHeaderMeta,
  PageHeaderTitle,
} from "@/components/blocks/header/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PageHeaderWithBreadcrumb() {
  return (
    <div className="w-full border border-border bg-background">
      <PageHeader>
        <PageHeaderBreadcrumb
          items={[
            { label: "Content center", href: "#" },
            { label: "Folder name", href: "#" },
          ]}
        />
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FileText className="size-6 text-amber-500" />
              <PageHeaderTitle>Folder name</PageHeaderTitle>
            </div>
            <PageHeaderMeta>
              <Badge color="success" size="sm" variant="default">
                Public
              </Badge>
              <span className="text-muted-foreground text-sm">
                Created by <span className="font-medium">Antoine Plu</span> on
                July 12, 2024
              </span>
            </PageHeaderMeta>
          </div>
          <PageHeaderActions>
            <Button>
              <Plus className="size-4" />
              Add content
            </Button>
          </PageHeaderActions>
        </div>
      </PageHeader>
    </div>
  );
}

```

### Module Header

A complex header for content modules featuring thumbnail, status indicators, ratings, and navigation tabs.

```tsx
"use client";

import {
  ArrowRight,
  Calendar,
  CircleCheck,
  Eye,
  MessageSquare,
  MoreVertical,
  Star,
  TrendingUp,
} from "lucide-react";

import {
  PageHeader,
  PageHeaderActions,
  PageHeaderBreadcrumb,
  PageHeaderMeta,
  PageHeaderTabs,
  PageHeaderThumbnail,
  PageHeaderTitle,
} from "@/components/blocks/header/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTab } from "@/components/ui/tabs";

export function PageHeaderModule() {
  return (
    <div className="w-full border border-border bg-background">
      <PageHeader className="gap-4">
        <PageHeaderBreadcrumb
          items={[
            { label: "Series", href: "#" },
            { label: "Series name", href: "#" },
            { label: "Module name" },
          ]}
        />

        <div className="flex gap-6">
          {/* Thumbnail */}
          <PageHeaderThumbnail className="w-24 shrink-0">
            <div className="flex size-full items-center justify-center bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
              <div className="h-8 w-12 rotate-12 rounded bg-white/30" />
            </div>
          </PageHeaderThumbnail>

          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col gap-3">
            {/* Title row with status and actions */}
            <div className="flex items-baseline justify-between gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <PageHeaderTitle>Module name</PageHeaderTitle>
                </div>
              </div>
              <PageHeaderActions>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <CircleCheck className="size-4 text-success-muted-foreground" />
                  <span className="@5xl:block hidden">Autosaved 1m ago</span>
                </div>
                <span className="font-semibold text-sm">1200 points</span>
                <Button size="sm" variant="outline">
                  <MessageSquare className="size-4" />
                  56
                </Button>
                <Button size="icon-sm" variant="outline">
                  <Calendar className="size-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Eye className="size-4" />
                  Preview
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={<Button size="icon" variant="ghost" />}
                  >
                    <MoreVertical className="size-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("Edit");
                      }}
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("Duplicate");
                      }}
                    >
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      variant="destructive"
                      onClick={() => {
                        console.log("Archive");
                      }}
                    >
                      Archive
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </PageHeaderActions>
            </div>

            {/* Meta info row */}
            <PageHeaderMeta>
              <Badge size="md" variant="default" color="muted">
                Course
              </Badge>
              <Badge color="warning" size="md" variant="surface">
                Draft
              </Badge>
              <span className="text-muted-foreground text-sm">
                Created by <span className="font-medium">Antoine Plu</span> on
                July 12, 2024
              </span>
              <span className="text-muted-foreground text-sm">•</span>
              <span className="text-muted-foreground text-sm">
                Overall rating
              </span>
              <span className="flex items-center gap-1 text-sm">
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
                <span className="font-medium">4.8</span>
                <span className="text-muted-foreground">(99K+)</span>
              </span>
            </PageHeaderMeta>
          </div>
        </div>
        {/* Navigation tabs */}
        <PageHeaderTabs>
          <Tabs>

              <ArrowRight className="size-4 text-muted-foreground" />

              <ArrowRight className="size-4 text-muted-foreground" />

              <ArrowRight className="size-4 text-muted-foreground" />

          </Tabs>

          <div className="ml-auto pb-2">
            <Button size="icon" variant="ghost">
              <TrendingUp className="size-4" />
            </Button>
          </div>
        </PageHeaderTabs>
      </PageHeader>
    </div>
  );
}

```

### Condensed Variant

Use the `condensed` prop for a more compact header with reduced padding and smaller typography.

```tsx
import { MoreVertical } from "lucide-react";

import {
  PageHeader,
  PageHeaderActions,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/blocks/header/page-header";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function PageHeaderCondensed() {
  return (
    <div className="w-full border border-border bg-background">
      <PageHeader condensed>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <PageHeaderTitle>Page title</PageHeaderTitle>
            <PageHeaderDescription>
              A shorter description for the condensed header variant.
            </PageHeaderDescription>
          </div>
          <PageHeaderActions>
            <Button variant="outline">Secondary</Button>
            <Button>Primary</Button>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button size="icon" variant="ghost" />}
              >
                <MoreVertical className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Archive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </PageHeaderActions>
        </div>
      </PageHeader>
    </div>
  );
}

```

## Components

### PageHeader

The root container that provides context for child components.

```tsx
<PageHeader condensed={false} surface="solid">
  {/* Child components */}
</PageHeader>
```

| Prop        | Type                 | Default   | Description                    |
| ----------- | -------------------- | --------- | ------------------------------ |
| `condensed` | `boolean`            | `false`   | Reduces padding and font sizes |
| `surface`   | `"solid" \| "ghost"` | `"solid"` | Background style               |
| `className` | `string`             | -         | Additional CSS classes         |

### PageHeaderTitle

The main heading element.

```tsx
<PageHeaderTitle as="h2">Module name</PageHeaderTitle>
```

| Prop        | Type          | Default | Description            |
| ----------- | ------------- | ------- | ---------------------- |
| `as`        | `ElementType` | `"h1"`  | Semantic heading level |
| `className` | `string`      | -       | Additional CSS classes |

### PageHeaderDescription

Supporting text below the title.

```tsx
<PageHeaderDescription>
  A brief description of this page content.
</PageHeaderDescription>
```

### PageHeaderBreadcrumb

Navigation breadcrumb trail. Supports both declarative `items` prop and custom `children`.

```tsx
{
  /* Using items prop */
}
<PageHeaderBreadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Current Page" },
  ]}
  separator="/"
/>;

{
  /* Using custom children */
}
<PageHeaderBreadcrumb>
  <li>
    <a href="/">Home</a>
  </li>
  <li>/</li>
  <li>Current Page</li>
</PageHeaderBreadcrumb>;
```

| Prop            | Type                         | Default | Description               |
| --------------- | ---------------------------- | ------- | ------------------------- |
| `items`         | `PageHeaderBreadcrumbItem[]` | -       | Breadcrumb items array    |
| `separator`     | `ReactNode`                  | `"/"`   | Separator between items   |
| `LinkComponent` | `ComponentType`              | `<a>`   | Custom link component     |
| `children`      | `ReactNode`                  | -       | Custom breadcrumb content |

### PageHeaderActions

Container for action buttons, aligned to the right.

```tsx
<PageHeaderActions>
  <Button variant="outline">Cancel</Button>
  <Button>Save</Button>
</PageHeaderActions>
```

### PageHeaderMeta

Container for metadata like badges, timestamps, and ratings. Hidden when `condensed` is true.

```tsx
<PageHeaderMeta>
  <Badge variant="default" color="success">
    Published
  </Badge>
  <span>Created by Jane on July 12, 2024</span>
</PageHeaderMeta>
```

### PageHeaderThumbnail

Image or visual preview for the content. Hidden when `condensed` is true.

```tsx
<PageHeaderThumbnail
  src="/module-thumbnail.jpg"
  alt="Module preview"
  aspectRatio={3 / 2}
/>;

{
  /* Or with custom content */
}
<PageHeaderThumbnail>
  <div className="bg-gradient-to-br from-orange-400 to-purple-600" />
</PageHeaderThumbnail>;
```

| Prop             | Type            | Default     | Description              |
| ---------------- | --------------- | ----------- | ------------------------ |
| `src`            | `string`        | -           | Image source URL         |
| `alt`            | `string`        | -           | Image alt text           |
| `aspectRatio`    | `number`        | `1.5` (3:2) | Thumbnail aspect ratio   |
| `ImageComponent` | `ComponentType` | `<img>`     | Custom image component   |
| `children`       | `ReactNode`     | -           | Custom thumbnail content |

### PageHeaderTabs

Container for navigation tabs with bottom border styling.

```tsx
<PageHeaderTabs>
  <a href="#build" className="border-b-2 border-accent">
    Build
  </a>
  <a href="#settings">Settings</a>
  <a href="#publish">Publish</a>
</PageHeaderTabs>
```

## Layout Patterns

### Simple Page

```
┌─────────────────────────────────────────────┐
│ Page title                                  │
│ Description text goes here                  │
└─────────────────────────────────────────────┘
```

### Page with Actions

```
┌─────────────────────────────────────────────┐
│ Page title                    [Cancel][Save]│
│ Description text goes here                  │
└─────────────────────────────────────────────┘
```

### Content Module

```
┌─────────────────────────────────────────────┐
│ Home / Category / Module                    │
├─────────────────────────────────────────────┤
│ ┌──────┐ Module name        [Points][📅][👁]│
│ │ IMG  │ 🏷 Course  📄 Draft                │
│ └──────┘ Created by Jane • ⭐ 4.8 (99K+)    │
├─────────────────────────────────────────────┤
│ Build → Settings → Publish → Track      [📈]│
└─────────────────────────────────────────────┘
```

## Accessibility

The Page Header follows WAI-ARIA best practices:

- **Semantic HTML**: Uses `<header>` landmark element
- **Heading hierarchy**: `PageHeaderTitle` uses `<h1>` by default, customizable with `as` prop
- **Breadcrumb navigation**: Uses `<nav>` with `aria-label="Breadcrumb"`
- **Current page indicator**: Last breadcrumb item has `aria-current="page"`
- **Focus management**: All interactive elements are keyboard accessible

### Keyboard Navigation

- `Tab` - Navigate through interactive elements
- `Shift + Tab` - Navigate backwards
- `Enter` or `Space` - Activate buttons and links

## Customization

### With Router Link Component

Pass your router's Link component for client-side navigation:

```tsx
import { Link } from "next/link"; // or your router

<PageHeaderBreadcrumb items={breadcrumbs} LinkComponent={Link} />;
```

### With Next.js Image

Use optimized images with the ImageComponent prop:

```tsx
import Image from "next/image";

<PageHeaderThumbnail
  src="/thumbnail.jpg"
  alt="Module preview"
  ImageComponent={Image}
/>;
```

### Custom Surface

Use `surface="ghost"` for transparent backgrounds that layer over content:

```tsx
<PageHeader surface="ghost" className="backdrop-blur-sm">
  <PageHeaderTitle>Overlay Header</PageHeaderTitle>
</PageHeader>
```

## Best Practices

### Content Guidelines

- **Title**: Keep concise – 1-5 words for most pages
- **Description**: Limit to 1-2 sentences; use "Show more" for longer content
- **Breadcrumbs**: Include 2-4 levels; truncate with ellipsis if needed
- **Actions**: Limit to 2-3 primary actions; use dropdown for overflow

### Layout Guidelines

- Use `condensed` for pages where content area should be maximized
- Place metadata below title, not inline (improves scannability)
- Align action buttons to the right consistently
- Use tabs for multi-step workflows or related sub-pages

### Performance

- Lazy load thumbnail images below the fold
- Use skeleton loading for async metadata
- Consider server-side rendering for SEO-critical pages

> The component is framework-agnostic – works with React, Next.js, Vite, and other React setups. Customize `LinkComponent` and `ImageComponent` for your router and image optimization library.

## Related Components

- [Global Header](/docs/blocks/global-header) - Site-level header with navigation and user menu
- [Breadcrumb](/docs/components/breadcrumb) - Standalone breadcrumb component
- [Badge](/docs/components/badge) - Status indicators for metadata
- [Button](/docs/components/button) - Action buttons
- [Tabs](/docs/components/tabs) - Tab navigation component
