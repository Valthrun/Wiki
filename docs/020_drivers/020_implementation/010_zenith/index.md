---
title: Zenith Driver
---

# Valthrun Zenith Driver

The Valthrun Zenith Driver is designed to read from and write to arbitrary physical or virtual memory. This implementation is completely transparent to the Windows operating system, achieved by hijacking the Virtualization-Based Security (VBS) feature of Windows, bypassing typical OS-level detection mechanisms.

You can find more about the Valthrun Zenith Driver [here](./concept).
:::note
The Valthrun Zenith Driver is a premium feature and is only available to [premium members](/premium#benefits-of-valthrun-premium).
:::

## Getting Started

### 1. Check system requirements

The Valthrun Zenith Driver has a couple of hardware and system requirements.
Every modern system should be able to support these but to ensure that you support the Valthrun Zenith Installer as well as validate that your system has been configured please follow the [checking requirements](system_requirements#checking-requirements) section in [system requirements](system_requirements).

### 2. Install Zenith

The Valthrun Zenith Driver has to be loaded from the UEFI before the Windows operating system load.
This means, that you will have to create a USB stick containing the Zenith Driver and a secondary local boot entry which will load the USB stick. Please follow the [installation](installation) section.

### 3. Load Zenith on system startup

The Valthrun Zenith Driver has to be loaded on every system start and is unloaded upon system shutdown. To load it, boot the system via the new "Ubuntu" EFI entry. Ensure you've the Valthrun Zenith USB stick plugged in! Please follow the [boot with Zenith](./boot) section to boot with Zenith.

### 4. Verify load success

If you have successfully booted with Zenith and see the following message, the Valthrun Zenith Driver has been loaded successfully.

![Zenith Loader Ok](@site/docs/_media/zenith_loader_status_ok.png)

### 5. Setup the Zenith User Mode Driver Interface

To enable user mode applications, such as the [Valthrun CS2 radar client](../../../utilities/enhancers/cs2_radar_standalone), to communicate with Zenith, ensure they can access the Zenith driver interface.
Simply place the `driver_interface_zenith_[...].dll` file in the same directory as the target application executable (`.exe`).

For additional details, refer to the [Application Setup](./application_setup) page.

### 6. Enjoy!

If you have successfully booted from your Zenith bootable USB stick and setup the driver interface you are ready to go. You can now use the Valthrun applications with the Zenith Driver!

For an overview of recommended applications, see [Recommended applications for Zenith](#recommanded-applications-for-zenith).

## Recommanded applications for Zenith

The primary goal of the Zenith Driver is to remain completely transparent, a principle that extends to all user-mode applications utilizing the driver.

Currently, the only recommended applications to use with the Zenith Driver are:

- [Valthrun CS2 radar client](../../../utilities/enhancers/cs2_radar_standalone)

All other applications can still be used with the Zenith Driver but may be subject to other detection vectors like spawning an overlay.
