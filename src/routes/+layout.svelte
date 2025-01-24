<script>
    import "../app.css";
    import "$lib/styles/fonts.css";
    import "$lib/styles/styles.css";
    import "$lib/styles/vars.css";

    import { beforeNavigate } from "$app/navigation";

    beforeNavigate(({ to, cancel }) => {
        if (to?.url.pathname.startsWith("/repo")) {
            cancel();
            window.location.href = to.url.pathname;
        }
    });

    let { children } = $props();
</script>

{@render children()}
