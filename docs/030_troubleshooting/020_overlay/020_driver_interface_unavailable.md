---
title: Driver Unavailable
---

# Driver Unavailable

## What this means

This error indicates that the Valthrun Driver can not be reached.
Depending on the Valthrun Driver you are using please apply one of the following solution.

## How to fix

How to resolve this issue depends on which Valthrun driver you are using.

### Valthrun Zenith Driver

There can be two different reasons, why the Zenith Driver can not be reached:

1. The Zenith driver has not been loaded.
2. The Zenith driver interface does not match your driver

### Valthrun Kernel Driver

Most certenly this error is caused because the kernel driver (`valthrun-driver.sys`) has not been loaded or failed to load.  
Common pifalls are:

- Simply forgot to map the driver  
  You may just forgot to map the driver. Information on how to load the driver can be found [here](../../../getting-started/driver).  
  :::note
  You have to map the driver again after you restarted your PC.
  :::

- While mapping the driver an error occurred  
  Ensure that the process of mapping the driver was successfull.  
  As example for mapping with the kdmapper, you should expect to see the following line after mapping the driver:  
  `[+] DriverEntry returned 0x0`
