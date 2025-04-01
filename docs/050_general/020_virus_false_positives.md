# Valthrun and anti virus solutions

A reasonable thing to do, when downloading and using software from the internet is to run an antivirus scan over the software.
It's highly recommended to do so for _every_ software you download as they potentially can contain malicious code.

As important as being careful which software you execute, is that you interpret the antivirus results and take them with a grain of salt.

# Valthrun and false positives

Reading memory of arbitrary processes is something a usual business application like MS Office would never do. Therefore it's good that some antivirus vendors flag Valthrun as a virus. This has become more and more frequent as all the in-game offsets are dynamically resolved
which is a typical thing to do for an application which does malicious things. Therefore it's likely, that some anti-virus vendors will flag Valthrun as a virus.

As of right now, with the latest version being 0.4.1, most anti-virus vendors do not flag Valthrun as malicious, but out of experience this changes from release to release.  
VirtusTotal reports for the Valthrun release 0.4.1:

- [Controller](https://www.virustotal.com/gui/file/d32d0aa365a36331e4454517f0bb4715e7cb9f1683c647972369988fd8306619)
- [Radar Client](https://www.virustotal.com/gui/file/3270bb29c1597ad5cc0ef6eb488fca9c1906d30c81bed72398eac888f3f19ae1)
- [Driver](https://www.virustotal.com/gui/file/c40726e53a2cc6ce7a67d7fcd8aa9d150b75a8fb3978eb22e7e447ff87fe38bd)

# Possible mitigations

There are a few precautions you can take if you're unsure whatever Valthrun is legit and not a virus:

1. Use official builds only  
   Use only official builds from https://valth.run/downloads.  
   These builds have been automatically compiled from source by GitLab actions and have not been altered.
   Additionally, every time a new commit has been made to the master branch, a new version will be available for all
   Discord server boosters at the official Discord server: https://discord.gg/ecKbpAPW5T.

2. Compile Valthrun yourself  
   As the user mode application is open source, you can build Valthrun yourself and ensure that there is no malicious behaviour.
   Building Valthrun yourself is rather easy and described [here](../../contributing/overlay).

3. Do not use Valthrun  
   If you're still unsure, whatever Valthrun is malicious or not, then there is a simple solution: avoidance.  
   Do not use Valthrun.
