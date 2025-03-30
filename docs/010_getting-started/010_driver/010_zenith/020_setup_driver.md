# Create a Zenith bootable USB stick

To use the Valthrun Zenith Driver, users must

1. create a bootable USB stick containing the Zenith UEFI loader
2. create a secondary local bootloader to chainload the Zenith USB stick

Both will be automatically done by the Valthrun Zenith Installer.  
Follow the steps below to install Zenith on your system:

:::danger
This operation will erase all data stored on your USB stick.  
Ensure that the USB stick is empty or you do not need the data any more!
:::

:::warning
If you already have a secondary bootloader e.g. GRUB2 installed the installation may fail.  
Please contact us on Discord.
:::

## Install Zenith

### Step 1: Obtain the Zenith installer

In this step, we'll download the latest Zenith driver files from the official Valthrun homepage.

1. Visit the [Downloads](https://valth.run/download) page.
2. Download the latest `Zenith Driver` pacage.
3. Extract the file including the installer from the downloaded ZIP file.

### Step 2: Installing Valthrun Zenith

After downloading Zenith from the Valthrun homepage we will need to create a bootable USB flash drive and setup a secondary local bootloader.
We'll use the Zenith installer to do both for us.

1. **Run the installer as Administrator**  
   Right click the Zenith Installer and run it as administator.

2. **Select `Install Zenith`**  
   When the installer is executed you are prompted with the operation you want to perform.
   Use the arrow keys to select `Create Zenith Boot Medium (USB-Stick)` and press `Enter`.

   ![Image Option Select](@site/docs/_media/zenith_installer_boot_medium_select.png)

3. **Select your target USB stick**  
   Select the USB stick which you want to use to create the Zenith boot USB stick.

   ![Image Select USB](@site/docs/_media/zenith_installer_boot_medium_select.png)

4. **Confirm your selection**  
   **Verify** and confirm that you have selected the right USB stick.  
   Type `y` and hit `Enter` to confirm. Once confirmed all data on that USB stick is erased!

   ![Image Select USB](@site/docs/_media/zenith_installer_boot_medium_confirm.png)

5. **Wait until completion**  
   The Zenith installer now creates a bootable USB stick with Zenith. Please wait and **do not remove** the USB stick until `Bootable device created.` is shown.

   ![Image Select USB](@site/docs/_media/zenith_installer_boot_medium_success.png)

6. **Success**  
   Valthrun Zenith has been successfully installed. You can now restart the system and boot via the new boot option called "Ubuntu". Ensure you've your Zenith bootable USB stick plugged in!

   :::note
   Please remove the USB stick once the Zenith Driver has been loaded. This prevents any applications from scanning your USB stick later.
   :::
