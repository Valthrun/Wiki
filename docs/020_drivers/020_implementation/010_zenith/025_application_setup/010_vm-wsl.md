# VM Setup (Using WSL)

This guide explains how to set up a **Hyper-V–based environment using Windows Subsystem for Linux (WSL)** for running the **Valthrun Enhancer** applications with the **Zenith Driver**.

## 1. Enable Required Windows Features

Before setting up WSL, ensure that **WSL** is enabled on your system.

Open PowerShell **as Administrator** and run the following commands:

```ps1
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
Then restart your system.

## 2. Install a Linux Distribution

After the restart, install your preferred Linux distribution from the Microsoft Store (e.g., Ubuntu).
You can also install via command line:
```ps1
wsl --install -d Ubuntu
```

Once the installation finishes, launch your WSL environment and complete the initial setup (username and password).

## 3. Configure WSL for Zenith
To ensure proper operation with the Valthrun Zenith Driver, WSL must run in version 2 (Hyper-V backend).
Check your current WSL version:
```ps1
wsl --list --verbose
```

If your distribution is not using WSL 2, upgrade it with:
```ps1
wsl --set-version <YourDistroName> 2
```

You can set WSL 2 as the default for future installations:
```ps1
wsl --set-default-version 2
```

## 4. Prepare the Valthrun Environment
:::warning
**DO NOT USE THE `.exe`/`.dll` FILE**

WSL is a linux based operating system.  
You need to use the linux version of the Valthrun Enhancer and the Zenith driver interface (`.so`).  
:::

Inside your WSL environment:
- Create a working directory for the Valthrun Enhancer.
- Place the Valthrun Enhancer application and the Zenith Driver Interface in the same directory.

Follow the [Driver Interface Setup](../driver_interface) guide to correctly setup the interface file.