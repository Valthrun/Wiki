---
title: AMD Hotfixes (RX 7000 Series)
---

# AMD Driver Issue Fix (06/17/2024)

Hotfix for AMD 7000 Series GPUs (7800 XT Specifically)

Note that you still might have to mess around with the previous fixes first (Vulkan fixes, Vulkan DLL, etc.)

# Instructions
1. Completely uninstall your previous AMD drivers (using AMDs cleanup utility OR DDU)
2. Download the 23.9.1 OR 23.9.2 AMD Drivers (for RX 7000 Cards)
3. Install the drivers and restart your machine after install
4. Use Valthrun as normal

# Disclaimer
This has only really been tested on 1 machine which has the following specifications
1. Radeon RX 7800 XT
2. Intel i5-13600K
3. Windows 10 Pro

The only thing I have done outside of the steps listed above was changing the Vulkan-1.dll file to the Chrome version.
Otherwise, this fix should resolve a lot of your issues, along with keeping decent frames (getting about 200-300+ FPS)

Credit:	CardX / SuiteXL