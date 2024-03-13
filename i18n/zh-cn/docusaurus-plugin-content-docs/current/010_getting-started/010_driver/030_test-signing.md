# 使用 Windows 测试签名加载 Valthrun 驱动程序
## 什么是 Windows 测试签名
Windows 测试签名是 Windows 操作系统中的一种模式，允许用户加载和测试未经微软数字签名的驱动程序。在正常操作中，Windows 要求驱动程序必须经过数字签名，以确保其真实性和完整性。测试签名通过放宽对驱动程序签名的要求，允许加载自签名驱动程序。

## 如何启用 Windows 测试签名
要在 Windows 中启用测试签名模式，可以按照以下步骤操作：
1. 以管理员身份运行命令提示符
   右键单击“开始”按钮，选择“命令提示符 (管理员)”或“Windows PowerShell (管理员)”。

2. 启用测试签名
   在命令提示符窗口中，键入以下命令并按 `Enter` 键：
   ```cmd
   bcdedit /set testsigning on
    ```

3. 重新启动计算机 
   输入命令后，需要重新启动计算机，以使更改生效。
   键入以下命令并按 Enter 即可：
   ```cmd
   shutdown /r /t 0
   ```

4. 验证测试签名模式
   计算机重新启动后，Windows 应处于测试签名模式。 
   您可以通过检查桌面上是否出现测试模式水印来验证。 
   如果在桌面右下角看到 "测试模式 "水印，则表示测试签名模式已启用。

## 加载 Valthrun 驱动程序
要加载 Valthrun 内核驱动程序，必须执行以下步骤：
1. 以管理员身份运行命令提示符
   Right-click on the Start button and select "Command Prompt (Admin)" or "Windows PowerShell (Admin)" to open an elevated command prompt with administrator privileges.

2. 注册并启动 Valthrun 驱动程序
   在命令提示符窗口中，键入以下命令并按 Enter 键：
   ```cmd
    sc create valthrun type= kernel binpath="C:\Users...\valthrun-driver.sys"
    sc start valthrun 
    ```