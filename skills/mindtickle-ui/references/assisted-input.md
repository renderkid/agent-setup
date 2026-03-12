# Assisted Input

Source: `content/docs/ai-elements/assisted-input.mdx`

```tsx
"use client";

import { useState } from "react";

import { AssistedInput } from "@/components/ai/assisted-input";

export function AssistedInputDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-md">
      <AssistedInput
        label="Product Description"
        onChange={setValue}
        placeholder="Enter your text or click Auto-generate…"
        prompt="Write a brief description, up to 50 words, of a sales enablement program for a company that sells a software product to small businesses."
        value={value}
      />
    </div>
  );
}

```

## Overview

The Assisted Input component enhances traditional textarea fields with AI-powered content generation and editing. Built on top of the [Field component](/docs/components/field), it provides a complete form field experience with labels, descriptions, and error handling, while seamlessly integrating OpenAI's capabilities to help users create, refine, and improve their text content.

## Installation

> Make sure you have configured the Mindtickle registry. See [installation guide](/docs/quick-start).

```bash
npx shadcn@latest add @mindtickle/assisted-input
```

- Install the following dependencies:

```bash
npm install ai @ai-sdk/react @ai-sdk/openai lucide-react
```

- Copy and paste the following code into your project.

_Registry source is installed via the Mindtickle shadcn registry._

- Update the import paths to match your project setup.

## Environment Setup

> The Assisted Input component requires an OpenAI API key to function. You must set up your environment variables before using this component.

Create a `.env.local` file in your project root:

```bash
OPENAI_API_KEY=sk-...
```

Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys).

## Usage

```tsx
import { AssistedInput } from "@/components/ai/assisted-input";
```

```tsx
export function MyForm() {
  const [value, setValue] = useState("");

  return (
    <AssistedInput
      label="Introduction"
      value={value}
      onChange={setValue}
      placeholder="Enter your text…"
      prompt="Generate a professional introduction"
    />
  );
}
```

### With Description

Add helper text below the label using the `description` prop:

```tsx
<AssistedInput
  label="Product Description"
  description="This will appear on your product page"
  value={value}
  onChange={setValue}
  placeholder="Describe your product…"
  prompt="Write a compelling product description"
/>
```

## Examples

### Basic Usage

The component starts in an empty state with an "Auto-generate" button. Click it to generate content based on the provided prompt.

```tsx
"use client";

import { useState } from "react";

import { AssistedInput } from "@/components/ai/assisted-input";

export function AssistedInputDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full max-w-md">
      <AssistedInput
        label="Product Description"
        onChange={setValue}
        placeholder="Enter your text or click Auto-generate…"
        prompt="Write a brief description, up to 50 words, of a sales enablement program for a company that sells a software product to small businesses."
        value={value}
      />
    </div>
  );
}

```

### Editing Existing Content

When the textarea contains text, the "Edit with AI" button appears, allowing users to refine and improve existing content.

```tsx
"use client";

import { useState } from "react";

import { AssistedInput } from "@/components/ai/assisted-input";

export function AssistedInputWithContent() {
  const [value, setValue] = useState(
    "I am interested in learning more about your product."
  );

  return (
    <div className="w-full max-w-md">
      <AssistedInput
        description="Click 'Edit with AI' to enhance the existing content"
        label="Customer Message"
        onChange={setValue}
        placeholder="Enter your message…"
        prompt="Make this message more professional and engaging while keeping the core intent"
        value={value}
      />
    </div>
  );
}

```

### Form Integration

Integrate the Assisted Input seamlessly into forms with labels and validation.

```tsx
"use client";

import { useState } from "react";

import { AssistedInput } from "@/components/ai/assisted-input";
import { Button } from "@/components/ui/button";

const NOTIFICATION_DURATION = 2000;

export function AssistedInputForm() {
  const [bio, setBio] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), NOTIFICATION_DURATION);
  };

  return (
    <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
      <AssistedInput
        description="This will appear on your public profile"
        label="Professional Bio"
        onChange={setBio}
        placeholder="Describe your professional background…"
        prompt="Write a compelling professional bio for a product manager with experience in SaaS and team leadership"
        value={bio}
      />
      <Button disabled={!bio} type="submit">
        {submitted ? "Saved!" : "Save Profile"}
      </Button>
    </form>
  );
}

```

### Custom Prompts

Provide detailed, context-rich prompts to generate highly specific and targeted content.

```tsx
"use client";

import { useState } from "react";

import { AssistedInput } from "@/components/ai/assisted-input";

export function AssistedInputCustomPrompt() {
  const [emailBody, setEmailBody] = useState("");

  return (
    <div className="w-full max-w-2xl space-y-4">
      <AssistedInput
        className="[&_textarea]:min-h-32"
        label="Email Body"
        onChange={setEmailBody}
        placeholder="Compose your email or let AI help…"
        prompt="Write a professional follow-up email to a client after a successful product demo. Thank them for their time, highlight 2-3 key features they seemed interested in, and suggest next steps for a pilot program. Keep it concise and friendly."
        value={emailBody}
      />
      <div className="rounded-md border border-border bg-muted/50 p-4">
        <p className="mb-2 font-medium text-sm">Custom Prompt Strategy</p>
        <p className="text-muted-foreground text-xs">
          This example uses a detailed, context-rich prompt to generate highly
          specific content. The AI understands the scenario, audience, and
          desired outcome, resulting in more targeted and useful suggestions.
        </p>
      </div>
    </div>
  );
}

```

## API Reference

### AssistedInput

An AI-powered input field that can generate content based on prompts.

**AssistedInput Props:**

| Prop | Type | Default | Description |
| :--- | :--- | :------ | :---------- |
| value | `string` | `""` | The controlled value of the input field. |
| onChange | `(value: string) => void` | - | Callback fired when the input value changes, including AI-generated content. |
| placeholder | `string` | `"Field placeholder"` | Placeholder text displayed when the input is empty. |
| prompt | `string` | `"Generate content based on the context"` | The AI prompt used to generate content. Customize this to guide the AI's output based on your use case. |
| label | `string` | - | Accessible label for the input field. |
| className | `string` | - | - |
| disabled | `boolean` | `false` | Disables the input and AI generation when true. |

## Keyboard Shortcuts

When content is generated and awaiting user action:

- `Cmd + Enter` (or `Ctrl + Enter`) - Accept generated content
- `Esc` - Cancel and restore original value

## Accessibility

The Assisted Input component follows WAI-ARIA guidelines:

- Uses semantic `<textarea>` element with proper ARIA attributes
- Loading state communicated via `aria-busy` attribute
- All icon-only buttons include `aria-label` for screen readers
- Spinner includes `role="status"` and `aria-label="Loading"`
- Error messages use `role="alert"` for immediate screen reader announcement
- Focus management maintains natural tab order
- Keyboard shortcuts don't interfere with standard text editing

### Screen Reader Experience

- Announces "Generating content" when AI generation starts
- Announces "Content generated. Use Cmd+Enter to accept or Escape to cancel"
- Error messages are immediately announced
- Action buttons clearly labeled with their purpose

## Best Practices

### Writing Effective Prompts

The quality of AI-generated content depends heavily on the prompt you provide:

```tsx
// ❌ Vague prompt
<AssistedInput prompt="Write something" />

// ✅ Specific, context-rich prompt
<AssistedInput
  prompt="Write a professional follow-up email thanking a client for their time during a product demo. Mention 2-3 key features they showed interest in and suggest scheduling a pilot program. Keep tone friendly and concise (150 words max)."
/>
```

### When to Use

- **Short-form content** - Descriptions, summaries
- **Creative writing** - Marketing copy, social posts
- **Professional communication** - Formal letters, announcements
- **Repetitive content** - Similar messages with context variations

### When NOT to Use

- **Sensitive data** - Personal information, credentials
- **Legal content** - Contracts, agreements requiring human review
- **Short fields** - Names, titles (use regular input instead)
- **Real-time chat** - Use dedicated chat interfaces

### Security Considerations

> AI-generated content is sent to OpenAI's API. Avoid using this component for: - Personal Identifiable Information (PII) - Financial data - Health records - Confidential business information

Always review AI-generated content before submission. The component is designed to assist, not replace human judgment.

### Performance Tips

- Use specific prompts to reduce generation time
- Keep context concise to minimize token usage
- Consider implementing rate limiting for production use
- Cache common prompts and responses when appropriate

## Error Handling

The component gracefully handles various error scenarios:

- **Missing API Key** - Displays error message prompting configuration
- **Network Errors** - Shows retry-friendly error message
- **Rate Limits** - Informs user to try again later
- **Invalid Prompts** - Requests valid prompt input

Errors are displayed below the textarea with appropriate styling and screen reader announcements.
