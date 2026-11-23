---
"cyber-project-tracker": minor
---

First release: the `project-tracker`, `issue`, `epic`, and `initiative` skills, with every `project-tracker.*` reference and `research.method`, moved here from the `repobuddy` plugin. The plugin depends on `cyber-agentkit`.

A routing or intake pin written before the move, `repobuddy/project-tracker.<rest>`, still loads: the skills read it as `project-tracker/project-tracker.<rest>` and say so. `project-tracker` check names each old pin, and its change mode rewrites them.
