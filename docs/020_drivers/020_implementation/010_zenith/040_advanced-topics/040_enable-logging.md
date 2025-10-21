# Collecting Memory Logs
When Zenith crashes or hangs, memory logging can help identify the root cause.
Follow the steps below to enable and collect a memory log for analysis.

## Enabling Memory Logging
Update your Zenith configuration file with the following entries:
```
[log-uefi]
target = "MemoryBuffer"

[log-vmm]
target = "MemoryBuffer"

[memlog]
address = 0xf80000000
capacity = 0x40000000
```
A detailed explanation on how to use a custom configuration can be found [here](../custom_configuration).

### Configuration Details
- `address` — Currently configured for a **64 GB RAM** system (`0xf80000000`).  
  It’s recommended to choose an address roughly 2 GB below your total system memory.
  You may need to adjust this value depending on your specific RAM size.
  
  <table>
    <thead>
        <tr>
            <th colspan="2">Common configurations</th>
        </tr>
        <tr>
            <th>RAM available</th>
            <th>Config Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>16 GB</td>
            <td>`0x380000000`</td>
        </tr>
        <tr>
            <td>32 GB</td>
            <td>`0x780000000`</td>
        </tr>
        <tr>
            <td>64 GB</td>
            <td>`0xf80000000`</td>
        </tr>
        <tr>
            <td>128 GB</td>
            <td>`0x1f80000000`</td>
        </tr>
    </tbody>
  </table>
  
- `capacity` — Defines the maximum memory reserved for logging.  
  The default value of 1 GB is typically sufficient and can remain unchanged.

## Boot Process
1. Create a Zenith bootable USB stick using the updated configuration.  
   A detailed explanation on how to use a custom configuration can be found [here](../custom_configuration).

2. Boot from the USB stick.   
   You’ll be prompted to press F10, as no memory log exists yet — this is expected.

3. Run Zenith and observe its behavior (e.g., wait for the crash or hang).  
  If the system hangs for about a minute, press the reset button on your PC (do not power off).

4. Boot again directly from the Zenith USB stick.  
   This time, Zenith should indicate that a memory log has been successfully written.

5. Remove the USB stick, reset the PC, and boot normally into your operating system.

## Extracting the Memory Log
:::note
These memory logs are not human-readable.  
Specialized tools are required to interpret them.
You can simply share the `memlog.bin` file in Discord for analysis.
:::

After booting back into your normal operating system:
1. Reinsert the Zenith USB stick.
2. Extract the memory log using the Zenith installer:
   ```ps1
   # Hint: 
   # You have to run the command line as administrator.

   .\zenith-installer.exe internal collect-memlog memlog.bin
   ```
   
   
   The log will be saved as `memlog.bin` in your current working directory.