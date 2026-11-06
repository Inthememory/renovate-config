# Lock file maintenance skips minimum release age

`minimumReleaseAge` holds a branch on `renovate/stability-days` until its release timestamp is old enough. Lock file maintenance is not a release: the package manager rewrites the lock file, and the branch has no `releaseTimestamp`. With the default `minimumReleaseAgeBehaviour` of `timestamp-required`, that check stays pending, so the maintenance PR never goes green and automerge never finishes.

We set `lockFileMaintenance.minimumReleaseAge` to `null`. Direct version bumps still wait two days, and major bumps still wait seven. Vulnerability alerts and first-party packages were already exempt.

## Considered Options

- Set `minimumReleaseAgeBehaviour` to `timestamp-optional` on lock file maintenance — rejected: Renovate's own `security:minimumReleaseAge*` presets clear the age instead, which drops the check rather than special-casing a missing timestamp.
- Keep the age gate and merge maintenance PRs by hand — rejected: the check cannot pass, so every lock file PR would need a human.

## Consequences

- Lock file maintenance PRs are no longer stuck on `renovate/stability-days`.
- A maintenance run can still refresh transitive versions younger than two days. Renovate never filtered those versions; only the status check was blocked. A package manager that enforces its own minimum release age (for example pnpm) remains the control for what the lock file actually installs.
- Version-bump PRs keep the two-day and seven-day cooldowns.
