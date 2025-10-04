---
title: Requirements
---

# System Requirements for the Valthrun Zenith Driver

:::tip
To quickly verify compatibility, use the Zenith Installer.  
More information can be found in the [checking requirements](#checking-requirements) section.
:::

The Valthrun Zenith Driver is designed to be completely transparent to the Windows operating system but requires some hardware and software configurations. Follow this guide to ensure your system is compatible.

## Zenith Requirements

### CPU Requirements

The Valthrun Zenith Driver supports only Intel and AMD processors. Other processor types, such as ARM, are not supported.

#### Intel CPU

Your Intel CPU must support:

- Intel® Virtualization Technology (VT-x)
- Intel® VT-x with Extended Page Tables (EPT)

These features may need to be enabled in your BIOS. Check the setup driver section for detailed instructions on unlocking these features.

#### AMD CPU

Your AMD CPU must support AMD Virtualization (AMD-V) technology.

### Memory Requirements

In order to use Zenith it is recommended to have at least **32GB of memory** to prevent memory paging.  
It is possible to use Zenith with 16GB of memory available but you may have to disable memory paging.
You can read more about this [here](../troubleshooting/memory_paging).

### Operating System requirements

#### UEFI boot

The Valthrun Zenith Driver requires UEFI boot mode. Legacy BIOS is not supported.

#### Windows Requirements

Compatible with:

- Windows 11 (latest stable release)
- Windows 10 (latest stable release)

Unsupported versions include:

- Insider builds
- Outdated Windows versions

Additionally, Virtualization-Based Security (VBS) must be enabled and active. Without VBS, the Valthrun Zenith Driver will not function.

## Checking requirements

The easiest way to confirm system compatibility is by using the Valthrun Zenith Installer. It checks all the requirements mentioned above and automatically suggests solutions if any are not met.

To check requirements, run the installer as administrator and select `Setup System / Check Compatibility`.  
If everything is okey you will see the following message:

```
Your system is ready to be started with Zenith
```

![Zenith Installer Requirements Ok](@site/docs/_media/zenith_installer_requirements_ok.png)
