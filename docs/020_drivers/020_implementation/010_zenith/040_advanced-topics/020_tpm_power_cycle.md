# TPM Power-Cycling
In [TPM, Measured Boot and Attestation](../boot_integrity), the role of boot measurements, the TPM chip, and attestation has been discussed.
One key principle to ensure trust and integrity of the TCG log is that it must be **impossible to reset the PCR registers on the TPM chip** during normal operation.
If this principle is violated, it becomes possible to break the chain of trust and falsify boot measurements — for instance, by emulating a legitimate boot process while excluding specific components such as the Zenith UEFI loader.

One way to reset the PCR registers on the TPM chip is by performing a power-cycle.
A power-cycle fully removes and reapplies electrical power to the TPM, clearing all volatile PCR data and returning the chip to an uninitialized state.
The Zenith driver includes dedicated support for this method and can emulate a legitimate boot process after detecting that the TPM has been reset.

This document explains how Zenith can be configured to wait for the TPM to be power-cycled and then emulate a consistent and legitimate boot sequence.

## Requirements
In order to perform a TPM power-cycle, you need a hardware-modified TPM chip.
You can either purchase such a chip through the Valthrun Discord or modify an existing TPM yourself.

If you decide to create such a chip on your own, you must modify the TPM in a way that allows it to be cleared during the UEFI boot stage — ensuring that the PCR registers are reset before Zenith begins emulating the legitimate boot process.

## Setup the loader
Instructions on how to set up your Zenith bootable USB stick to wait for a power-cycled TPM and emulate a legitimate boot process will follow shortly.