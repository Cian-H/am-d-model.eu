import { goto } from "$app/navigation";
import { error } from '@sveltejs/kit';

export const navigation = {
    toHome: () => goto("/"),
    toAbout: () => goto("/about"),
    toContact: () => goto("/contact"),
    toRepository: () => {
        console.log("Entering '/lib/navigation.js'.toRepository");
        goto("/repo");
        console.log("Exiting '/lib/navigation.js'.toRepository");
    },
    to404: () => {
        throw error(404, 'Page not found');
    }
};
