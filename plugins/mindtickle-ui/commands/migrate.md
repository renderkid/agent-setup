---
name: mt-migrate
description: Migrate an existing shadcn/ui project to Mindtickle UI incrementally without clobbering local customizations
---

# Mindtickle UI Migration

Use this command when a project already has shadcn/ui components and the user
wants to adopt Mindtickle UI gradually.

## Steps to Perform

1. **Inspect the current project**
   - Run `npx shadcn@latest info`
   - Review the primitive base (`base` vs `radix`), installed components,
     aliases, and resolved UI paths

2. **Configure the Mindtickle registry**
   - Ensure `components.json` contains:

   ```json
   {
     "registries": {
       "@mindtickle": "https://ui.mindtickle.design/registry/r/{name}.json"
     }
   }
   ```

3. **Install shared Mindtickle foundation files**
   - Run:

   ```bash
   npx shadcn@latest add @mindtickle/theme
   npx shadcn@latest add @mindtickle/utils
   ```

4. **Pick migration scope with the user**
   - Ask which components or blocks should move first
   - Prefer incremental migration over replacing everything at once

5. **Preview each migration before writing**
   - Use the shadcn CLI v4 inspection flow:

   ```bash
   npx shadcn@latest add @mindtickle/<name> --dry-run
   npx shadcn@latest add @mindtickle/<name> --view
   npx shadcn@latest add @mindtickle/<name> --diff
   ```

6. **Merge carefully**
   - Preserve local customizations
   - For Base UI projects, verify `render` vs `asChild`, Select `items`,
     ToggleGroup arrays, and Slider scalar values
   - Update imports and supporting examples as needed

## When to Use `init`

- Do **not** run `npx shadcn@latest init` in an existing project unless the user
  explicitly wants a broader reconfiguration
- If they do want to switch the project toward Base UI primitives, explain the
  impact first and then use `init --base base` deliberately

## Success Message

After completion, summarize:

- which components were migrated
- which files were merged manually
- any remaining components that should be migrated later

---

name: mt-migrate
description: Migrate an existing shadcn/ui project to Mindtickle UI incrementally without clobbering local customizations

---

# Mindtickle UI Migration

Use this command when the current project already uses shadcn/ui and the user
wants to adopt Mindtickle UI gradually.

## Steps to Perform

1. **Inspect the current shadcn project**
   - Run `npx shadcn@latest info`
   - Check the primitive base (`base` vs `radix`), installed components,
     aliases, and resolved UI paths

2. **Configure the Mindtickle registry**
   - Ensure `components.json` contains:

   ```json
   {
     "registries": {
       "@mindtickle": "https://ui.mindtickle.design/registry/r/{name}.json"
     }
   }
   ```

3. **Install shared Mindtickle foundation files**
   - Run:

   ```bash
   npx shadcn@latest add @mindtickle/theme
   npx shadcn@latest add @mindtickle/utils
   ```

4. **Choose migration scope with the user**
   - Ask which components or blocks should move first
   - Prefer incremental migration over replacing everything at once

5. **Preview each migration before writing**
   - Inspect the incoming registry item:

   ```bash
   npx shadcn@latest add @mindtickle/<name> --dry-run
   npx shadcn@latest add @mindtickle/<name> --view
   npx shadcn@latest add @mindtickle/<name> --diff
   ```

6. **Merge carefully**
   - Preserve local customizations
   - For Base UI projects, verify `render` vs `asChild`, Select `items`,
     ToggleGroup arrays, and Slider scalar values
   - Update imports and supporting examples as needed

## When to Use `init`

- Do **not** run `npx shadcn@latest init` in an existing project unless the user
  explicitly wants a broader reconfiguration
- If they do want to switch the project toward Base UI primitives, explain the
  impact first and then use `init --base base` deliberately

## Success Message

After completion, summarize:

- which components were migrated
- which files were merged manually
- any remaining components that should be migrated later
