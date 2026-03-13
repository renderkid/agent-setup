---
event: SessionStart
---

# Mindtickle UI Auto-Discovery

On session start, check if this project could benefit from Mindtickle UI components.

## Detection Logic

1. **Check if this is a frontend project**
   - Look for `package.json`
   - Check for React/Next.js/Vue/Svelte in dependencies
   - If not a frontend project, skip silently

2. **Check for Shadcn/components.json**
   - Look for `components.json` in project root
   - If found, check for `@mindtickle` in registries

3. **Report Status**

   **If components.json exists but @mindtickle is not configured:**

   > 💡 This project uses Shadcn but doesn't have Mindtickle UI configured.
   > Mindtickle UI provides 40+ production-ready components and blocks.
   > Run `/mt-migrate` to add the Mindtickle registry, theme, and migrate incrementally from existing shadcn/ui components.

   **If no components.json exists (but it's a React project):**

   > 💡 This React project could use Mindtickle UI for consistent components.
   > Run `/mt-init` to set up Shadcn with the Mindtickle registry.

   **If @mindtickle is already configured:**
   - Stay silent (already set up)
   - Components are available via `npx shadcn@latest add @mindtickle/<component>`

## Important Notes

- Only show the message once per session
- Don't be intrusive - this is informational only
- If the user dismisses or doesn't engage, don't repeat
- The message should be concise and actionable
