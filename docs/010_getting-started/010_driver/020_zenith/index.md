---
title: Zenith Driver
---

# Valthrun Zenith Driver

:::note
The Valthrun Zenith Driver is a premium feature and is only available to premium members.
:::

The Valthrun Zenith Driver is designed to read from and write to arbitrary physical or virtual memory. This implementation is completely transparent to the Windows operating system, achieved by hijacking the Virtualization-Based Security (VBS) feature of Windows, bypassing typical OS-level detection mechanisms.

You can find more about the Valthrun Zenith Driver [here](./concept).

## Getting Started

### 1. Check system requirements

The Valthrun Zenith Driver has a couple of hardware and system requirements.
Every modern system should be able to support these but to ensure that you support the Valthrun Zenith Installer as well as validate that your system has been configured please follow the [checking requirements](system_requirements#checking-requirements) section in [system requirements](system_requirements).

### 2. Create a Zenith bootable USB stick

The Valthrun Zenith Driver has to be loaded from the UEFI before the Windows operating system load.
This means, that you will have to create a USB stick to boot of with the Zenith Driver. Please follow the [setup driver](setup_driver) section to create and load the Zenith Driver.

### 3. Load Zenith on system startup / reboot

The Valthrun Zenith Driver has to be loaded on every system start and is unloaded upon system shutdown. To load it, boot the system via the Valthrun Zenith bootable USB stick. This can be done by either manually selecting the Valthrun Zenith EFI loader at each boot or adjusting the system’s boot order to prioritize the USB loader for automatic loading on each startup.

:::tip
It is recommended to remove the USB stick once the Zenith Driver has been loaded. This prevents any applications from scanning your USB stick later.
:::

### 4. Enjoy!

If you have successfully booted from your Zenith bootable USB stick and see the following message, the Valthrun Zenith Driver has been loaded successfully.

![Zenith Loader Ok](@site/docs/_media/zenith_loader_status_ok.png)

You can now use Valthrun applications with the Zenith Driver. For an overview of recommended applications, see Recommended [Applications for Zenith](#recommanded-applications-for-zenith).

## Recommanded applications for Zenith

The primary goal of the Zenith Driver is to remain completely transparent, a principle that extends to all user-mode applications utilizing the driver.

Currently, the only recommended applications to use with the Zenith Driver are:

- [Valthrun CS2 radar client](../../applications/cs2_radar_standalone)

All other applications can still be used with the Zenith Driver but may be subject to other detection vectors like spawning an overlay.
