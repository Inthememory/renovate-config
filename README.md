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

### 1. Select repository archetype : Application / Library ?

For an application repository, the recommended strategy is to pin every dependencies, use this configuration:

```json title="renovate.json"
{
  "extends": ["github>Inthememory/renovate-config:application"]
}
```

For a library repository (only dev dependencies will be pinned), use this configuration:

```json title="renovate.json"
{
  "extends": ["github>Inthememory/renovate-config:library"]
}
```

### 2. Legacy repository** (unmaintained or untested)

For an unmaintained or untested repository include the configuration (will disable automerge and limit maximum PR). Add a safe guard that avoids too many pull request and disables auto merge.

```json title="renovate.json"
{
  "extends": [
    //...
    "github>Inthememory/renovate-config:safeLegacy"
  ]
}
```

Later, when the PR amount is lower and the application you should remove to `safeLegacy.json`

### Step 3: Add assignees (important)

Renovate will create many pull request. If something fails or a human action is required, there must be an owner to avoid a stock of waiting pull requests

Assign a person

```json title="renovate.json"
{
  //...
  "assigneeSampleSize": 2, // Number of person to pick
  "assignees": ["john_doe"] // the github username
}
```

Assign a team

```json title="renovate.json"
{
  //...
  "assigneeSampleSize": 2, // Number of person to pick
  "assignees": ["team:maintainers"] // 'team:' + the github team slug
}
```

> [Read the documentation](https://docs.renovatebot.com/configuration-options/) to improve your configuration.

## License

[UNLICENSED][license-url] © VusionIntelligence

[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: ../../LICENSE
