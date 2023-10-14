# 加载 Valthrun 驱动程序 (`valthrun-driver.sys`)  
加载 Valthrun 驱动程序加载或映射驱动程序可能是一项复杂且具有挑战性的任务。 
通常，驱动程序会使用「扩展验证代码签名证书」进行数字签名。 
然而，获取这些证书可能很困难，而且它们很容易被 VAC（Valve Anti-Cheat）等第三方软件阻止。 
因此，加载 Valthrun 驱动程序需要采用**非常规方法**。

## 支持的 Windows 版本 
Valthrun 旨在兼容各种 Windows 版本。 
由于函数和结构偏移量是动态解析的，因此预计将支持所有最新的 Windows 版本。 
最新的 Windows 10 和 Windows 11 版本（如 22H2）已成功通过测试。 
用户反馈还表明，最早的 Windows 版本（如 20H2）也能正常工作。 
如果遇到任何问题，请提交问题报告，其中包括 Windows 版本和遇到的错误描述。

## 加载方法概述
以下是可用于加载 Valthrun 驱动程序的各种方法的简要概述：

| 方法 | 操作难度 | 成功率 |
| --- | --- | --- |
| [Manual Mapping via KD-Mapper](/zh-cn/010_getting-started/010_mapping-method/010_kdmapper.md) | 中等 | 高 |
| [Manual Mapping via KDU](/zh-cn/010_getting-started/010_mapping-method/020_kdu.md) | 中等 | 中等 |
| [Using Windows Test-Signing](/zh-cn/010_getting-started/010_mapping-method/030_test-signing.md) | 低 | 非常高 |
| [Manual Mapping via Other Mappers](/zh-cn/010_getting-started/010_mapping-method/040_other-mappers.md) | 未知 | 未知 |

每种方法都有各自的复杂程度和成功率。 
选择使用哪种方法取决于您的具体需求和系统的兼容性。 
有关每种映射方法的详细信息，请参阅链接的资源。

## 使用社区自制脚本进行映射
除了手动映射 Valthrun 驱动程序的方法外，还有社区制作的脚本可简化这一过程。  
这些脚本通常由 Valthrun 社区成员开发和共享。  
虽然这些脚本很方便，但需要注意的是，它们并非由 Valthrun 官方提供，其成功率可能会有所不同。  
  
- [Valthrunners 脚本](010_getting-started/010_mapping-method/110_community_script_valthrunner.md)
  
TODO: 添加其他脚本