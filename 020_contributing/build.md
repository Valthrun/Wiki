# 构建 Valthrun
## 0. 前提条件
Valthrun 需要 [Rust](https://www.rust-lang.org/learn/get-started) 工具链进行编译。

## 1. 内核驱动程序
目前，内核驱动程序是私有的。 
请使用 github 发布的预编译内核驱动程序。
  
内核驱动程序的基础代码开始开源，现在仍可在提交历史中找到。随着我添加的手动映射支持和基本 Stelth 功能越来越多，我决定将其代码库私有化。其中一个原因是，我可能会将此驱动程序用于其他基于游戏/逆向工程的项目。
  
## 2. 叠加层
```ps1
# Create a release overlay build
# The result will be located at "target/release/controller"
cargo build --release
```
    
#### 注意  
只要 https://github.com/rust-lang/rust/issues/111540 尚未最终确定，    
控制器构建文件将包含 `valthrun` 以及最终可执行文件中的工作区路径。   
据我所知，VAC 不会主动检查某些字串，所以这应该不是问题。  
但如果你想使用这些跟踪，就需要相应地设置 RUSTFLAGS 重映射路径前缀标志。
```ps1
$WorkspaceCargo=$(cargo locate-project --workspace --message-format=plain)
$env:RUSTFLAGS="-Ctarget-feature=+crt-static -Clink-arg=/PDBALTPATH:C:\build\application.pdb --remap-path-prefix=$($WorkspaceCargo.TrimEnd("Cargo.toml"))=[src] --remap-path-prefix=$env:CARGO_HOME\registry\src\=[crates.io]"
```
之后再构建叠加层，二进制文件中应包含 `valthrun` 而不是构建路径（可能包括 `valthrun` 字样）。