# Application Setup

To use the Zenith driver with the Valthrun applications, follow these steps after successfully creating a Zenith bootable USB stick and booting of it

## 1. Prepare the Zenith Driver Interface

- Locate the `driver_interface_zenith_[...].dll` file provided with the Zenith package which has been downloaded from the official Valthrun homepage.

- Place this file in the same directory as the Valthrun application.

### File Renaming (Optional):

You may rename `driver_interface_zenith_[...].dll` to `driver.dll` for simplicity and obscurity.

:::danger
Do not rename it to any other name!  
Otherwise the Valthrun application will fail to recognize the Zenith user mode adapter.
:::

## 2. Ensure Directory Cleanliness

Ensure there are no other files in the application directory that:

- Start with `driver_` and end in `.dll`

If such files are present, they might conflict with or replace the Zenith user mode adapter during operation.
