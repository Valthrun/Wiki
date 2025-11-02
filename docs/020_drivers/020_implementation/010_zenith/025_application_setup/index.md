# Enhancer Setup

To make use of the **Valthrun Zenith Driver**, you need to run one of the **Valthrun Enhancer** applications.  
These applications require a communication channel with the Zenith Driver. This is achieved through the **Driver Interface**.  

Proper setup of the Driver Interface is explained in detail [here](./driver_interface).

## Running the Enhancers Securely

It is **strongly recommended** to run the Valthrun Enhancer applications inside a **Hyper-V Virtual Machine**.  
Unlike the Zenith Driver, these applications are **not isolated** from your system and remain visible to other software processes.  

Running the Enhancers in a virtualized environment ensures that your host system cannot detect or fingerprint these applications.  
This adds an additional layer of privacy and security.

## Requirements for Virtualization

Because of how the Zenith Driver operates, you must use a **Hyper-V–based virtual machine**.  
You can set this up using either:

- **Windows Subsystem for Linux (WSL)** with Hyper-V backend, or  
- A **dedicated virtual machine** managed through **Hyper-V Manager**.

Both options provide the necessary hardware-level isolation required by the Zenith Driver for proper communication and operation.  
A guide on how to setup the Windows Subsystem for Linux (WSL) can be found [here](./vm-wsl).

## Unsafe: Running on the Host Instead
<details>
<summary>
This section is hidden by default.
Proceed with caution!
</summary>


:::danger
This is **unsafe** — do **not** do this!  
Proceed **only** if you fully understand **what** you are doing and **why** you are doing it.
:::

If you are absolutely certain and wish to use the Zenith driver on the host machine,
set the `VTZ_ALLOW_HOST` environment variable to '1'.
</details>