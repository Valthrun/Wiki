---
title: Valthrun Drivers
---

# Valthrun Drivers

In order for user-mode applications, such as the [Valthrun CS2 overlay](../applications/cs2_overlay) or the [Valthrun CS2 Web Radar](../applications/cs2_radar_standalone), to access the memory of other processes, a driver is required. The Valthrun suite provides multiple implementations of such drivers, tailored to different circumstances and requirements of the target processes.

## Available Valthrun Driver

Each implementation is designed to handle specific scenarios, ensuring optimal performance and compatibility based on the security and protection measures in place for the processes you wish to attach to. Even though Valthrun offers a variety of drivers, you only need to load one of the drivers.

An overview of available drivers and common use cenarios can be found in the following table:

| <div style={{ width: "8em" }}>Name</div> | Description                                                                                                                                                                                                                                                                                                 |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Zenith Driver](./zenith)                | The [Valthrun Zenith driver](./zenith) is the most powerfull driver which implementation is completely transparent to the Windows operating system but does not provide keyboard or mouse input functionality. This driver should be used along with the Valthrun CS2 radar to achive maximum transparency. |
| [Kernel Driver](./kernel)                | The [Valthrun Kernel driver](./kernel) is the original version of the Valthrun memory driver bypassing user-mode detection mechanisms. It is not designed to avoid detections from software operating at operation system level (e.g. Kernel Mode).                                                         |
| [User Mode Driver](./user_mode)          | The [Valthrun User Mode driver](./user_mode) should only be considered by software developers and is not used in production.                                                                                                                                                                                |
