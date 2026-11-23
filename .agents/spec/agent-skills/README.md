# agent-skills

Ship installable agent skills to consumers. The `project-tracker` plugin in
`packages/project-tracker` ships the skills under its `skills/`, each one a `SKILL.md` plus whatever
material it loads at runtime.

One unit per shipped skill.

| Unit | Subject |
|---|---|
| [issue](./issue/README.md) | File one bug, feature, or task on the tracker, after a duplicate check |
| [epic](./epic/README.md) | Plan an epic and its child issues, promote an issue to an epic, demote an initiative to one, across trackers |
| [initiative](./initiative/README.md) | Set an initiative's goal and metric with its epics as shells, and promote an epic to one as a new parent |
| [project-tracker](./project-tracker/README.md) | Set up, show, change, and check which tracker holds each level and category, and the move policy between trackers |
| [work-references](./work-references/README.md) | The level checks, body templates, and tracker contract the level skills load by name |

The units of the skills that stay in repobuddy are in
[repobuddy's `agent-skills`](https://github.com/repobuddy/repobuddy/blob/main/.agents/spec/agent-skills/README.md).
