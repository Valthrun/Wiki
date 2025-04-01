---
title: CS2 Ingame Overlay
---

# Valthrun CS2 Overlay

## Features

The Valthrun overlay is an in game overlay over the running Counter Strike 2 application including the following features:

- External radar  
  Publish your game for everybody on https://radar.valth.run.  
  More information can be found [here](../cs2_radar_standalone)

- Player ESP  
  ESP with a lot of configuration possibilities like: Skeleton, Boxes3D and Boxes2D

  - Configurable colors to distinguish between enemy and team players
  - ESP includes player health, a health bar, weapon and a lot more

- Bomb Info

  - Time until the bomb detonation
  - Defuser info such as a defuse timer
  - Bomb site where the bomb is located

- Trigger Bot  
  Shoot your enemy (or team mates) as soon they enter your crosshair

- Spectator info  
  List of player currently watching you / the observer target

- Stream proof by default  
  Never show your Valthrun overlay on any screen shares

To access Valthruns settings overlay press `PAUSE`.

## Prerequiresits

Before you can use the CS2 ingame overlay you have to optain the following prerequiresits:

1. Download the CS2 ingame overlay (controller.exe)
   Download the latest CS2 ingame overlay (contained within CS2 Enhancements) from the Valthrun Homepage:
   https://valth.run/download

2. Setup one of the Valthrun drivers  
   How you can setup a Valthrun driver is described in detail in the [drivers section](../../../drivers/implementation).  
   The CS2 ingame overlay requires a Valthrun driver to be successfully loaded.

## Setup

Once a Valthrun driver has been successfully loaded, and CS2 is up and running,
you can start the Valthrun overlay by running `controller.exe`.
If everything is set up correctly, you should see a terminal window looking like this:
![Screenshot of Success](@site/docs/_media/screenshot_controller_success.png)

With these steps completed, you are now ready to use Valthrun and take advantage of its gameplay enhancements for Counter-Strike 2.
You can access the overlay by pressing the `PAUSE` key. If you do not have such key please refer to [Open the GUI without a PAUSE key](./troubleshooting/pause_key)

## Usage along with Faceit

It is possible to use the Valthrun CS2 in-game overlay along with the Zenith driver for Faceit, but it is not recommended. Using the overlay while playing Counter Strike 2 on Faceit might result in your account being flagged due to potential violations of Faceit’s policies.

A possible solution to retain all the functionalities of the overlay without actually overlaying the game might be developed in the future. This would allow users to benefit from the features without risking detection.

## Showcase

import Showcase from "@site/src/components/showcase";

<Showcase />
