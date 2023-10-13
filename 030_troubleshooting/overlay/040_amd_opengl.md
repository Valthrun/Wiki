# AMD 驱动问题
一些 AMD 用户在尝试执行 Valthrun 控制器时，可能会遇到一些问题。
这个问题表现为各种错误信息，但常见的有两种：
- `Unable to find a Vulkan driver`
- `Failed to load vulkan-1.dll (os error 14001)`
- 叠加层只是黑色而不是透明的

这些问题的确切原因仍不清楚，因此没有一个普遍接受的解决方案。 
不过，据一些用户报告，有多种方法可以有效解决这些问题。

# 可能的解决方案

## 1. **将 AMD 驱动程序降级至 22.11.2**
对于一些受影响的用户，将 AMD 驱动程序降级到 22.11.2 版已被证明是一个可行的解决方案。 
要执行降级，用户可从 AMD 官方网站或通过以下链接获取驱动程序：
[AMD 驱动程序 22.11.2](https://www.amd.com/de/support/kb/release-notes/rn-rad-win-22-11-2)

Discord 讨论：
https://discord.com/channels/1135362291311849693/1135362291311849698/1154795646344241303

## 2. **使用 AMD's Pro 驱动**
对于遇到此问题的某些用户，使用 AMD 的专业级驱动程序可能会提供一种解决方案。 
要安装 AMD 专业驱动程序，请使用 DDU（显示驱动程序卸载程序）并安装 AMD 专业驱动程序。

## 3. **从 Chrome 浏览器复制 vulkan-1.dll**
对一些用户来说，另一种成功的方法是从本地安装的 Google Chrome 浏览器中复制 `vulkan-1.dll` 文件，并将其粘贴到 Valthrun 的 `controller.exe` 所在的目录中。
这个方法已经解决了一些人的问题，对于那些遇到驱动程式相关问题的人来说，这是一个潜在的解决方法。
  
Chrome 浏览器附带的 `vulkan-1.dll` 通常可以在以下文件夹中找到：  
`C:\Program Files (x86)\Google\Chrome\Application\` 后面是一个带有 Chrome 版本号的文件夹。
  
**提示:**  
如果这还不能解决你的问题，请确保你删除了与 `controller.exe` 位于一起的 `vulkan-1.dll`。 
保留 `vulkan-1.dll` 本身可能会导致一些问题。