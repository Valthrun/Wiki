---
title: 'Do not use "latest version"'
---

# Avoid the phrase "latest version"

When submitting a bug report, providing precise and detailed information is crucial for efficient problem resolution. One key detail is the version of the software where the issue occurred. While it might seem straightforward to refer to the "latest version," this phrase introduces ambiguity and complicates troubleshooting.

## Why "latest version" is problematic

### 1. Ambiguity

The term "latest version" is relative and depends on context:

- Time: The version you consider "latest" today may no longer be current tomorrow.
- Source: Different release channels (e.g., stable, beta, nightly) might define "latest" differently.
- User perception: Some users mistakenly assume they have the latest version due to outdated updates or caching issues.

### 2. Hinders Reproducibility

For developers to investigate a bug, they must replicate it under the same conditions. Without a specific version identifier, they may:

- Waste time determining which version you're using.
- Fail to reproduce the issue if it's tied to an older or interim version.

### 3. Impacts Bug Tracking

Bug tracking systems often link issues to particular versions. Using exact version identifiers enables:

- Pinpointing when and where the issue was introduced.
- Verifying whether a fix has resolved the issue in newer versions.

### 4. Delays Communication

The vague "latest version" often results in unnecessary follow-up questions like:

- "Which version are you using exactly?"
- "Are you certain it's the latest release?"

Specifying the version eliminates this back-and-forth and expedites debugging.

## Best practices when stating a version

- **Include Exact Identifiers**  
  Always state the full version string, build number, or commit hash (e.g., `zenith_installer_e3fd67e`).

- **Mention the Source**  
  Specify where you obtained the version (e.g., "official website," "GitHub releases page").

- **Double-Check Your Version**  
  Ensure you’re using the version you report.

## Example

Avoid:

> The bug I encountered was in the latest version.

Use:

> The bug I encountered was in the **nightly** version of the `zenith_installer_123ebf` downloaded from the Valthrun Portal.
