# Interface probe-ability
A common method used to detect the presence of software is to probe for its communication interfaces for example, by sending a request and observing whether a response is returned. If a predictable interface exists, it becomes easy to determine whether a given application or driver is active on the system.

Since Zenith is designed to remain fully transparent to the operating system, exposing a fixed or easily identifiable communication interface would undermine this transparency principle. Any software capable of probing such an interface could reliably detect the presence of Zenith, which would defeat its core purpose.

To prevent this, Zenith employs a unique authentication mechanism based on your Valthrun Portal account. When you download the Zenith Driver and its corresponding User Mode Interface, a magic token is generated and embedded into both components. This token is unique to your account and is never shared with other users.

Whenever a user-mode application communicates with the Zenith Driver, it must include this magic token along with its regular request parameters. If the token does not match what the driver expects, the driver remains completely silent. It does not respond or reveal any sign of its existence.

Because each user’s token is distinct, no external software can determine whether the Zenith interface is present on your system. This design ensures complete invisibility and preserves Zenith’s fundamental goal of maintaining transparent, undetectable operation within the host environment.