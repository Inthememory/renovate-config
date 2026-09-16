# Git-submodule age bypass and trusted automerge

`minimumReleaseAge` is meant for published package versions. Git-submodules track commit digests on a default branch, so on a busy first-party repo the newest SHA is almost never old enough and Renovate parks the update under Pending Status Checks forever.

We bypass the age gate for every `git-submodules` update so PRs open promptly, and automerge only digests whose `sourceUrl` is `https://github.com/Inthememory/**`. Third-party submodule PRs stay review-gated; consuming-repo CI remains the merge gate.

## Considered Options

- Bypass age only for Inthememory submodules — rejected: third-party submodule digests would hit the same stall for the same broken reason.
- Keep the age gate and force PRs from the dashboard — rejected: that is a one-shot escape hatch, not a permanent fix.

## Consequences

- Every submodule digest PR appears without waiting two days.
- Only Inthememory-sourced submodule digests automerge after CI.
- Trust for first-party submodules rests on review in the source repo plus CI on the consumer.
