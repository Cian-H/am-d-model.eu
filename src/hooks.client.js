export const handleError = ({ error, event }) => {
    if (event.url.pathname.startsWith("/repo")) {
        window.location.href = event.url.pathname;
        return;
    }
};
