# Using EFI bootloader to load the Valthrun driver

**Pre-requisites**  
   Before proceeding, there are several important steps and requirements to be aware of:

   - **Kernel Anti-Cheats**  
   Ensure all kernel anti-cheats are disabled before proceeding. Failing to do so may result in your system being flagged.

   - **Secure Boot**  
   Disable Secure Boot in your system's BIOS to allow the Valthrun driver to load correctly.  


1. **Obtain the bootloader**
   1. Download the bootloader ZIP file [here](https://cdn.discordapp.com/attachments/1135362291311849698/1212028280463564810/valthrun-bootloader-master-fac0fd0.zip?ex=65f0584c&is=65dde34c&hm=11a7087fbaca49c3fe8be7d020abc692e46723311e56d04880a6f7606467a83d&).
   2. Extract the ISO file from the downloaded ZIP file.

2. **Creating bootable Flash Drive**  
   1. **Obtain Rufus:** Download Rufus from [the official Rufus website](https://rufus.ie/en/) to create a bootable flash drive.
   2. **Prepare a flash drive:** Ensure you have a flash drive that is not currently in use, as all data on it will be wiped. Insert the flash drive into your computer.
   3. **Launch Rufus:** Open the Rufus application.
   4. **Configure Rufus**
      - **Device Selection:** Select your flash drive from the list of devices.
      - **Boot Selection:** Click on the "SELECT" button to choose the extracted ISO image.
      - **Partition Scheme:** Choose the "GPT" partition scheme from the dropdown menu.
      - **File System:** Select "FAT32" as the file system.
   5. **Start the process:** Click on the "START" button in Rufus to create your bootable flash drive. Please wait until the process is completed.
  
3. **Boot from Flash Drive**
   1. **Restart your PC:** Once the bootable flash drive is ready, restart your computer.
   2. **Access Boot Menu:** During the boot process, access the boot menu by pressing the appropriate key for your motherboard (commonly F12, F10, or Esc).
   3. **Select the Flash Drive:** In the boot menu, select your flash drive as the boot device.
      - After selecting the flash drive, the Valthrun driver will load automatically. Your Windows should boot shortly after.
