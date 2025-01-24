export function handle({ event, resolve }) {
    if (event.url.pathname.startsWith('/repo')) {
        return new Response(null, { status: 404 }); // Let Caddy handle it
    }
    return resolve(event);
}
