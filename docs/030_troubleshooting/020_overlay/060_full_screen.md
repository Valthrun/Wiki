# Valthrun and CS2 full screen mode
The valthrun overlay works with CS2 "Windowed" and "Fullscreen Windowed" mode.  
The third mode, "Fullscreen" is *not* supported and will most likely never be supported.  
  
As far as I'm aware, there is no way to support full screen mode as an external application.  
The reasoning is simple: An external application has to create a second window and place it over the target application.  
This is how the "overlay" works without injecting anything into the target process itself (e.g. like the Discord overlay).  
When using full screen mode, CS2 does not have a window, instead it directly uses GPU features to present the rendered frame,  
thus excluding any other windows from overlaying it.

## Can I still play with my 4:3 resolution?
More information on how to use Valthrun with a streched monitor resolution can be found [here](./stretched).

