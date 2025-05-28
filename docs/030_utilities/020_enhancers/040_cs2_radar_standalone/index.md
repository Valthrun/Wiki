---
title: CS2 Standalone Radar
---

# Standalone web radar

The standalone web radar provides the full web radar experience, without the in game overlay.

## Prerequiresits

Before you can start the standalone web radar you have to obtain the following prerequiresits:

1. Download the standalone web radar client  
   Download the latest radar client (contained within CS2 Enhancements) from Valthrun Homepage:
   https://valth.run/download

2. Setup one of the Valthrun drivers  
   How you can setup a Valthrun driver is described in detail in the [drivers section](../../../drivers/implementation/).  
   The CS2 ingame overlay requires a Valthrun driver to be successfully loaded.

## Starting the web radar

Starting the web radar is simple.  
Just execute the `radar_client.exe` executable.  
If the radar has successfully been loaded you should see the following messages:
![image](@site/docs/_media/screenshot_standalone_web_radar_started.png)

You can use the link to show the radar on another device or even share a radar with your team mates.

:::note
To view all possible CLI arguments run:

```ps1
radar_client.exe -h
```

:::

## Usage along with Faceit

The CS2 standalone web radar, when used in combination with the Zenith driver, can be used alongside Faceit.
The web radar operates independently without the risk of being flagged for because of the use overlays.
