---
title: Setup the driver
---

# Loading the Valthrun Driver
Loading or mapping a driver can be a complex and challenging task.  
Typically, drivers are signed with an "Extended Validation Code Sign Certificate."  
However, acquiring these certificates can be difficult, and they can be easily blocked by third-party software like VAC (Valve Anti-Cheat).  
As a result, loading the Valthrun driver requires unconventional methods.

## Supported Windows Versions  
Valthrun aims to be compatible with a wide range of Windows versions.  
All recent Windows versions are expected to be supported, as the functions and struct offsets are resolved dynamically.  
The latest Windows 10 and Windows 11 versions, such as 22H2, have been tested successfully.  
User feedback also suggests that Windows versions as far back as 20H2 are working.  
If you encounter any issues, please submit an issue report that includes your Windows version and a description of the error you encounter.

## Overview of Mapping Methods {#methods}
Here is a quick overview of various methods that can be used to load the Valthrun driver:

| Method | Complexity | Success Rate |
| --- | --- | --- |
| [Valthrun EFI loader](./efi-bootloader) | Medium | High |
| [Manual Mapping via KD-Mapper](./kdmapper) | Medium | Medium |
| [Manual Mapping via KDU](:/kdu)* | Medium | Medium |
| [Using Windows Test-Signing](./test-signing) | Low | Very High |
| [Manual Mapping via Other Mappers](./other-mappers)* | Unknown | Unknown |

\* The wiki entry for this method has not yet been completed
    
Each method has its own level of complexity and success rate.  
The choice of which method to use will depend on your specific needs and the compatibility of your system.  
Further details about each mapping method can be found in the linked resources.