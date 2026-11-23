# project-tracker

Agent skills to file issues and plan epics and initiatives on your project tracker, such as GitHub
Issues or Jira. Published to npm as `cyber-project-tracker`.

Documentation: <https://cyber-uni.github.io/project-tracker/>

It ships four skills: `project-tracker` records which tracker holds each kind of work, `issue`
files a bug, feature, or task, `epic` plans an epic and its child issues, and `initiative` sets up
an initiative and its epics. They moved here from [repobuddy](https://github.com/repobuddy/repobuddy).

## Install

**Claude Code**

```text
/plugin marketplace add cyber-uni/marketplace
/plugin install project-tracker@cyber-uni
```

**Codex**

```text
codex plugin marketplace add cyber-uni/marketplace
codex plugin add project-tracker@cyber-uni
```

**GitHub Copilot CLI**

```text
copilot plugin marketplace add cyber-uni/marketplace
copilot plugin install project-tracker@cyber-uni
```

## Development

The plugin is in `packages/project-tracker`. Edit its `plugin.json` and `skills/`, then derive the
per-vendor manifests:

```bash
pnpm plugin:build
```

The docs site is in `apps/web`. Run `pnpm web dev` to preview it.

## License

MIT
