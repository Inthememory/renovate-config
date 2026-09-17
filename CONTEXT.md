# Renovate config

Shared Renovate presets that decide which dependency updates are safe to automate across Inthememory repositories.

## Language

**Dev-class dependency**:
A version declared as npm `devDependencies` or in the pnpm named catalog `dev` (`pnpm.catalog.dev`). Same automerge, labeling, commit-prefix, and pin policy apply to both.
_Avoid_: Dev dependency (when meaning only `package.json`), catalog dependency (when meaning any catalog)

**pnpm.catalog.dev**:
Renovate's depType for entries in the pnpm named catalog `dev`. Not the default catalog or any other named catalog.
_Avoid_: pnpm.catalog, catalog.dev (as a Renovate matcher without the `pnpm.` prefix)
