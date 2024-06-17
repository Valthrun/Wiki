# Vulkan driver issues
Especially AMD users and some nvidia users may experience some issues when trying to run the Valthrun controller.  
This issue manifest in various error messages, but two common ones are:
- `Unable to find a Vulkan driver`
- `Failed to load vulkan-1.dll (os error 14001)`
- The overlay is just black instead of being transparent

The precise cause of these issues remains unknown, leading to an absence of a universally accepted solution.  
However, various methods have been reported by some users as effective in addressing these problems.  

## Potential Solutions

### Using AMD's Pro Drivers
For certain users encountering this issue, employing AMD's professional-grade drivers may offer a solution.  
To install the AMD pro drivers, use DDU (Display Driver Uninstaller) and install the AMD pro drivers.

### Copying vulkan-1.dll from Chrome
Another approach that has been successful for some users is copying the "vulkan-1.dll" file from their local installation of the Google Chrome web browser and pasting it into the directory where the "controller.exe" for Valthrun is located. 
This method has resolved the issue for some, making it a potential workaround for those experiencing driver-related problems.  
  
The `vulkan-1.dll` shipped with Chrome can usually be found in the following folder:  
`C:\Program Files (x86)\Google\Chrome\Application\` followed by a folder with the Chrome version number.  
  
:::note
If this does not solves your issue, ensure you're deleting the `vulkan-1.dll` located along with the `controller.exe`.  
Keeping the `vulkan-1.dll` may cause some issues on its own.
:::

### Installing the Vulkan Runtime
Another possible solution, especially when you get a Vulkan error might be, to install the Vulkan Runtime.  
The Vulkan Runtime can be obtained here: https://vulkan.lunarg.com/sdk/home  
Download and install the `Runtime - Runtime Installer`.  
![Vulkan Runtime](../../_media/screenshot_vulkan_runtime.png)

### Downgrading AMD Driver to 23.7.1
For some affected users, downgrading the AMD driver to version 23.7.1 has proven to be a viable solution.  
To perform this downgrade, users can obtain the driver from the official AMD website or via the following link:
[AMD Driver 23.7.1](https://www.amd.com/en/support/kb/release-notes/rn-rad-win-23-7-1)

Discord discussion:  
https://discord.com/channels/1135362291311849693/1135362291311849698/1154795646344241303

## Configuring Vulkan using Vulkan Configurator / Opening Vulkan Configurator for detection problems and FPS issues
Another possible solution for any AMD Driver version is directly configuring how vulkan interacts with the controller application or just opening up the configurator alone for some reason has something to do with how vulkan acts with the controller.
If opening up the Vulkan Configurator alone doesn't help users situation, following the steps below could prove viable for getting most versions of drivers to work

I have now fixed vulkan detection and low fps issues using the Vulkan configurator, this is what worked for me it may not work for everyone its just my findings. 

### Fixing vulkan detection issues
1. Step 1 - click any of the three configurations  
![image](https://github.com/Valthrun/Wiki/assets/60718218/8e5af2be-9d01-4df5-a5b2-7ab1eba4ecda)

2. Step 2 - Next go to application launcher and click the 3 dots circled in the image  
![image](https://github.com/Valthrun/Wiki/assets/60718218/99f63152-6820-4245-a7f4-f4343a834da2)

3. Step 3 - click add and add the controller.exe file as an option  
![image](https://github.com/Valthrun/Wiki/assets/60718218/4a292d93-3566-418b-b9b7-6bea549c6a35)

4. Step 4 - press launch 

### Fixing FPS issues
1. Step 1 - open vulkan configurator 

2. Step 2 - you will see an area that says vulkan layers configurations go to portability, synchronization, and validation and set each one to Reduced-overhead preset in the settings 
![image](https://github.com/Valthrun/Valthrun/assets/60718218/76e5023f-874a-4376-9d8a-4dcfb69497cd)

3. Step 3 - as stated in detection problems use one of the three options that you just configured to see which works for you. (usually portability or synchronization) 



