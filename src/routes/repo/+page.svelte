<script>
    import { logger } from "$lib/server/logger.js";

    function navigateToRepo() {
        logger.debug("Entering '/repo/+page.svelte'.navigateToRepo");
        window.location.href = "https://am-d-model.eu/repo";
        logger.debug("Exiting '/repo/+page.svelte'.navigateToRepo");
    }

    navigateToRepo();
</script>
