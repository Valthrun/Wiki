---
title: Getting started
---

# How to Use Valthrun

To use the various game enhancers provided by Valthrun, you will need to follow several steps to set up all the required components.  
The following steps will guide you one by one on how to use Valthrun.

## Required Components

Before you can use Valthrun, you must acquire two essential components:

1. **Valthrun Driver**  
   The Valthrun driver is the crucial part of Valthrun.
   It supports stealthy arbitrary read operations on the Counter-Strike 2 process and prevents other software like VAC from detecting these operations. A list of available drivers and a comprehensive overview on which driver to chose can be found in the [drivers section](./driver).

2. **Desired gameplay enhancer**  
   Valthrun offers multiple different gameplay enhancers.  
   A list of enhancers can be found in the [applications section](./applications/)

You can download the latest releases of the above mentioned components from the [Valthrun homepage](https://valth.run/).

## Quick guide for the CS2 ingame overlay

Once you have acquired the necessary files mentioned above, follow these steps to run the Valthrun overlay:
:::tip
Lazy doing all these steps manually?
Automate everything effortlessly with Valthrunner's script by [@valthrunner](https://github.com/valthrunner).
Update Valthrun, map the driver, auto-start CS2, and run Valthrun with just a click!
More information can be found here: [Valthrunner's Script](./community_script_valthrunner)
:::
:::note
If you encounter any issues while following this quick setup guide, please refer to the more detailed documentation for that specific step.
:::

1. **Setup one of the Valthrun driver**  
   Valthrun drivers are the centerpiece of Valthrun.
   They enable undetected arbitrary read operations on the Counter-Strike 2 process and prevents detection by other software, such as VAC.
   There are multiple ways to load the kernel driver. Instructions on how to load the kernel driver, are documented [here](./driver/).

2. **Download the latest CS2 ingame overlay version**  
   Download the latest CS2 ingame overlay from GitHub:  
   https://github.com/Valthrun/Valthrun/releases/tag/latest  
   The file is called `controller.exe`.
   :::warning
   Ensure that you place the controller.exe in the same folder as the drivers interface `.dll` file.  
   (e.g. `driver.dll`, `driver-zenith.dll` or `driver-kernel.dll`)
   :::

3. **Ensure Counter-Strike 2 is Running**  
   Before starting the Valthrun overlay, make sure that Counter-Strike 2 (CS2) is running.
   If CS2 is not already running, launch the game, as the controller will not run if CS2 is not running.

4. **Start the Overlay (`controller.exe`)**  
   Once the kernel driver has been successfully loaded, and CS2 is up and running,
   you can start the Valthrun overlay by running `controller.exe`.
   If everything is set up correctly, you should see a terminal window.

Here's an example of what the overlay's interface might look like:
![Screenshot of Success](@site/docs/_media/screenshot_controller_success.png)

With these steps completed, you are now ready to use Valthrun and take advantage of its gameplay enhancements for Counter-Strike 2.  
Be sure to consult the project's documentation and support resources for more detailed information on its functionality and usage.
