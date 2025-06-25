# Valthrun Driver Interface C API
## Overview
The C API for the Valthrun Driver Interface provides a low-level, minimalistic C API for interfacing with the Valthrun Driver. All public functions are prefixed with `vtum_` to clearly separate API boundaries.

## API Structure
The API is divided into two main groups:

1. `vtum_library_*` — Library Management  
These functions manage the lifecycle and metadata of the core library.

2. `vtum_interface_*` — Driver Interface  
These functions interact with the underlying driver.

## Prebuild Libraries
Prebuilt .dll (Windows) and .so (Linux) binaries — including the corresponding header file — are available for download:  
[Download from GitHub Releases](https://github.com/Valthrun/valthrun-driver/releases/)

:::note
It is recommended to build from source to avoid version conflicts.
:::

## Function List
<details>
```c
/**
 * Initializes the Valthrun Driver Interface C library.
 *
 * This function must be called **once** before any other functions in the library are used.
 * It sets up any required global state or resources needed by the driver interface.
 *
 * Calling any other function before `library_initialize` results in undefined behavior.
 *
 * # Safety
 * The caller must ensure that:
 * - It must be called exactly once before any other use of the library.
 * - Reinitialization or concurrent calls from multiple threads may result in race conditions
 *   or undefined behavior unless the implementation guarantees thread safety.
 */
VtumStatus vtum_library_initialize(void);

/**
 * Shutdown the Valthrun Driver Interface C library.
 * Calls to any other function are not allowed after a call to this.
 */
void vtum_library_finalize(void);

/**
 * Returns the version of the library as a null-terminated C string.
 *
 * # Safety
 * The caller must ensure that:
 * - The returned pointer must be treated as read-only.
 * - The pointer must not be deallocated or modified.
 *
 * # Returns
 * A pointer to a null-terminated C string containing the version of the library.
 */
const char *vtum_library_version(void);

/**
 * Creates a new Valthrun driver interface instance with default parameters.
 *
 * This function initializes a new `InterfaceHandle` and returns it through the provided
 * mutable reference. The resulting handle must later be destroyed using [`interface_destroy`]
 * to release associated resources.
 *
 * # Safety
 * The caller must ensure that:
 * - The caller must provide a valid, writable reference to an uninitialized `InterfaceHandle`.
 * - The memory pointed to by `result` must be valid for writing.
 *
 * # Parameters
 * - `result`: A mutable reference to an `InterfaceHandle` that will be initialized by this function.
 */
VtumStatus vtum_interface_create(InterfaceHandle **_Nonnull result);

/**
 * Destroys and frees all resources associated with an interface handle.
 *
 * This function should be called when the interface is no longer needed.
 * It releases any memory, handles, or other system resources allocated during
 * the lifetime of the interface.
 *
 * After calling this function, the pointer to the interface must not be used again.
 *
 * # Safety
 * The caller must ensure that:
 * - The caller must ensure that `interface` is a valid, non-null pointer to an `InterfaceHandle`.
 * - The handle must not be used after destruction.
 * - Double destruction or passing an invalid pointer results in undefined behavior.
 *
 * # Parameters
 * - `interface`: A pointer to a mutable `InterfaceHandle` to be destroyed.
 */
void vtum_interface_destroy(InterfaceHandle *_Nonnull interface);

/**
 * Retrieves the version information of the driver associated with the interface.
 *
 * This function fills the provided `VersionInfo` structure with version data
 * such as major, minor, and patch version numbers of the underlying driver.
 *
 * # Safety
 * The caller must ensure that:
 * - `interface` points to a valid `InterfaceHandle`.
 * - `version_info` is a valid, mutable reference to an `VersionInfo` structure.
 *
 * # Parameters
 * - `interface`: A pointer to a valid `InterfaceHandle`.
 * - `version_info`: A mutable reference to a `VersionInfo` structure that will be populated.
 */
void vtum_interface_driver_version(InterfaceHandle *_Nonnull interface,
                                   VersionInfo *_Nonnull version_info);

/**
 * Returns the feature bitmask supported by the driver.
 *
 * This function returns a 64-bit bitmask indicating which optional features
 * are supported by the loaded Valthrun driver implementation.
 *
 * Each bit in the returned value represents a specific feature. You can check
 * whether a particular feature is supported using bitwise AND operations with
 * defined driver feature constants.
 *
 * # Safety
 * The caller must ensure that:
 * - `interface` must be a valid, non-null pointer to an initialized `InterfaceHandle`.
 * - `features` must be a valid mutable reference to an `DriverFeature` structure.
 *
 * # Parameters
 * - `interface`: Pointer to a valid `InterfaceHandle`.
 * - `features`: Mutable reference to an `DriverFeature` struct that will be filled
 *   with the driver's supported features.
 */
void vtum_interface_driver_features(InterfaceHandle *_Nonnull interface,
                                    DRIVER_FEATURE *_Nonnull features);

/**
 * Reads data from the virtual memory of a target process.
 *
 * This function allows reading a block of memory from the virtual address space of a
 * specified process into a caller-provided buffer. The read operation is performed in
 * the context of the given page directory table.
 *
 * # Safety
 * This function is `unsafe` because it deals with raw pointers and cross-process memory access.
 * The caller must ensure:
 * - `interface` points to a valid `InterfaceHandle`.
 * - `directory_table_type` is a valid reference.
 * - `buffer` points to a writable memory region of at least `buffer_size` bytes.
 *
 * # Parameters
 * - `interface`: A pointer to a valid `InterfaceHandle` structure.
 * - `process_id`: The ID of the target process to read memory from.
 * - `directory_table_type`: A reference to the paging context.
 * - `address`: The virtual memory address in the target process to begin reading from.
 * - `buffer`: A pointer to the buffer that will receive the read data.
 * - `buffer_size`: The number of bytes to read.
 */
VtumStatus vtum_interface_memory_read(InterfaceHandle *_Nonnull interface,
                                      ProcessId process_id,
                                      DirectoryTableType *_Nonnull directory_table_type,
                                      uint64_t address,
                                      uint8_t *_Nonnull buffer,
                                      size_t buffer_size);

/**
 * Writes data to the virtual memory of a target process.
 *
 * This function provides an interface for writing a buffer into the virtual address
 * space of a specified process. The memory write is performed using the paging context
 * described by the given directory table type.
 *
 * # Safety
 * The caller must ensure:
 * - `interface` points to a valid `InterfaceHandle`
 * - `directory_table_type` is a valid reference
 * - `buffer` points to a readable memory region of at least `buffer_size` bytes
 *
 * # Parameters
 * - `interface`: A pointer to an initialized `InterfaceHandle` structure.
 * - `process_id`: The identifier of the target process whose memory will be written.
 * - `directory_table_type`: A reference to the paging context.
 * - `address`: The virtual memory address in the target process where data will be written.
 * - `buffer`: A pointer to the source data to be written.
 * - `buffer_size`: The size in bytes of the data to write.
 */
VtumStatus vtum_interface_memory_write(InterfaceHandle *_Nonnull interface,
                                       ProcessId process_id,
                                       DirectoryTableType *_Nonnull directory_table_type,
                                       uint64_t address,
                                       uint8_t *_Nonnull buffer,
                                       size_t buffer_size);

/**
 * Adds a new metrics record to be submitted by the driver interface.
 *
 * This function queues a metrics record identified by a type string along with
 * its associated payload. The record will be processed or submitted asynchronously
 * by the driver or associated subsystem.
 *
 * # Safety
 * The caller must ensure:
 * - `interface` must be a valid pointer to an initialized `InterfaceHandle`.
 * - `record_type` and `record_payload` must be valid, null-terminated C strings.
 * - The caller must ensure that the pointers remain valid only for the duration of the call.
 *
 * # Parameters
 * - `interface`: Pointer to a valid `InterfaceHandle`.
 * - `record_type`: Null-terminated C string identifying the type or category of the metric.
 * - `record_payload`: Null-terminated C string containing the metric data or payload.
 */
VtumStatus vtum_interface_metrics_add_record(InterfaceHandle *_Nonnull interface,
                                             char *_Nonnull record_type,
                                             char *_Nonnull record_payload);

VtumStatus vtum_interface_process_toggle_protection(InterfaceHandle *_Nonnull _interface);

/**
 * Lists all processes currently known to the driver interface.
 *
 * This function enumerates all active processes and invokes the provided callback
 * for each process with a pointer to a `ProcessInfo` structure describing it.
 *
 * The callback should return `true` to continue enumeration, or `false` to stop early.
 *
 * # Safety
 * The caller must ensure:
 * - `interface` must be a valid pointer to an initialized `InterfaceHandle`.
 * - The callback function pointer must be valid and callable with a pointer to
 *   a valid `ProcessInfo`.
 *
 * # Parameters
 * - `interface`: Pointer to a valid `InterfaceHandle`.
 * - `callback`: A C function pointer that receives a pointer to each `ProcessInfo`.
 *   Returning `false` from the callback stops the enumeration early.
 */
VtumStatus vtum_interface_process_list(InterfaceHandle *_Nonnull interface,
                                       bool (*callback)(const ProcessInfo*));

/**
 * Lists all modules loaded by a given process.
 *
 * This function enumerates all modules (e.g., DLLs) loaded in the specified
 * process’s address space, using the provided paging context. The `callback` function
 * is invoked for each module with a pointer to an `ProcessModuleInfo` describing it.
 *
 * The callback should return `true` to continue enumeration, or `false` to stop early.
 *
 * # Safety
 * The caller must ensure:
 * - `interface` must be a valid pointer to an initialized `InterfaceHandle`.
 * - `directory_table_type` must be a valid reference to a paging context.
 * - The callback function pointer must be valid and callable with a pointer to
 *   a valid `ProcessModuleInfo`.
 *
 * # Parameters
 * - `interface`: Pointer to a valid `InterfaceHandle`.
 * - `process_id`: The identifier of the target process whose modules will be listed.
 * - `directory_table_type`: Reference to the directory table type (paging context).
 * - `callback`: A C function pointer called with a pointer to each module’s info.
 *   Returning `false` stops the enumeration early.
 */
VtumStatus vtum_interface_process_module_list(InterfaceHandle *_Nonnull interface,
                                              ProcessId process_id,
                                              DirectoryTableType *_Nonnull directory_table_type,
                                              bool (*callback)(const ProcessModuleInfo*));

/**
 * Sends keyboard input events.
 *
 * This function injects an array of keyboard state records representing key presses,
 * releases, or other key events via the driver interface.
 *
 * # Safety
 * The caller must ensure:
 * - `interface` must be a valid pointer to an initialized `InterfaceHandle`.
 * - `key_states` must point to a valid array of `KeyboardState` with at least `key_states_length` elements.
 * - The data pointed to by `key_states` remains valid for
 *   the duration of the call.
 *
 * # Parameters
 * - `interface`: Pointer to a valid `InterfaceHandle`.
 * - `key_states`: Pointer to an array of keyboard state records.
 * - `key_states_length`: Number of elements in the `key_states` array.
 */
VtumStatus vtum_interface_input_keyboard(InterfaceHandle *_Nonnull interface,
                                         FfiKeyboardState *_Nonnull key_states,
                                         size_t key_states_length);

/**
 * Sends mouse input events to the target interface.
 *
 * This function injects an array of mouse state records representing mouse movements,
 * button clicks, scrolls, or other mouse events to the driver interface.
 *
 * # Safety
 * The caller must ensure:
 * - `interface` must be a valid pointer to an initialized `InterfaceHandle`.
 * - `mouse_states` must point to a valid array of `MouseState` with at least `mouse_states_length` elements.
 * - The data pointed to by `mouse_states` remains valid for the duration of the call.
 *
 * # Parameters
 * - `interface`: Pointer to a valid `InterfaceHandle`.
 * - `mouse_states`: Pointer to an array of mouse state records.
 * - `mouse_states_length`: Number of elements in the `mouse_states` array.
 */
VtumStatus vtum_interface_input_mouse(InterfaceHandle *_Nonnull interface,
                                      FfiMouseState *_Nonnull mouse_states,
                                      size_t mouse_states_length);

/**
 * Enables CR3 shenanigan mitigation using the specified strategy and flags.
 *
 * This function activates workarounds against CR3-related
 * CPU or OS shenanigans (e.g., tricks involving context switches or paging).
 *
 * For more information please visit our Discord server.
 */
VtumStatus vtum_interface_cr3_shenanigan_mitigation_enable(InterfaceHandle *_Nonnull interface,
                                                           uint32_t strategy,
                                                           uint32_t flags,
                                                           bool *_Nonnull success);

/**
 * Disables CR3 shenanigan mitigation previously enabled.
 *
 * This function deactivates any active mitigations against
 * CR3-related CPU or OS context-switching tricks.
 */
VtumStatus vtum_interface_cr3_shenanigan_mitigation_disable(InterfaceHandle *_Nonnull interface);
```
</details>

## Example Code
A simple usage example showing initialization, driver capability checking, and process enumeration:

:::info
 Full example available at:
https://github.com/Valthrun/valthrun-driver/crates/vtd-libum-ffi/example
:::

```c
bool print_process(const ProcessInfo *info) {
    char image_base_name[16];
    image_base_name[15] = 0x00;
    memcpy(image_base_name, info->image_base_name, 15);

    printf(" - %u %s (directory table base = 0x%llX)\n", info->process_id, image_base_name, info->directory_table_base);
    return true;
}

int main() {
    check_status_exit(vtum_library_initialize(), "failed to initialize lib");

    printf("VT library version: %s\n", vtum_library_version());

    InterfaceHandle *handle;
    check_status_exit(vtum_interface_create(&handle), "failed to create a new interface");

    VersionInfo version_info;
    vtum_interface_driver_version(handle, &version_info);

    DRIVER_FEATURE features;
    vtum_interface_driver_features(handle, &features);

    printf("Using driver %s version %d.%d.%d.\n",
           (const char *) version_info.application_name,
           version_info.version_major,
           version_info.version_minor,
           version_info.version_patch
    );

    DirectoryTableType directory_table;
    directory_table.tag = DIRECTORY_TABLE_TYPE_DEFAULT;

    DWORD current_process_id = GetCurrentProcessId();
    uint64_t target_value = 0xDEADBEEF;

    if (features.bits & DRIVER_FEATURE_PROCESS_LIST.bits) {
        printf("Current process list:\n");
        check_status_exit(vtum_interface_process_list(handle, print_process), "iterate processes");
    } else {
        printf("Driver does not support iterating processes\n");
    }

    if (features.bits & DRIVER_FEATURE_MEMORY_READ.bits) {
        uint64_t read_buffer = 0x00;
        auto status = vtum_interface_memory_read(
            handle,
            current_process_id,
            &directory_table,
            (uint64_t) &target_value,
            (uint8_t *) &read_buffer, sizeof(read_buffer)
        );
        check_status_exit(status, "read dummy variable");
        printf("Read variable value: %llx\n", read_buffer);
    } else {
        printf("Driver does not support reading memory\n");
    }

    return 0;
}
```