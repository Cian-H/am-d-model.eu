import { goto } from "$app/navigation";
import { error } from '@sveltejs/kit';

export const navigation = {
    toHome: () => goto("/"),
    toAbout: () => goto("/about"),
    toContact: () => goto("/contact"),
    toRepository: () => goto("/repo"),
    to404: () => {
        throw error(404, 'Page not found');
    }
};
