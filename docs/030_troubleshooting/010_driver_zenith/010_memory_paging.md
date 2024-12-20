---
title: Random read failures
---

# Random Read Failures

## What this means

If an application using the Valthrun Zenith Driver experiences random memory read failures, it could be due to memory paging. Windows sometimes decides to page out certain memory to optimize RAM usage. Since paged-out memory is inaccessible to the Zenith driver, read access fails.

The typical error message is as follows:

```
failed to access memory because the target memory has been paged out
```

## Solutions

:::warning
Disabling the Windows page file can negatively impact system performance, particularly on systems with less than 32GB of memory.
:::

To prevent Windows from paging out memory that the Valthrun application needs to access, you must disable the Windows page file. A guide on how to disable the Windows page file can be found here:  
https://wphosting.tv/how-to-disable-the-windows-page-file/

## Other possible solutions

### Freeup system resources

To prevent memory from being paged out, try to free up as much system memory as possible by closing unnecessary applications. Common memory-intensive applications include browsers and background startup programs. After freeing up resources, start the target application.

### Prioritize Counter-Strike 2

:::note
Counter-Strike 2 must be running before you can set the priority.
:::

Prioritizing the Counter-Strike 2 process can help mitigate the effects of memory paging. This can be done by using the `WMIC` Command that stands for Windows Management Instrumentation Commandline.

```
wmic process where "name='cs2.exe'" CALL setpriority priority_value
```

Recommended priority values:

| Priority Value | Priority Name        | Notes                                                          |
|----------------|----------------------|----------------------------------------------------------------|
| **32**         | Above Normal         | **Not Tested**                                                 |
| **256**        | High                 | **Recommended, and can mostly prevent all memory paging**      |
| **32768**      | Real-time            | **Not recommended to use in any case**                         |


### Start your application as soon as possible

Launching your application immediately after the target application can help mitigating the effects of memory paging.
This approach is particularly effective because:

- Windows typically does not page out memory within the first few seconds of an application’s runtime.
- Applications (e.g., the CS2 radar client) often access specific memory locations during initialization. By launching your application quickly, memory that is frequently accessed remains active and less likely to be paged out.

### Load the schema (offsets) from file (CS2 Radar Only)

For CS2 Radar users, another helpfull trick is to load the offsets from a file instead of directly from the CS2 process memory. This method prevents the "schema memory being paged out" error. Here is a brief overview of the process:

1.  Download the Schema Dumper
    Obtain the [schema dumper](https://valth.run/portal/artifacts/cs2-schema-dumper) from the Valthrun portal.

2.  Dump the CS2 Schema
    Dump the CS2 schema by using the Kernel or User Mode driver.
    Start CS2 without additional third-party applications (e.g., Faceit) to ensure proper dumping.

3.  Play CS2 normally
    Reboot with Zenith and start playing CS2 normally. Start the CS2 radar client with the parameter `-s <path to your file>`. This will load the schema (offsets) from the specified file instead of from memory. This solution along with starting the CS2 radar as soons as possible after launching CS2 usually yields great success!
