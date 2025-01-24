import { goto } from "$app/navigation";
import { error } from '@sveltejs/kit';
import { logger } from "$lib/server/logger.js";

export const navigation = {
    toHome: () => goto("/"),
    toAbout: () => goto("/about"),
    toContact: () => goto("/contact"),
    toRepository: () => {
        logger.debug("Entering '/lib/navigation.js'.toRepository");
        goto("/repo");
        logger.debug("Exiting '/lib/navigation.js'.toRepository");
    },
    to404: () => {
        throw error(404, 'Page not found');
    }
};
