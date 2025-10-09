# License request timeout
One potential issue when using the Zenith Driver is that the application becomes stuck during startup or shows the following error message:
`retrive ephemeral license: request: timeout: global`

## Cause
This problem can occur if your network environment, such as your firewall, internet provider, or corporate network policy, blocks TLS 1.3 connections with Encrypted Client Hello (ECH). Such restrictions are sometimes enforced for geo-political or policy reasons, leading to connection timeouts when Zenith attempts to request its ephemeral license.

## Solution
To bypass this restriction, you can disable ECH and fall back to the default HTTPS implementation by setting the environment variable `VTZ_DISABLE_SEC_HTTPS` to 1.

### Example
```
export VTZ_DISABLE_SEC_HTTPS=1
./radar_client
```