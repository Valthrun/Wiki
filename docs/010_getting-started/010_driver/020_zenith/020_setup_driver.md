# Create a Zenith bootable USB stick

To load the Valthrun Zenith Driver, users must create a bootable USB stick using the Valthrun Zenith UEFI loader. This USB stick is prepared with the Valthrun Zenith installer and serves as the boot medium to initiate the driver. Follow the steps below to create the boot medium:

## Create the bootable USB stick

:::danger
This operation will erase all data stored on your USB stick.  
Ensure that the USB stick is empty or you do not need the data any more!
:::

### Step 1: Obtain the Zenith installer

In this step, we'll download the latest Zenith driver files from the official Valthrun homepage.

1. Visit the [Downloads](https://valth.run/download) page.
2. Download the latest `Zenith Driver` pacage.
3. Extract the file including the installer from the downloaded ZIP file.

### Step 2: Creating the bootable USB stick

After downloading Zenith from the Valthrun homepage we will need to create a bootable USB flash drive.
We'll use the Zenith installer to create the Zenith USB drive.

1. **Run the installer as Administrator**  
   Right click the Zenith Installer and run it as administator.

2. **Select `Create Zenith Boot Medium (USB-Stick)`**  
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
   Your USB stick is not bootable and will load the Zenith driver. You can now restart the system and boot via your created Valthrun Zenith bootable USB stick.

   :::tip
   It is recommended to remove the USB stick once the Zenith Driver has been loaded. This prevents any applications from scanning your USB stick later.
   :::
