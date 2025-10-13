# Boot with Zenith

By default, your system does not automatically load the Valthrun Zenith Driver, and the driver **does not persist across restarts**.
To use Zenith, you must boot your computer from the Valthrun Zenith USB stick that you created during installation.

## 1. Load Zenith on system startup

To load the Valthrun Zenith Driver, start your computer and boot from the Zenith USB stick.

## 2. Power-Cycle your TPM
:::note
This step only applies if you are using a dedicated, modified TPM that can be manually power-cycled to reset its internal state.
For a more detailed explanation, see [TPM Power-Cycle](../advanced-topics/tpm_power_cycle).
:::

When the message `Awaiting TPM PCR registers being cleared...` appears, press the button on your TPM module to perform the reset.
After the reset, the TPM will reinitialize, and its PCR registers will be cleared.

If the process is successful, your screen should look similar to this:
![Awaiting TPM power-cycling](@site/docs/_media/zenith_boot_power_cycle.png)

## 3. Unplug Zenith USB stick

When you see the following message on screen, remove the Zenith USB stick and press `F10` to continue booting.

![Zenith Loader Ok](@site/docs/_media/zenith_loader_status_remove_usb.png)

Removing the Zenith USB stick prevents any applications from scanning your USB stick later and looking for signatures. Thus Zenith can ensure that at system startup none of the Zenith driver related data is visible to the operating system.

## 4. Verify load success

If Zenith has loaded correctly, you’ll see the following message:
![Zenith Loader Ok](@site/docs/_media/zenith_loader_status_ok.png)
Windows will automatically continue booting after five seconds.

:::note
If you do not see this message, Zenith failed to load!  
Under some circumstances no explicit error will be shown.  
Please seek help on our Discord.
:::

## 5. Verify Zenith at Runtime (Optional)
After Windows has booted, you can verify that the Zenith Driver is active using the Zenith Installer.
1. Run the installer as Administrator.
2. Select the option `Zenith Integrity Check.`

If everything is functioning properly, you’ll see the following output:
```
##############################################
#    Valthrun Zenith successfully loaded!    #
##############################################
```