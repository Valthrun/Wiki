---
title: CS2 Overlay
---

# Building the Valthrun CS2 Overlay
## Prerequiresits
Valthrun requires the [Rust](https://www.rust-lang.org/learn/get-started) toolchain to be compiled.  
  
:::warning
As Rust nightly features are used by Valthrun, you must first switch to Rust nightly.  
Switching to the Rust nightly compiler can be done by the following command:  
```ps1
rustup default nightly
```
:::

## Building the overlay
```ps1
# Initialize all submodules
git submodule update --init

# Create a release overlay build
# The result will be located at "target/release/controller"
cargo build --release
```
    
#### Attention  
As long as https://github.com/rust-lang/rust/issues/111540 has not been finalized,  
the controller build file will contain `valthrun` as well as the workspace path in the final executable.  
As far as I'm conserned VAC does not actively checks for certain strings so this should not be an issue.
But if you want to these traces anyways you need to set the RUSTFLAGS remap path prefix flags accordingly.
```ps1
$WorkspaceCargo=$(cargo locate-project --workspace --message-format=plain)
$env:RUSTFLAGS="-Ctarget-feature=+crt-static -Clink-arg=/PDBALTPATH:C:\build\application.pdb --remap-path-prefix=$($WorkspaceCargo.TrimEnd("Cargo.toml"))=[src] --remap-path-prefix=$env:CARGO_HOME\registry\src\=[crates.io]"
```
Build the overlay afterwards and `valthrun` not the build path (which might include the word `valthrun`) should be contained within the binary.  