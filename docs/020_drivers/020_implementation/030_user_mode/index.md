---
title: Usermode Driver
---

# Valthrun Usermode Driver

:::danger
This driver is for development purposes only.  
Do not use this driver unless you know what you are doing.
:::

The Valthrun Usermode Driver is a memory driver implementation that utilizes the `NtReadVirtualMemory` and `NtWriteVirtualMemory` functions to read from and write to the memory of other processes. This driver provides a straightforward approach for memory manipulation without the need for special setup or loading methods, making it more accessible than other drivers in the Valthrun Driver suite.

However, it is important to note that the Valthrun Usermode Driver should only be used for development purposes or with processes that are not protected, as it does not offer the same level of security or stealth as the Kernel or Zenith Driver. For further implementation details, you can refer to the code available here: [Valthrun Usermode Driver Implementation](https://github.com/Valthrun/Valthrun/blob/master/kernel/um-driver-impl).

## Setting up the Usermode Driver

As the sole purpose of the Valthrun Usermode Driver is for development purposes, it is not distributed. Users are encouraged to compile the driver themselves and refer to the source code for further implementation details, which can be found [here](https://github.com/Valthrun/Valthrun/blob/master/kernel/um-driver-impl).
