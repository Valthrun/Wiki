# 偏移量
## 什么是偏移量 (Offset)
在计算机科学中，数组或其他数据结构对象中的偏移量是一个整数，表示对象起点与给定元素或点（可能在同一对象中）之间的距离（位移）[^4]。
Valthrun 大量使用偏移量从不同的 CS2 结构中获取数据，以增强游戏体验。

由于添加、重新排序或删除[变量](https://en.wikipedia.org/wiki/Variable_(computer_science))会导致这些偏移量发生变化，因此每次 CS2 更新都会导致偏移量略有变化。因此，Valthrun 控制器也需要更新 [^3]。

## 使用偏移量和 CS2 模式 (schema) 系统
CS2 有一个方便的系统，可以检索服务器和客户端共享变量的所有偏移量。 
这些变量以前称为 `netvars` ，现在称为模式变量 (schema variables)。

游戏增强所需的大部分信息都可以通过检索这些共享变量来获得。
因此，更新这些偏移量可能就够了。

在某些情况下，需要访问本地客户端数据。例如玩家的骨骼状态和当前准星指向的实体 ID [^1]。
要获取这些偏移量，Valthrun 主要依靠 [模式扫描 (pattern scanning)](https://www.unknowncheats.me/forum/general-programming-and-reversing/133228-implement-pattern-scanning-obtain-offsets-dynamically.html)。
虽然模式扫描 (pattern scanning) 是获取多个版本偏移量的一种相当可靠的方法，但模式可能会失效，必须更新。创建一个模式 (pattern) 也可能不行 [^2]。

因此，有些偏移量是[硬编码](https://en.wikipedia.org/wiki/Hard_coding)。 
这些硬编码的偏移量大多不太可能发生变化，但如果发生变化，就**必须手动更新**。

经验法则: 
硬编码的偏移不大可能随更新而改变。
可能随更新而改变的偏移量要么由模式系统 (schema system) 检索，要么由模式扫描 (pattern scanning) 检索。

## 更新基于模式 (schema-based) 的偏移量
使用 CS2 模式系统可以检索到最有可能改变的偏移量。
根据该系统提供的信息，我们可以自动生成所有的类和函数定义。
包含所有这些定义的源文件可在[此处](https://github.com/WolverinDEV/Valthrun/blob/master/cs2-schema/generated/cs2_schema.json)找到。更新该文件非常简单：

1. 转存当前 CS2 模式  
将当前模式转存为 "cs2_schema.json".

请注意:
这需要运行游戏并加载内核驱动程序！
```ps
.\controller.exe dump-schema cs2_schema.json
```  

1. 更新 `cs2_schema.json`  
用新转储的模式替换位于 `cs2-schema/generated/cs2_schema.json` 的 `cs2_schema.json`。
  
1. 更新 `cs2_schema.json`  
用新转储的模式替换位于 `cs2-schema/generated/cs2_schema.json` 的 `cs2_schema.json` 文件。
  
1. 重新编译控制器  
按照[此处](https://github.com/WolverinDEV/Valthrun/blob/master/BUILD.MD#2-overlay)所述重新编译控制器。
  
你很可能就可以使用了，并为 CS2 的下一次更新做好准备。  
如果 Valthrun 仍然表现不佳或产生错误，这可能表明某些硬编码的偏移量发生了变化。
如果是这种情况，你要么追踪问题所在（通过分析和调试源代码）并解决新的偏移量，但要分析 CS2 内存，要么就开摆然后请别人来做 :)   
PS: 你可以请他喝杯咖啡 :P

[^1]: Please note that the crosshair entity id was a shared variable in CSGO but isn't in CS2!
[^2]: or the developer was just too lazy at that moment to implement a pattern...
[^3]: 内核驱动程序只提供基本的内存读取功能，不需要了解目标应用程序的任何信息。因此，内核驱动程序绝不会受到任何 CS2 更新的影响。
[^4]: Offset (computer_science) ([Wikipedia](https://en.wikipedia.org/wiki/Offset_(computer_science)))
