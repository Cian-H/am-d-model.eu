export const handle = async ({ event, resolve }) => {
    // Paths to be handled by proxy
    const proxyPaths = ["/repo"];

    if (proxyPaths.some(path => event.url.pathname.startsWith(path))) {
        // Return empty response, letting proxy handle it
        return new Response(null, { status: 444 });
    }

    // Let SvelteKit handle other paths
    return resolve(event);
};
