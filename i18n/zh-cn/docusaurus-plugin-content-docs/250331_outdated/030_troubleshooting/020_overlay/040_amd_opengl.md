# Vulkan 驱动程序问题
一些 AMD 用户在尝试执行 Valthrun 控制器时，可能会遇到一些问题。
这个问题表现为各种错误信息，但常见的有两种：
- `Unable to find a Vulkan driver`
- `Failed to load vulkan-1.dll (os error 14001)`
- 叠加层只是黑色而不是透明的

这些问题的确切原因仍不清楚，因此没有一个普遍接受的解决方案。 
不过，据一些用户报告，有多种方法可以有效解决这些问题。

# 可能的解决方案

## 1. **使用 AMD's Pro 驱动**
对于遇到此问题的某些用户，使用 AMD 的专业级驱动程序可能会提供一种解决方案。 
要安装 AMD 专业驱动程序，请使用 DDU（显示驱动程序卸载程序）并安装 AMD 专业驱动程序。

## 2. **从 Chrome 浏览器复制 vulkan-1.dll**
对一些用户来说，另一种成功的方法是从本地安装的 Google Chrome 浏览器中复制 `vulkan-1.dll` 文件，并将其粘贴到 Valthrun 的 `controller.exe` 所在的目录中。
这个方法已经解决了一些人的问题，对于那些遇到驱动程式相关问题的人来说，这是一个潜在的解决方法。

Chrome 浏览器附带的 `vulkan-1.dll` 通常可以在以下文件夹中找到：  
`C:\Program Files (x86)\Google\Chrome\Application\` 后面是一个带有 Chrome 版本号的文件夹。

**提示:**  
如果这还不能解决你的问题，请确保你删除了与 `controller.exe` 位于一起的 `vulkan-1.dll`。 
保留 `vulkan-1.dll` 本身可能会导致一些问题。

## 3. **安装 Vulkan 运行时**
另一个可能的解决方案是安装 Vulkan Runtime，尤其是在出现 Vulkan 错误时。
可从此处获取 Vulkan Runtime：https://vulkan.lunarg.com/sdk/home  
Download and install the `Runtime - Runtime Installer`.  
![Vulkan 运行时](@site/docs/_media/screenshot_vulkan_runtime.png)

## 4. **将 AMD 驱动程序降级至 23.7.1**
对于一些受影响的用户，将 AMD 驱动程序降级到 23.7.1 版已被证明是一个可行的解决方案。 
要执行降级，用户可从 AMD 官方网站或通过以下链接获取驱动程序：
[AMD 驱动程序 23.7.1](https://www.amd.com/en/support/kb/release-notes/rn-rad-win-23-7-1)

Discord 讨论:  
https://discord.com/channels/1135362291311849693/1135362291311849698/1154795646344241303

## 5. **Configuring Vulkan using Vulkan Configurator / Opening Vulkan Configurator for detection problems and FPS issues**
Another possible solution for any AMD Driver version is directly configuring how vulkan interacts with the controller application or just opening up the configurator alone for some reason has something to do with how vulkan acts with the controller.
If opening up the Vulkan Configurator alone doesn't help users situation, following the steps below could prove viable for getting most versions of drivers to work

I have now fixed vulkan detection and low fps issues using the Vulkan configurator, this is what worked for me it may not work for everyone its just my findings. 

### Fixing vulkan detection issues
Step 1 - click any of the three configurations  
![image](https://github.com/Valthrun/Wiki/assets/60718218/8e5af2be-9d01-4df5-a5b2-7ab1eba4ecda)

Step 2 - Next go to application launcher and click the 3 dots circled in the image  
![image](https://github.com/Valthrun/Wiki/assets/60718218/99f63152-6820-4245-a7f4-f4343a834da2)

step 3 - click add and add the controller.exe file as an option  
![image](https://github.com/Valthrun/Wiki/assets/60718218/4a292d93-3566-418b-b9b7-6bea549c6a35)

Step 4 - press launch 

### Fixing FPS issues
step 1 - open vulkan configurator 

step 2 - you will see an area that says vulkan layers configurations go to portability, synchronization, and validation and set each one to Reduced-overhead preset in the settings 
![image](https://github.com/Valthrun/Valthrun/assets/60718218/76e5023f-874a-4376-9d8a-4dcfb69497cd)

step 3 - as stated in detection problems use one of the three options that you just configured to see which works for you. (usually portability or synchronization) 



