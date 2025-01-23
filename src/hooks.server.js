export const handle = async ({ event, resolve }) => {
    // Paths to be handled by proxy
    const proxyPaths = ["/repo"];

    if (proxyPaths.some(path => event.url.pathname.startsWith(path))) {
        // completely skip sveltekit routing
        return;
    }

    // Let SvelteKit handle other paths
    return resolve(event);
};
