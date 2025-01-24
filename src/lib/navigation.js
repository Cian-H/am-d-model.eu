import { goto } from "$app/navigation";
import { redirect, error } from '@sveltejs/kit';

export const navigation = {
    toHome: () => goto("/"),
    toAbout: () => goto("/about"),
    toContact: () => goto("/contact"),
    toRepository: () => redirect(307, "/repo"),
    to404: () => {
        throw error(404, 'Page not found');
    }
};
