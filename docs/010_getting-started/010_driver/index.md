---
title: Setup the driver
---

# Setup the driver
In order for user-mode applications, such as the [Valthrun CS2 overlay](../../products/cs2/overlay) or the [Valthrun CS2 Web Radar](../../products/cs2/web_radar), to access the memory of other processes, a driver is required. The Valthrun suite provides multiple implementations of such drivers, tailored to different circumstances and requirements of the target processes. Each implementation is designed to handle specific scenarios, ensuring optimal performance and compatibility based on the security and protection measures in place for the processes you wish to attach to.  
  
Even though Valthrun offers a variety of drivers, you only need to load one driver.  
Currently, the most convenient option is to use the [Valthrun Kernel Driver](./kernel/).