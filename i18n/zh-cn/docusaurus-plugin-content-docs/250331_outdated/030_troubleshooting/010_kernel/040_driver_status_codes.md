# 驱动程序入口应返回 0x0
| 代码 | 原因 |
| :-- | :-- |
| 0xc0000603 | `STATUS_IMAGE_CERT_REVOKED` 很可能是由于使用 intel 驱动程序作为易受攻击的驱动程序 （kdmapper issue [#65](https://github.com/TheCruZ/kdmapper/issues/65)）。禁用 [MSFT Driver Block List](https://wiki.valth.run/#/./030_windows_security_features) |
| 0xCF000001 | Valthrun 日志系统无法初始化。这种情况很罕见 |
| 0xCF000002 | 设置 Valthrun 驱动程序的函数调用失败。详情请查看 DebugView。 |
| 0xCF000003 | Valthrun 驱动程序初始化失败。详情请查看 DebugView。 |
| 0xCF000004 | Valthrun 驱动程序已加载 | 
