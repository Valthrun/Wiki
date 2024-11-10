---
title: Driver Interface Missing
---

# Driver Interface Missing

## What this means

The Valthrun application is looking for a special file (called a "driver interface") that it needs to work correctly. When it can't find this file, it throws this error. This file is essential for Valthrun to communicate with the driver.

More about the [driver interface](../../getting-started/architechture#valthrun-driver-interface) can be read [here](../../getting-started/architechture#valthrun-driver-interface).

## How to fix

1. Locate the driver interface file  
   Make sure you have the correct driver interface file that looks like this: `driver_[...].dll`.
   This file is provided by the Valthrun driver as part of the download package or can be manually downloaded on the Valthrun portal.

2. Put the file in the right place  
   Place the `driver_[...].dll` file in the same folder where you are running the current Valthrun application.

3. Check for typos  
   Be sure that the filename and folder names are correct. The application won’t find the file if there are spelling errors. Ensure the driver file starts with `driver_` and ends with `.dll` the file extension.
