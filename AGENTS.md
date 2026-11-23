# AGENTS.md

## What this repo is

`project-tracker` is an agent plugin for project trackers, published to npm as
`cyber-project-tracker`. It ships skills only. The skills file issues and plan epics and
initiatives on the tracker a project routes each kind of work to, such as GitHub Issues or Jira.

The plugin ships the tracker suite: the `project-tracker`, `issue`, `epic`, and `initiative`
skills, the `project-tracker.*` and `research.method` references in `references/`, and the `epic`
skill's `scripts/epic-plan.mjs`, built from `src/skills/epic-plan.ts`. It moved here from
[repobuddy](https://github.com/repobuddy/repobuddy) in
[repobuddy#1013](https://github.com/repobuddy/repobuddy/issues/1013), with its history.

| Where | What |
| --- | --- |
| `packages/project-tracker` | The plugin, and the npm package `cyber-project-tracker` that ships it |
| `apps/web` | The Astro + Starlight docs site, deployed to GitHub Pages |

## Plugin layout

Everything the plugin needs lives in `packages/project-tracker/` and must stay listed in that
package's `files`, or it will not reach consumers.

| Path | Authored? |
| --- | --- |
| `plugin.json` | yes, the canonical manifest ([Agent Plugins 1.0.0](https://github.com/agentplugins/agent-plugins-spec)) |
| `skills/<name>/SKILL.md` and files beside it | yes |
| `references/` | yes, the plugin's references, which skills load by name through `cyber-agentkit` |
| `src/` | yes, script sources and the reference tests; not shipped |
| `skills/epic/scripts/epic-plan.mjs` | derived by `pnpm plugin:build` from `src/skills/epic-plan.ts` |
| `.claude-plugin/`, `.cursor-plugin/`, `.codex-plugin/` | derived by `pnpm plugin:build`, never hand-edited |

After editing `plugin.json` or `skills/`, run `pnpm plugin:build` and commit the derived files with
the change. `pnpm plugin:check` (part of `pnpm verify`) fails when a derived file drifted.

Versions flow from `packages/project-tracker/package.json` on `pnpm version`: `changeset version`,
then `universal-plugin publish sync-version` carries the number into `plugin.json`, then
`pnpm plugin:build`. Never hand-edit a `version` field.

## Commands

```bash
pnpm verify        # biome, plugin build check, manifest validation, typecheck, tests, knip
pnpm plugin:build  # derive the vendor manifests
pnpm pt test       # the plugin package's tests
pnpm web dev       # the docs site
```

## Commit discipline

- **Unit of work:** one coherent, independently revertable change. Commit it when it is complete
  and `pnpm verify` passes.
- Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`); `commitlint` checks them.
- Stage files by name; never `git add .` or `git add -A`.
- A change to `packages/project-tracker` that users see gets a changeset (`pnpm changeset`).

## Language

Write all content in en-US.
