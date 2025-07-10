---
title: Quickstart via Valthrun Loader
---

# Quickstart via Valthrun Loader
The Valthrun Loader is a utility designed to automate the setup of several Valthrun components. It handles tasks such as:
- Loading a memory driver (currently only the Kernel Driver)
- Downloading the appropriate driver interface
- Downloading and launching enhancers
- Keeping related applications up to date

:::note
Currently the Valthrun Loader does not support the Zenith Driver, which is designed to bypass typical OS-level detection mechanisms. For instructions on how to set up Zenith, please refer to the [Zenith Driver documentation](/drivers/implementation/zenith/).
:::


## Obtaining the Valthrun loader
You can download the latest version of the Valthrun Loader from the official homepage:  
https://valth.run/download

## Getting Started with CS2
The Valthrun Loader supports all CS2-related enhancers, including:
- [The overlay](/utilities/enhancers/cs2_overlay/)
- [The web radar](/utilities/enhancers/cs2_radar_standalone/)

To launch enhancers quickly, predefined profiles are available. These profiles:
- map the Valthrun Kernel Driver using KDMapper
- launch CS2 automatically,
- and start the selected enhancer

### Step-by-Step Guide
1. Start the loader  
   Double-click the Valthrun Loader executable. Confirm the UAC prompt by clicking “Yes”.  

   ![screenshot step 1](@site/docs/_media/valthrun_loader_qs_step_1.png)

2. Select "Quick start with predefined profiles"  
   Use the arrow keys to highlight this option, then press Enter.  

   ![screenshot step 2](@site/docs/_media/valthrun_loader_qs_step_2.png)

3. Choose a profile  
   Navigate with the arrow keys to the desired profile and press Enter.  
   If you encounter any issues during setup or usage, refer to the appropriate troubleshooting sections in the Wiki or ask for help in the [Discord](/general/discord) server.

   ![screenshot step 3](@site/docs/_media/valthrun_loader_qs_step_3.png)  
   