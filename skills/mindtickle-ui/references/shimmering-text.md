# Shimmering Text

Source: `content/docs/components/shimmering-text.mdx`

```tsx
"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { ShimmeringText } from "@/components/ui/shimmering-text";

const phrases = [
  "Agent is thinking...",
  "Processing your request...",
  "Analyzing the data...",
  "Generating response...",
  "Almost there...",
];

const CYCLE_INTERVAL_MS = 3000;

export function ShimmeringTextDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, CYCLE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-lg border bg-card p-6">
      <div className="mb-4">
        <h3 className="font-semibold text-lg">Text Shimmer Effect</h3>
        <p className="text-muted-foreground text-sm">
          Animated gradient text with automatic cycling
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-center rounded-lg bg-muted/10 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: 10 }}
              key={currentIndex}
              transition={{ duration: 0.3 }}
            >
              <ShimmeringText text={phrases[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

```

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/shimmering-text
```

- Install the following dependencies:

```bash
npm install motion
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Usage

```tsx
import { ShimmeringText } from "@/components/ui/shimmering-text";
```

```tsx
<ShimmeringText text="Hello, World!" />
```

## Examples

### Basic Usage

A simple shimmering text effect with default settings.

```tsx
<ShimmeringText text="Hello, World!" />
```

```tsx
"use client";

import { ShimmeringText } from "@/components/ui/shimmering-text";

export function ShimmeringTextBasic() {
  return <ShimmeringText text="Hello, World!" />;
}

```

### Custom Duration and Colors

Control the animation speed and customize the shimmer colors to match your design.

```tsx
<ShimmeringText
  text="Custom Shimmer"
  duration={3}
  color="#6B7280"
  shimmerColor="#3B82F6"
/>
```

```tsx
"use client";

import { ShimmeringText } from "@/components/ui/shimmering-text";

export function ShimmeringTextCustom() {
  return (
    <ShimmeringText
      color="#6B7280"
      duration={3}
      shimmerColor="#3B82F6"
      text="Custom Shimmer"
    />
  );
}

```

### Trigger on Viewport Entry

Start the animation when the component scrolls into view. Use `once={true}` to animate only once.

```tsx
<ShimmeringText
  text="Appears when scrolled into view"
  startOnView={true}
  once={true}
/>
```

```tsx
"use client";

import { ShimmeringText } from "@/components/ui/shimmering-text";

export function ShimmeringTextViewport() {
  return (
    <div className="max-h-[400px] space-y-4 p-4">
      <p className="text-muted-foreground text-sm">
        Scroll down to see the shimmering text animate when it enters the
        viewport:
      </p>
      <div className="h-[500px]" />
      <ShimmeringText
        className="mb-10"
        once={true}
        startOnView={true}
        text="Appears when scrolled into view"
      />
    </div>
  );
}

```

### Repeating Animation

Control whether the animation repeats and add a delay between repeats.

```tsx
<ShimmeringText
  text="Repeating Shimmer"
  repeat={true}
  repeatDelay={1}
  duration={2}
/>
```

```tsx
"use client";

import { ShimmeringText } from "@/components/ui/shimmering-text";

export function ShimmeringTextRepeat() {
  return (
    <ShimmeringText
      duration={2}
      repeat={true}
      repeatDelay={1}
      text="Repeating Shimmer"
    />
  );
}

```

### With Custom Styling

Apply custom classes and adjust the shimmer spread for different text sizes.

```tsx
<ShimmeringText
  text="Large Heading"
  className="text-4xl font-bold"
  spread={3}
/>
```

```tsx
"use client";

import { ShimmeringText } from "@/components/ui/shimmering-text";

export function ShimmeringTextStyled() {
  return (
    <ShimmeringText
      className="font-bold text-4xl"
      spread={3}
      text="Large Heading"
    />
  );
}

```

### With Delay

Add a delay before the animation starts for staggered effects.

```tsx
<ShimmeringText text="Delayed Animation" delay={0.5} duration={2} />
```

```tsx
"use client";

import { ShimmeringText } from "@/components/ui/shimmering-text";

export function ShimmeringTextDelay() {
  return <ShimmeringText delay={0.5} duration={2} text="Delayed Animation" />;
}

```

## API Reference

### ShimmeringText

Animated text with gradient shimmer effects and viewport-triggered animations using Motion.

**ShimmeringText Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| text | `string` | - | The text content to display with shimmer effect. Must be a non-empty string. |
| duration | `number` | `2` | Controls how fast the shimmer moves across the text. Lower values create faster animations. Recommended range: 1-5 seconds. |
| delay | `number` | `0` | Pauses before animation begins. Useful for staggered animations or sequential reveals. |
| repeat | `boolean` | `true` | Whether the shimmer effect continuously loops. Set to false for one-time animations. |
| repeatDelay | `number` | `0.5` | Time to wait before restarting the animation. Only applies when repeat={true}. |
| className | `string` | - | Additional CSS classes for typography, spacing, or other styles. Merges with component's default classes. |
| startOnView | `boolean` | `true` | Waits for component to enter viewport before animating. Set to false to start immediately on mount. |
| once | `boolean` | `false` | Animates only once when entering viewport. Only applies when startOnView={true}. |
| inViewMargin | `string` | - | Adjusts when the component is considered 'in view'. Uses CSS margin syntax like "0px 0px -10%". |
| spread | `number` | `2` | Multiplier for shimmer effect width based on text length. Higher values create wider shimmer effects. |
| color | `string` | - | Base text color when shimmer is not visible. Accepts any valid CSS color value. |
| shimmerColor | `string` | - | Color of the shimmer gradient effect. Accepts any valid CSS color value. |

## Accessibility

The ShimmeringText component follows accessibility best practices:

- Uses semantic `<span>` element for text content
- Maintains proper contrast ratios for text readability
- Animation respects `prefers-reduced-motion` via Motion's built-in support
- Viewport detection ensures animations don't start until content is visible
- Text remains readable even when animation is disabled or paused
- Supports all standard HTML attributes for text elements

### Reduced Motion

The component uses Motion (Framer Motion), which automatically respects the `prefers-reduced-motion` media query. Users with motion sensitivity preferences will see a simplified animation or no animation at all.

### Screen Reader Considerations

- The text content is fully accessible to screen readers
- The shimmer effect is purely visual and doesn't affect text content
- Consider providing context if the shimmer effect conveys meaning (e.g., "Loading..." or "Processing...")

## Best Practices

### When to Use Shimmering Text

✅ **Do use shimmering text for:**

- Loading states and progress indicators
- Attention-grabbing headlines or hero text
- Status messages that need emphasis
- Feature highlights or callouts
- Decorative text in marketing or landing pages

❌ **Don't use shimmering text for:**

- Body text or long-form content
- Critical information that must be immediately readable
- Text that needs to be copied or selected
- Navigation labels or interactive elements
- Error messages or warnings

### Animation Guidelines

- **Duration**: Use 2-3 seconds for most cases. Faster (1-1.5s) for subtle effects, slower (4-5s) for dramatic reveals
- **Repeat**: Enable repetition for loading states, disable for one-time reveals
- **Delay**: Use delays for sequential animations or staggered reveals
- **Viewport Trigger**: Enable `startOnView` for content below the fold to improve performance

### Color Customization

- **Base Color**: Should match your text color scheme. Defaults to `muted-foreground` theme color
- **Shimmer Color**: Should contrast with base color. Defaults to `foreground` theme color
- **Theme Support**: Colors automatically adapt to light/dark mode when using theme variables
- **Contrast**: Ensure sufficient contrast between base and shimmer colors for readability

### Performance Considerations

- The component uses CSS transforms and opacity for smooth, performant animations
- Viewport detection prevents unnecessary animations for off-screen content
- Dynamic spread calculation is memoized to avoid recalculation on each render
- Consider using `once={true}` for content that doesn't need continuous animation

### Typography Integration

- Works with any font size or weight
- Apply typography classes via `className` prop
- Larger text benefits from higher `spread` values (3-4)
- Smaller text works well with default `spread` (2)

> Avoid using shimmering text for critical information or in contexts where users need to quickly scan content. The animation can be distracting and may slow down information processing.

## Technical Notes

- Built with Motion (Framer Motion) for smooth, performant animations
- Uses CSS gradient background animation for the shimmer effect
- Viewport detection powered by Motion's `useInView` hook
- Dynamic spread calculation based on text length for consistent appearance
- Supports custom colors via CSS custom properties
- Text uses `background-clip: text` for gradient effect
- Default colors adapt to light/dark mode automatically
- Optimized with `useMemo` for performance
- Animation can be controlled via viewport intersection or immediate start

## Related Components

- [Badge](/docs/components/badge) - For status indicators without animation
- [Button](/docs/components/button) - For interactive elements with loading states
- [Card](/docs/components/card) - Often used as containers for shimmering text

## Credits

This component is adapted from the open-source [ElevenLabs UI component library](https://ui.elevenlabs.io/docs/components/shimmering-text). We've integrated it into our design system with our styling and patterns.
