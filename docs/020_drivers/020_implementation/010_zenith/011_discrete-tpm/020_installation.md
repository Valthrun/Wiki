# Installation

This document describes how to install a dedicated **TPM 2.0 (Trusted Platform Module)** on a compatible motherboard.  
It applies to both standard modules and **Valthrun-modified discrete TPMs**.

## Prerequisites

Before beginning the installation, ensure the following:

- Your motherboard includes a **TPM header**, typically labeled _TPM_, _JTPM1_, or _SPI_TPM_.
- You have a **compatible TPM 2.0 module**, such as the **Valthrun modified TPM**.
- The system is **powered off and unplugged**.
- You are working on an **electrostatic-safe surface**.

> **Note:** Avoid touching the connector pins on the TPM module directly to prevent electrostatic discharge damage.

## Step 1 — Locate the TPM Header

1. Shut down the system and disconnect all power sources.
2. Open the chassis and identify the TPM header on the motherboard.  
   It is usually a 12 or 24 pin connector near the lower edge of the board.
3. Refer to the motherboard manual for the exact location and pinout if it is not clearly labeled.  
   Typical labeling examples include:
   `TPM` / `JTPM` / `SPI_TPM`

## Step 2 — Align the Module

The TPM header and module are **keyed** to prevent incorrect installation.  
Align the missing pin on the motherboard header with the blocked hole on the TPM module.

> **Caution:**  
> Do not force the module into place. If the connector does not align smoothly, verify orientation before proceeding.

## Step 3 — Install the Module

1. Once correctly aligned, gently press the module onto the header until it sits firmly.
2. Close the system enclosure and reconnect the power cable.

## Step 4 — Enable the TPM in BIOS

1. Power on the system and enter the BIOS or UEFI interface (commonly using `DEL`, `F2`, or `F10` during boot).
2. Locate the **Security**, **Trusted Computing**, or **Advanced** menu.
3. Configure the following settings:
   - **TPM Device** → Enabled
   - **TPM State** → Enabled
   - **Security Device Support** → Enabled
4. Save changes and exit the BIOS.

> **Note:**  
> On some motherboards, the TPM option may be listed as **fTPM** (firmware TPM).  
> Ensure you select **Discrete TPM** instead.

## Step 5 — Verify Installation in Windows

Once the system boots into Windows:

1. Press `Win + R`, type `tpm.msc`, and press Enter.
2. The **TPM Management Console** should display the following information:
   - **Status:** The TPM is ready for use
   - **Manufacturer Information:** The name of the TPM vendor (e.g., Infineon, Nuvoton, or Valthrun)
   - **Specification Version:** 2.0

If Windows reports _“Compatible TPM cannot be found”_, verify:

- BIOS settings (ensure the discrete TPM is enabled),
- Proper seating of the module.

## Troubleshooting

| Symptom                    | Possible Cause               | Resolution                                       |
| -------------------------- | ---------------------------- | ------------------------------------------------ |
| TPM not detected           | Loose connection             | Reseat the TPM module                            |
| BIOS lists only “fTPM”     | Firmware TPM enabled         | Disable fTPM and select “Discrete TPM”           |
| TPM not visible in Windows | Driver issue                 | Reboot or reinstall the “Security Device” driver |
| System fails to boot       | Incorrect module orientation | Power off, remove TPM, realign pins              |

## Power-Cycle Capability (Valthrun Modules)

Valthrun-modified TPMs include hardware-level **power-cycle support**, used by the **Zenith Hypervisor** for measured-boot and attestation workflows.

For implementation details, refer to:  
[TPM Power-Cycle Support](../../advanced-topics/tpm_power_cycle)

If you require further assistance identifying the header or verifying the module connection, please contact the Valthrun team via the [Discord support channel](/general/discord).
