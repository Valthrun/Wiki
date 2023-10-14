# 偏移量
## 什么是偏移量
在计算机科学中，数组或其他数据结构对象中的偏移量是一个整数，表示对象的起点与给定元素或点之间的距离（位移），可能是在同一对象中[^4]。
Valthrun 大量使用偏移量从不同的 CS2 结构中检索数据，以增强您的游戏体验。

由于添加、重新排序或删除 [变量](https://en.wikipedia.org/wiki/Variable_(computer_science)) 会导致这些偏移量发生变化，每次 CS2 更新都会导致偏移量略有变化。
因此，Valthrun 控制器也需要更新[^3]。

## 使用偏移量和 CS2 模式系统
CS2 有一个方便的系统，可以检索服务器和客户端共享变量的所有偏移量。 
这些变量以前称为 `netvars` ，现在称为模式变量。

游戏增强所需的大部分信息都可以通过检索这些共享变量获得。
因此，更新这些偏移量就足够了。

在某些情况下，需要访问本地客户端数据。例如玩家的骨骼状态和当前十字准线实体 ID [^1]。
要解决这些偏移问题，Valthrun 主要依靠 [模式扫描](https://www.unknowncheats.me/forum/general-programming-and-reversing/133228-implement-pattern-scanning-obtain-offsets-dynamically.html)。
虽然模式扫描是解决多个版本间偏移的一种相当可靠的方法，但模式可能会损坏，必须更新。创建模式也可能不可行[^2]。

因此，有些偏移量是[硬编码](https://en.wikipedia.org/wiki/Hard_coding)。 
这些硬编码的偏移量大多不太可能发生变化，但如果发生变化，就必须手动更新。

经验法则: 
硬编码的偏移不大可能随更新而改变。
可能随更新而改变的偏移量要么由模式系统检索，要么由模式扫描检索。

## 更新基于模式的偏移量
使用 CS2 模式系统可以检索到最有可能改变的偏移量。
根据该系统提供的信息，我们可以自动生成所有的类和函数定义。
包含所有这些定义的源文件可在 [此处](https://github.com/WolverinDEV/Valthrun/blob/master/cs2-schema/generated/cs2_schema.json) 找到。更新该文件非常简单：

1. 转存当前 CS2 模式  
   将当前模式转存为 "cs2_schema.json".
  
  请注意：  
  这需要运行游戏并加载内核驱动程序！
```ps
.\controller.exe dump-schema cs2_schema.json
```  
  
2. 更新 `cs2_schema.json`  
用新转储的模式替换位于 `cs2-schema/generated/cs2_schema.json` 的 `cs2_schema.json`。
  
3. 重新编译控制器  
按照 [此处](https://github.com/WolverinDEV/Valthrun/blob/master/BUILD.MD#2-overlay) 所述重新编译控制器。
  
你很可能就可以使用了，并为 CS2 的下一次更新做好准备。  
如果 Valthrun 仍然表现不佳或产生错误，这可能表明某些硬编码偏移发生了变化。
如果是这种情况，你要么追踪问题所在（通过分析和调试源代码）并解决新的偏移量，但要挖掘 CS2 内存，要么就等着别人来帮你做这项工作吧：）    
(PS: 你可以请他喝杯咖啡，他可是很难缠的 :P)
  
[^1]: 请注意，十字准线实体 ID 在 CS:GO 中是一个共享变量，但在 CS2 中不是！  
[^2]: 或者是开发人员当时太懒了，懒得实现模式……  
[^3]: 内核驱动程序只提供基本的内存读取功能，不需要了解目标程序的任何信息。  
因此，内核驱动程序永远不会受到任何 CS2 更新的影响。  
[^4]: 偏移量（计算机科学）（[维基百科](https://en.wikipedia.org/wiki/Offset_(computer_science)))
