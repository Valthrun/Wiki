# Common KDMapper issues

## Can't find pattern

If KDMapper fails and the log contains `Can't find pattern` the one of following reasons may occurred:

1. Your KDMapper version is outdated.  
   Ensure you build the newest KDMapper from https://github.com/TheCruZ/kdmapper and try again
2. Your Windows version is outdated.  
   Try to update your Windows to the newest version. Afterwards try again.
3. KDMapper does not support your Windows version.  
   You may use another mapping method as described [here](../../../kernel#methods)

## Nal is already in use

KDMapper Output:

```
[-] \Device\Nal is already in use.
```

Use: https://github.com/VollRagm/NalFix

## Additional troubleshooting steps

If non of the errors above happend, the following general things may help:

1. Check that your path does not contains any spaces/invalid characters  
   More information can be found [here](../path_invalid_characters)
2. Check for interfearing Windows security features  
   A guide for interfearing Windows security features can be found [here](../windows_security_features)
3. Check for applications which may block KDMapper  
   A guide for on which applications may block KDMapper can be found [here](../driver_blocking_applications)
