# Zenith Driver Interface

To use the Zenith Driver with Valthrun applications, follow these steps **after successfully creating a Zenith bootable USB stick and booting from it.**
Once these steps are completed, your application will be ready to interface securely with the Valthrun Zenith Driver.

## 1. Prepare the Zenith Driver Interface

1. Locate the file named `driver_interface_zenith_[...].dll` included in the Zenith package downloaded from the official Valthrun website.  
2. Place this file in the **same directory as your Valthrun application**.

:::note
Ensure that the **driver interface version** matches the version of the Zenith Installer used to create your bootable USB stick.  
Version mismatches will lead to **incompatibility** and the driver may fail to load.
:::

### Optional: Rename the Interface File

You may rename the file `driver_interface_zenith_[...].dll` to `driver.dll` for simplicity or to obscure its purpose.

:::danger
Do **not** rename the file to any other name.  
Otherwise, the Valthrun application will fail to detect the Zenith user-mode adapter.
:::

## 2. Verify a Clean Application Directory

Before launching your Valthrun application, ensure that the application directory **does not contain any other files** that:

- Start with `driver_`  
- End with `.dll`

Such files can **conflict with or override** the Zenith user-mode adapter during operation.
