---
title: Memory Drivers
---
# Valthrun Memory Drivers
## What are Valthrun Memory Drivers
In order for user-mode applications, such as the [Valthrun CS2 overlay](./cs2/overlay) or the [Valthrun CS2 Web Radar](./cs2/web_radar), to access the memory of other processes, a driver is required. The Valthrun suite provides multiple implementations of such drivers, tailored to different circumstances and requirements of the target processes. Each implementation is designed to handle specific scenarios, ensuring optimal performance and compatibility based on the security and protection measures in place for the processes you wish to attach to.

## Available Memory Drivers
### Kernel Driver
The Valthrun Kernel Driver is the original version of the Valthrun memory driver, designed to operate within the Windows kernel’s memory space, enabling direct memory read and write operations at the kernel level without bypassing user-mode detection mechanisms. This driver supports multiple loading methods, including standard driver loading, manual mapping, and loading via the Valthrun UEFI Loader. Further details on loading options are available in [Loading the Valthrun Kernel Driver](../getting-started/driver/kernel#loading-the-valthrun-driver).

### Zenith Driver
:::note
The Valthrun Zenith Driver is under development and currently not publically available.  
Join the [Valthrun Discord](/general/discord) and stay tuned for updates.
:::

The Valthrun Zenith Driver is designed to read from and write to arbitrary physical or virtual memory. This implementation is completely transparent to the Windows operating system, achieved by hijacking the Virtualization-Based Security (VBS) feature of Windows, bypassing typical OS-level detection mechanisms.

### Usermode Driver
The Valthrun Usermode Driver is a memory driver implementation that utilizes the `NtReadVirtualMemory` and `NtWriteVirtualMemory` functions to read from and write to the memory of other processes. This driver provides a straightforward approach for memory manipulation without the need for special setup or loading methods, making it more accessible than other drivers in the Valthrun Driver suite.

However, it is important to note that the Valthrun Usermode Driver should only be used for development purposes or with processes that are not protected, as it does not offer the same level of security or stealth as the Kernel or Zenith Driver. For further implementation details, you can refer to the code available here: [Valthrun Usermode Driver Implementation](https://github.com/Valthrun/Valthrun/blob/master/kernel/um-driver-impl).