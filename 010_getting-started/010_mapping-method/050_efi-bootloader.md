# Using the Valthrun EFI loader
Mapping the Valthrun driver by using the Valthrun EFI loader is the most secure and esiest way to map the Valthrun driver.  
To map the Valthrun driver with the Valthrun EFI loader, follow these steps:

## ATTENTION  {docsify-ignore}
**Ensure software which scans for system integrity on a kernel based level (e.g. kernel anticheats) are disabled before proceeding!**  
  
Failing to do so may result in such software "flagging" your system.  
The publically available Valthrun driver is not designed to be stealhy!  
Some such driver vendors might block unsigned drivers for security reasons.
By using this EFI loader the Valthrun driver will be loaded with highest priority before any other installed driver.
  

# Initial setup
Creating a USB stick containing the Valthrun EFI loader is a quite straight forward but yet complex process.   
Please follow each step closely to avoid any issues.  

## Step 1: Obtain the bootloader
In this step, we'll download the latest Valthrun EFI loader from GitHub.
1. Visit the [GitHub Release](https://github.com/Valthrun/Valthrun/releases/latest) page.
2. Download the latest Valthrun EFI loader.
3. Extract the ISO file from the downloaded ZIP file.

## Step 2: Creating bootable flash drive
After downloading the Valthrun EFI loader from GitHub we will need to create a bootable USB flash drive.
We'll use the Rufus utility to burn the previously obtained ISO to a USB drive.
1. Download Rufus  
   Download Rufus from [the official Rufus website](https://rufus.ie/en/).
   
2. Prepare a flash drive  
   Ensure you have a flash drive that is not currently in use, as ***all data on it will be wiped***.  
   Insert the flash drive into your computer.

3. Launch Rufus  
   Open the previously downloaded Rufus application.

4. Configure Rufus  
We need to adjust some of the following settings:
   - Device Selection: Your USB stick  
     Select your flash drive from the list of devices.
   - Boot Selection: Valthrun EFI loader path  
     Click on the "SELECT" button to choose the extracted ISO image.
   - Partition Scheme: `GPT`
   - File System: `FAT32`  
  
If done everything correctly, Rufus should look like this:  
<img src="../../_media/screenshot_uefi_rufus.png" alt="screenshot_uefi_rufus" width="300"/>

1. Create your Valthrun EFI loader USB stick  
   Click on the "START" button in Rufus to create your bootable flash drive.  
   Please wait until the process is completed.

## Step 3: Boot from your flash drive
After creating our bootable flash driver with the Valthrun EFI loader we need to boot from it. You'll need to do this every time you want to load Valthrun when starting your PC.
1. Restart your PC  
   Once the bootable flash drive is ready, restart your computer.

2. Enter the boot menu  
   During the boot process, access the boot menu by pressing the appropriate key for your motherboard (commonly F12, F10, or Esc).

3. Select the Flash Drive  
   In the boot menu, select your flash drive as the boot device.  
   After selecting the flash drive, you'll boot using the Valthrun EFI loader.

## Step 4: Enroll hash (only when secure boot is activated)
Once you've completed the steps above and you successfully booted from your freshly burned Valthrun EFI loader USB stick you should see the following.  
Note: If you do not have secure boot enabled, you have to skip this step!  
![image](../../_media/screenshot_uefi_loader_failed.png)  

1. Enroll the loader hash  
To enroll the hash of the loader fistly select in the main menu `Enroll Hash` and press `ENTER`. 
You'll then be prompted which binaries hash you want to enroll. Use your arrow keys to select `loader.efi`. 
Press `ENTER` to select the file. You'll be prompted if you want to enroll the hash into the MOK database. Confirm this by selecting `yes` and press `ENTER`.

1. Reboot system
Once enrolled, you can select the `Reboot System` option from the main menu to reboot the system.  
Attention: You may have to again select the Valthrun EFI loader within the boot menu (see [step 3](#step-3-boot-from-your-flash-drive))

<details>
  <summary>Show image guide</summary>
   <img style="display: block" src="../../_media/screenshot_uefi_loader_menu.png" alt="screenshot_uefi_loader_menu" />
   <img style="display: block" src="../../_media/screenshot_uefi_loader_enrol.png" alt="screenshot_uefi_loader_enrol" />
   <img style="display: block" src="../../_media/screenshot_uefi_loader_enrol_yes.png" alt="screenshot_uefi_loader_enrol_yes" />
</details>

## Step 5: Verify Valthrun has been loaded
If you managed to successfully load Valthrun via the efi, you should see the following screen.  
Press `F10` to normally boot Windows. The Valthrun kernel driver will be loaded as soon as Windows boots up.
![image](../../_media/screenshot_uefi_mapped_successfully.png)  
  
**Pro Tip**:  
You may remove the USB stick before pressing `F10` to improve stealhness.  
From this step onwards you do not need the USB drive untill next system start.

# Mapping Valthrun again after reboot
With every system shutdown the Valthrun driver will be unloaded.  
You'll have to boot via the Valthrun EFI loader to load the Valthrun driver on system start.  
You can ether do this by selecting the Valthrun EFI loader manually every time (see [step 3](#step-3-boot-from-your-flash-drive)) or change the boot order of your system.
