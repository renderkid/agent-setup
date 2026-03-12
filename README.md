# agent-setup

Public distribution repo for Mindtickle UI AI integrations.

## Install the universal skill

This repo is designed for `skills.sh` consumers:

```bash
npx skills add renderkid/agent-setup
```

That installs the generated `mindtickle-ui` skill bundle for tools that read
skills from the local file system.

## Claude Code marketplace

Add the marketplace and install the companion plugin:

```text
/plugin marketplace add renderkid/agent-setup
/plugin install mindtickle-ui@plugins
```

The plugin stays intentionally slim. It only carries:

- `/mt-init` for shadcn registry bootstrap
- `/mt-migrate` for incremental migration from existing shadcn/ui projects
- A `SessionStart` hook that suggests Mindtickle UI when a project is a good fit

All heavy guidance, Base UI rules, references, and examples live in
`skills/mindtickle-ui/`.

## Repository layout

- `skills/mindtickle-ui/` - generated universal skill bundle
- `plugins/mindtickle-ui/` - Claude Code companion plugin
- `.claude-plugin/marketplace.json` - marketplace catalog for Claude Code

## Source of truth

The generated skill bundle originates from the private `mindtickle.design`
monorepo. It is synced here by automation so this public repo can stay focused
on distribution.
