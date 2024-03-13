# Developing / Building the Radar
## Prerequiresits
Valthrun requires the [Rust](https://www.rust-lang.org/learn/get-started) toolchain to be compiled.

## Setup development environment
:::note 
This is only for the dev environment.  
The Valthrun repository does contain all release files (e.g. the server, dedicated client and the HTML files).  
:::

In order to use the radar you have to do some steps:  
1. Start the pub / sub server:
   ```
   cd radar\server-standalone
   cargo r
   ```

2. Start the standalone radar client (cs2 needs to be open)
   ```
   cd radar\client-standalone
   cargo r -- -s 127.0.0.1:7228
   ```

3. Start the web page via webpack-dev-server
  ```
   cd radar\web
   $env:SERVER_URL="ws://127.0.0.1:7229/subscribe"
   $env:NODE_ENV="development"
   yarn start:dev
   ```

## Build the radar
1. Build the pub / sub server
   ```
   cargo build --release radar-server-standalone
   ```
   The result will be located at `target/release/radar-server-standalone.exe`

2. Build the radar client
   ```
   cargo build --release radar-client-standalone
   ```
   The result will be located at `target/release/radar-client-standalone.exe`

3. Build the web scripts
   ```ps1
     cd radar\web
     
     # Attention:
     # Set the SERVER_URL to the URL the web client should connect to.
     # You can use "ws://127.0.0.1:7229/subscribe" for a local http setup or
     # "wss://radar.valth.run/subscribe" for the official server
     $env:SERVER_URL="wss://example.com/subscribe"
     $env:NODE_ENV="development"
     
     yarn build
   ```
   The result will be located at `dist` in `radar/web`