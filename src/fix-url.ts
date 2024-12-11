function fixUrl(input: string | URL): URL {
    const url = typeof input === "string" ? new URL(input.startsWith("/") ? `${location.origin}${input}` : input) : input;
    if (!url.pathname.endsWith("/")) {
        url.pathname = `${url.pathname}/`;
    }
    return url;
}

function fixupPathTails() {
    if (!("location" in window)) {
        return;
    }

    if (location.pathname.endsWith("/")) {
        return;
    }

    if ("history" in window as any) {
        /* if we have history just replace the current entry */
        history.replaceState(history.state, null, fixUrl(window.location.href));
    } else {
        /* History not available. Reload site */
        window.location.href = `${location.pathname}/${location.search}${location.hash}`;
    }
}
if (typeof window === "object") {
    fixupPathTails();
}