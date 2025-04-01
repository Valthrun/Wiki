# Boot with Zenith

The Valthrun Zenith Driver has to be loaded on every system start and is unloaded upon system shutdown.

## 1. Load Zenith on system startup

To load it, boot the system via the new "Ubuntu" EFI entry. Ensure you've the Valthrun Zenith USB stick plugged in! This can be done by either manually selecting the "Ubuntu" EFI option at each boot or adjusting the system’s boot order to prioritize the Zenith loader for automatic loading on each startup.

## 2. Unplug Zenith USB stick

Wait until you see the following message on the screen. If you do so, please remove the Zenith USB stick and press `F10` to continue booting.

![Zenith Loader Ok](@site/docs/_media/zenith_loader_status_remove_usb.png)

Removing the Zenith USB stick prevents any applications from scanning your USB stick later and looking for signatures. Thus Zenith can ensure that at system startup none of the Zenith driver related data is visible to the operating system.

## 3. Verify load success

If you have successfully booted with Zenithand see the following message, the Valthrun Zenith Driver has been loaded successfully. Windows will continue to boot in 5 seconds.

![Zenith Loader Ok](@site/docs/_media/zenith_loader_status_ok.png)

:::note
If you do not see this message, Zenith failed to load!  
Under some circumstances no explicit error will be shown.  
Please seek help on our Discord.
:::
