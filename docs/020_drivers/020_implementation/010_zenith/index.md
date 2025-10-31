---
title: Zenith Driver
---

# Valthrun Zenith Driver
Valthrun Zenith is a hypervisor-backed, undetectable low-level memory access driver, designed to read from arbitrary physical or virtual memory.
In simple terms, it lets you reach parts of your system that ordinary applications can’t even see, all while staying completely invisible to Windows itself.
  
Powered by Windows Virtualization-Based Security (VBS), Zenith operates inside an isolated, hardware-assisted environment, ensuring total transparency and unmatched stealth.
A more technical breakdown on the workings of the Zenith Driver can be found [here](./concept).

:::note
The Valthrun Zenith Driver is a premium feature and is exclusively available only to [premium members](https://wiki.valth.run/premium#benefits-of-valthrun-premium).
:::

## Driver Variations
The Zenith driver is available in two configurations:
- Emulated TPM Mode – where Zenith attempts to emulate certain TPM commands.
- Hardware TPM Mode – where Zenith relies on a reset-able, modified discrete TPM chip.

The key difference between these modes lies in transparency and reliability.
The emulated mode does not require any external hardware, making it easier to set up,
but it is more likely to be flagged and therefore not recommended if full transparency is desired.

In contrast, the **hardware TPM mode provides complete transparency** and significantly improves reliability and consistency, as Zenith interacts directly with real TPM hardware.
However, it requires an externally modified TPM chip, which can be conveniently purchased through our Discord shop.

More information on how to buy a discrete modified TPM chip can be found [here](./discrete-tpm/buy).


## How to get started

### 1. [Check system requirements](./system_requirements#checking-requirements)

The Valthrun Zenith Driver has a couple of hardware and system requirements.
Every modern system should be able to support these but to ensure that you support the Valthrun Zenith Installer as well as validate that your system has been configured please follow the [checking requirements](./system_requirements#checking-requirements) section in [system requirements](./system_requirements).

### 2. [Create a Zenith boot USB](./installation/installation)

The Valthrun Zenith Driver has to be loaded from the UEFI before the Windows operating system load.
This means, that you will have to create a USB stick containing the Zenith Driver and a secondary local boot entry which will load the USB stick. Please follow the [installation](./installation/installation) section.

### 3. [Boot with Zenith](./boot)

The Valthrun Zenith Driver has to be loaded on every system start and is unloaded upon system shutdown. To load it, boot the system from your previously created USB stick. 
Please follow the [boot with Zenith](./boot) section to boot with Zenith.

If you have successfully booted with Zenith and see the following message, the Valthrun Zenith Driver has been loaded successfully.
![Zenith Loader Ok](@site/docs/_media/zenith_loader_status_ok.png)

### 4. [Setup the Zenith User Mode Driver Interface](./application_setup)

To enable user mode applications, such as the [Valthrun CS2 radar client](../../../utilities/enhancers/cs2_radar_standalone),
to communicate with Zenith, ensure they can access the Zenith driver interface. 
Simply place the `driver_interface_zenith_[...].dll` file in the same directory as the target application executable (`.exe`).
For additional details, refer to the [Application Setup](./application_setup) page.

### 5. Enjoy!

If you have successfully booted from your Zenith bootable USB stick and setup the driver interface you are ready to go. 
You can now use the Valthrun applications with the Zenith Driver! 
For an overview of recommended applications, see [Recommended applications for Zenith](#recommanded-applications-for-zenith).

## Recommanded applications for Zenith

The primary goal of the Zenith Driver is to remain completely transparent, a principle that extends to all user-mode applications utilizing the driver.

Currently, the only recommended applications to use with the Zenith Driver are:

- [Valthrun CS2 radar client](../../../utilities/enhancers/cs2_radar_standalone)

All other applications can still be used with the Zenith Driver but may be subject to other detection vectors like spawning an overlay.
