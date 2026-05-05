# Inthememory Renovate configuration

[![License][license-image]][license-url]

> Renovate configuration presets

## Getting Started - App Installation

- [for GitHub](https://docs.renovatebot.com/install-github-app/)
- [for GitLab](https://docs.renovatebot.com/install-gitlab-app/)
- go to [Renovate Dashboard](https://app.renovatebot.com/dashboard) to add your project,
- accept Renovate Bot PR

## Features

- ✅ Automerge only when safe
  - When dev dependency that is self validated by CI
  - When project is following semantic-versioning and well maintained
- 🚄 Focus on productivity
  - The configuration should not overburden the team by creating a great amount of PR, it should be a safe way to automate and save time
- ✓ Main Supported Technologies
  - NodeJS
  - Docker
  - React Native & Ionic (no upgrade for native dependencies)
- 🗓️ Scheduled to run outside working hours (night and weekend)

## Usage

### Renovate Configuration

`renovate.json`

**Application** (api, webapp, static website generator, etc):

For a library repository (where dependencies should be unpinned), use this configuration:

```json
{
  "extends": ["github>Inthememory/renovate-config:application"]
}
```

**Legacy application** (unmaintained or untested):

For an unmaintained or untested repository include the configuration (will disable automerge and limit maximum PR):

```json
{
  "extends": [
    "github>Inthememory/renovate-config:application", // or library
    "github>Inthememory/renovate-config:safeLegacy"
  ]
}
```

Later, when the PR amount is lower and the application you can switch to `application.json`

**Library**:

For a library repository (where dependencies should be unpinned), use this configuration:

```json
{
  "extends": ["github>Inthememory/renovate-config:library"]
}
```

> [Read the documentation](https://docs.renovatebot.com/configuration-options/) to improve your configuration.

## License

[UNLICENSED][license-url] © VusionIntelligence

[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: ../../LICENSE
