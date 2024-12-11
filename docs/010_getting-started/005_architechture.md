---
title: Architectural overview
---

# Valthrun's architecture

Valthrun is a suite of tools developed to enhance gaming experiences by providing applications that offer additional game insights and functionalities. These tools range in purpose, such as displaying in-game overlays or broadcasting radar information independently. Each Valthrun application relies on the ability to access another application's memory, enabling the extraction and display of game-related data.

The Valthrun system achieves this memory access through its drivers, which are designed to operate silently within or alongside the Windows environment. Some drivers are mapped into the Windows kernel (e.g. the [Kernel driver](../driver/kernel)), while others load even before Windows starts to work along with Hyper-V’s Virtual Machine Monitor (VMM), effectively shilding itself from the operating system (e.g. the [Zenith driver](../driver/zenith)).

To enable communication between Valthrun’s user-mode applications and the drivers, each driver is packaged with a user-mode driver interface in the form of a dynamic-link library (DLL). This interface standardizes access across all Valthrun applications, ensuring compatibility and ease of use.

This means, in order to use any Valthrun application you require three core components:

- the application
- the driver
- and the driver interface.

A more detailed description of each component can be found in the next sections.

## Valthrun User Mode Applications

Valthrun's user-mode applications are specialized tools that provide game-specific features. These applications use the drivers’ memory access capabilities to gather and display information in real time.  
Example of such applications are:

- the Counter Strike 2 Controller, displaying an overlay with in-game statistics, offering players enhanced situational awareness

- the standalone radar client, that broadcasts radar data to external viewers

Detailed information on each application is available in the [Applications Section](../applications).

## Valthrun Driver

The Valthrun driver is a crucial component that enables user-mode applications to read the memory of other processes. Valthrun provides a range of driver implementations, each tailored to specific scenarios and requirements. These drivers are designed to accommodate varying levels stealthiness.

An overview of available drivers can be found in the [Drivers Section](../driver).

## Valthrun Driver Interface

The Valthrun Driver Interface is a dynamic-link library (DLL) that serves as the primary connection between the application and the driver. It abstracts the details of each driver’s implementation, offering a unified API for user-mode applications.  
Typically, the Driver Interface DLL is distributed together with the Valthrun Driver, as it is closely integrated with the driver’s functionality.
