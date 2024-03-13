---
title: Test-Signing
---

# Using Windows test-signing to load the Valthrun driver
## What is Windows test-signing
Windows Test Signing is a mode in Windows operating systems that allows users to load and test drivers that have not been digitally signed by Microsoft. In normal operation, Windows requires drivers to be digitally signed to ensure their authenticity and integrity. Test signing allows self signed drivers to be loaded by relaxing the requirement for driver signatures.

## How to enable Windows test-signing
To enable test signing mode in Windows, you can follow these steps:
1. Open an Elevated Command Prompt  
   Right-click on the Start button and select "Command Prompt (Admin)" or "Windows PowerShell (Admin)" to open an elevated command prompt with administrator privileges.

2. Enable test-signing  
   In the command prompt window, type the following command and press Enter:
   ```cmd
   bcdedit /set testsigning on
    ```

3. Restart Your Computer  
   After entering the command, you need to restart your computer for the changes to take effect. 
   You can do this by typing the following command and pressing Enter:
   ```cmd
   shutdown /r /t 0
   ```

4. Verify Test Signing Mode  
   After the computer restarts, Windows should be in test signing mode.  
   You can verify this by checking if the test mode watermark appears on the desktop.  
   If you see a watermark indicating "Test Mode" in the bottom right corner of your desktop, then test signing mode is enabled.

## Load the Valthrun driver
To load the Valthrun kernel driver, you have to do the following steps:
1. Open an Elevated Command Prompt  
   Right-click on the Start button and select "Command Prompt (Admin)" or "Windows PowerShell (Admin)" to open an elevated command prompt with administrator privileges.

2. Register and start the Valthrun driver  
   In the command prompt window, type the following commands and press Enter:
   ```cmd
    sc create valthrun type= kernel binpath="C:\Users...\valthrun-driver.sys"
    sc start valthrun 
    ```