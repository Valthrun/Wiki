# 使用 KDMapper 加载 Valthrun 驱动程序

[KDMapper](https://github.com/TheCruZ/kdmapper) 是手动将 Valthrun 驱动程序加载到内存中的推荐方法。
这个简单的工具利用 `iqvw64e.sys` 这个有漏洞的 Intel 驱动程序来映射未签名的驱动程序。这意味这你可以载入任意驱动，包括 Valthrun 驱动。
要使用 KDMapper 映射 Valthrun 驱动程序，请遵循以下步骤：

1. **获取 KDMapper**  
   在使用 KDMapper 之前，您需要 KDMapper 的可执行文件。 
   KDMapper 官方资源库不提供下载链接，因此您有两个选择：
   - **自行编译（推荐）**  
   为提高安全性和可信度，建议自行编译 KDMapper。
   您可以在 [KDMapper 官方仓库](https://github.com/TheCruZ/kdmapper)中找到编译 KDMapper 的详细说明。
   自行编译可确保您能控制源代码并验证其完整性。
   
   - **下载预编译版本**  
   您还可以在[此处](https://github.com/valthrunner/Valthrun/releases/latest)找到 KDMapper 的预编译版本。
   请注意，该预编译版本并非由 Valtrun 提供，而是由用户 @valthrunner 编译并上传的。
   下载预编译软件时，请务必小心谨慎，并确保您信任源代码。

1. **以管理员身份打开命令行**  
   要成功运行 KDMapper，请使用管理员权限打开命令行。
   您可以右键单击**命令提示符**或 **PowerShell**，然后选择“**以管理员身份运行**”。

1. **导航至 Valthrun 目录**  
   在使用 KDMapper 载入 Valthrun 驱动程序之前，请确保你已进入 kdmapper.exe 和 valthrun-driver.sys 所在的目录。
   使用 `cd` 命令导航到这些文件所在的目录，确保 KDMapper 能够访问驱动程序加载过程所需的组件。

1. **使用 KDMapper 加载 `valthrun-driver.sys`**  
要将 Valthrun 驱动程序加载到内存中，请在命令提示符或 PowerShell 中执行以下命令：
```bash
kdmapper.exe valthrun-driver.sys
```
  
如果操作成功，输出结果应如下所示：
```
[<] Loading vulnerable driver, Name: SaBVbLkOxDxwTNNOsSPnmMW
[+] NtLoadDriver Status 0x0
[-] Can't find pattern
[+] PiDDBLock found with second pattern
[+] PiDDBLock Ptr 0xfffff80130674912
[+] PiDDBCacheTable Ptr 0xfffff80130568508
[+] PiDDBLock Locked
[+] Found Table Entry = 0xFFFFAC0ED06F4C40
[+] PiDDBCacheTable Cleaned
[+] g_KernelHashBucketList Found 0xFFFFF8013222C088
[+] g_HashCacheLock Locked
[!] g_KernelHashBucketList looks empty!
[+] MmUnloadedDrivers Cleaned: SaBVbLkOxDxwTNNOsSPnmMW
[+] Image base has been allocated at 0xFFFFD0876A42E000
[+] Skipped 0x1000 bytes of PE Header
[<] Calling DriverEntry 0xFFFFD0876A433B10
[+] Callback example called
[+] DriverEntry returned 0x0
[<] Unloading vulnerable driver
[+] NtUnloadDriver Status 0x0
[+] Vul driver data destroyed before unlink
[+] success
```
  
确保输出中包含这一行： `[+] DriverEntry returned 0x0`.   
如果存在这一行，则表明 Valthrun 驱动程序加载成功。
但是，如果输出中**找不到这一行**，则表明**映射过程失败**。
在这种情况下，请参阅故障排除部分，以获得解决问题的指导。

### 优点
使用 KDMapper 是一个非常简单的过程。 
KDMapper *相当可靠*，不需要大量的跟踪且通常不会发生错误。
  
### Disadvantages
KDMapper 主要有两个缺点。