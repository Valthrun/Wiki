---
title: Driver entry error codes
---

# Overview over the driver entry error codes
| Code | Description |
| :-- | :-- |
| 0x00000000 | Success |
| 0xc0000603 | `STATUS_IMAGE_CERT_REVOKED` Most likely due to using the intel driver as vulnable driver (kdmapper issue [#65](https://github.com/TheCruZ/kdmapper/issues/65)). Disable [MSFT Driver Block List](./030_windows_security_features.md) |
| 0xCF000001 | The Valthrun logging system could not be initialized. This should only rarly occurr |
| 0xCF000002 | A function call, setting up the Valthrun Kernel Driver has failed. Lookup DebugView for more details. |
| 0xCF000003 | The Valthrun Kernel Driver failed to initialize. Lookup DebugView for more details. |
| 0xCF000004 | The Valthrun Kernel Driver has already been loaded | 
