# Glossary

The project's ubiquitous language. Every load-bearing term defined once, in plain words. Terms that
span repobuddy's skills, such as **routing skill**, are in
[repobuddy's glossary](https://github.com/repobuddy/repobuddy/blob/main/.agents/spec/glossary.md).

| Term | Means |
|---|---|
| **Category** | Why a piece of tracked work exists: bug, feature, or task. Independent of **level**. |
| **Level** | How much structure a piece of tracked work needs: **issue**, **epic**, or **initiative**. Each level is defined by checks a team can override, not by size words. See [ADR 0003](./design/decisions/0003-split-file-issue-by-level.md). |
| **Issue** | The base level: one deliverable, one owner, ships in one or a few PRs within an iteration. Done when it ships. Asana calls it a task. Owner: the `issue` skill (formerly `file-issue`). |
| **Epic** | Several independently shippable issues that together deliver one outcome. Done when its children are done. Owner: the `epic` skill. |
| **Initiative** | Several epics aimed at a measurable goal, across teams or quarters. Done when the goal's metric is met, not when its children close. Owner: the `initiative` skill. |
| **Shell** | An epic filed with a title, an owner, and a one-line outcome, and no child issues yet. `initiative` files its epics as shells; `epic` breaks one down when its work starts. |
| **Promote / demote** | Move tracked work up or down a level, keeping its category. Run by the skill of the level being entered. How it happens (in place or a new item, what the children do, the limits) comes from the tracker's capabilities reference, which a team can override; a change that crosses trackers follows the routing; the skill keeps the confirmations and the guards. |
| **Capabilities reference** | What one tracker supplies to the level skills: the operations (`detect`, `kinds`, `search`, `create`, `link`, `retype`, `close`, `url`), the levels and categories it holds, and its visibility. Shipped under the shared name `project-tracker.capabilities.<tracker>` by whichever package provides the tracker, and found by listing that prefix. Not the same as a **target platform**, which only selects a markup dialect. See [ADR 0003](./design/decisions/0003-split-file-issue-by-level.md). |
| **Routing** | The project's `project-tracker.routing` reference: which tracker holds each level and category, and how work moves between trackers. Written by the `project-tracker` skill. |
| **Pin** | A tracker's qualified reference name in the routing: `<plugin>/project-tracker.capabilities.<tracker>`, or the bare name when the project itself defines the tracker. The plugin qualifier keeps two plugins that ship the same tracker apart. See [ADR 0003](./design/decisions/0003-split-file-issue-by-level.md). |
