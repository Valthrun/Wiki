---
title: Random read failures
---

# Random Read Failures

## What this means

If an application using the Valthrun Zenith Driver experiences random memory read failures, it could be due to memory paging. Windows sometimes decides to page out certain memory to optimize RAM usage. Since paged-out memory is inaccessible to the Zenith driver, read access fails.

## How to fix

To prevent Windows from paging out memory that the Valthrun application needs to access, you must disable the Windows page file. A guide on how to disable the Windows page file can be found here:  
https://wphosting.tv/how-to-disable-the-windows-page-file/
