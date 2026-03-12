---
name: mt-init
description: Initialize Mindtickle UI in the current project - configures components.json with the Mindtickle registry
---

# Mindtickle UI Initialization

This command sets up your project to use Mindtickle UI components.

## Steps to Perform

1. **Check for existing components.json**
   - Look for `components.json` in the project root
   - If it doesn't exist, run `npx shadcn@latest init` first with sensible defaults

2. **Add Mindtickle Registry**
   - Add the `@mindtickle` registry to `components.json`:

   ```json
   {
     "registries": {
       "@mindtickle": "https://ui.mindtickle.design/registry/r/{name}.json"
     }
   }
   ```

3. **Install Mindtickle theme and utils**
   - Run:

   ```bash
   npx shadcn@latest add @mindtickle/theme
   npx shadcn@latest add @mindtickle/utils
   ```

4. **Verify lib/utils.ts exists**
   - Check for `lib/utils.ts` or the configured utils path
   - If missing, create it with the `cn()` function:

   ```typescript
   import { type ClassValue, clsx } from "clsx";
   import { twMerge } from "tailwind-merge";

   export function cn(...inputs: ClassValue[]): string {
     return twMerge(clsx(inputs));
   }
   ```

5. **Check dependencies**
   - Verify these packages are installed:
     - `@base-ui/react`
     - `class-variance-authority`
     - `clsx`
     - `tailwind-merge`
     - `lucide-react`
     - `motion`
   - If missing, suggest: `npm install @base-ui/react class-variance-authority clsx tailwind-merge lucide-react motion`

6. **Offer starter components**
   - Ask if user wants to install common starter components:
     - Button, Card, Input, Dialog (core UI)
     - MainNav, GlobalHeader, PageHeader (layout blocks)
   - If yes, run: `npx shadcn@latest add @mindtickle/button @mindtickle/card @mindtickle/input`

## Success Message

After completion, inform the user:

- Mindtickle UI is configured
- They can install components with `npx shadcn@latest add @mindtickle/<component>`
- Link to documentation: https://ui.mindtickle.design

## Error Handling

- If not in a JavaScript/TypeScript project, inform user this requires a Node.js project
- If shadcn init fails, provide manual setup instructions
- If components.json already has @mindtickle, inform user it's already configured
