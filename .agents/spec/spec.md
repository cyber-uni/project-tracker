---
status: draft
project-path: .
name: project-tracker
---

# project-tracker — project spec

The repo-root project of `cyber-uni/project-tracker`. It ships the tracker suite, the `issue`,
`epic`, `initiative`, and `project-tracker` skills and the references they load, as the
`project-tracker` plugin in `packages/project-tracker`.

## Scope — what this spec governs

This spec governs the tracker suite's skills and references. The specs moved here from
[repobuddy's project spec](https://github.com/repobuddy/repobuddy/blob/main/.agents/spec/spec.md),
which keeps the specs of the skills that stay in repobuddy.

## Organization — capability-first

The layout strategy is **capability-first**: top-level folders are named for what the project *does*.
Three folders are deliberately not capabilities — `design/` (the rules and the model), `workflows/`
(how capabilities compose into whole flows), and `design/decisions/` (the append-only ADR log).
Single documents live as root files beside this one, never as folders — hence `glossary.md`.

A node is `<capability>/<unit>` and never sits three deep. A sub-grouping inside a capability is a
cross-cutting **`concept:`** tag, recovered through the by-concept index below, never a third folder
level.

### Placement map

| A concept of this kind | lives here |
|---|---|
| A shipped public agent skill (one unit per skill) | `agent-skills/<skill>/` |
| A rule or model that spans skills (the *why*) | `design/` |
| A decision with a chosen-vs-rejected fork | `design/decisions/` (ADR, append-only) |
| A flow composing several capabilities end to end | `workflows/` |
| Build, CI, packaging, dependency policy | `tooling/` |
| A load-bearing term | `glossary.md` |

**Tie-breaks.** A skill's *platform syntax reference* (`references/*.md`) is part of the skill's unit,
not a `design/` doc — it is shipped material the skill loads at runtime, not a rule about the repo.
A rule about *how skills are authored* is `design/`, because it binds every skill and belongs to no
one of them.

The cross-cutting **by-concept index** is generated at the foot of this file from `concept:`
frontmatter — refresh it with the `concept-index` skill rather than editing it.

## Capabilities

| Capability | What it does |
|---|---|
| [agent-skills](./agent-skills/README.md) | Ship installable agent skills to consumers |

<!-- BEGIN generated: by-concept (project-spec/concept-index) -->

## By concept

> Generated from `concept:` frontmatter by `project-spec/concept-index` — do not edit by hand.

| Concept | Facets |
|---|---|
| `duplicate-prevention` | `agent-skills/issue/` (behavior) |
| `level-change` | `agent-skills/epic/` (behavior), `agent-skills/initiative/` (behavior) |
| `tracked-work` | `agent-skills/epic/` (behavior), `agent-skills/initiative/` (behavior), `agent-skills/issue/` (behavior), `agent-skills/project-tracker/` (behavior), `agent-skills/work-references/` (reference) |
| `tracker-capabilities` | `agent-skills/epic/` (behavior), `agent-skills/initiative/` (behavior), `agent-skills/issue/` (behavior), `agent-skills/project-tracker/` (behavior), `agent-skills/work-references/` (reference) |

<!-- END generated: by-concept -->
