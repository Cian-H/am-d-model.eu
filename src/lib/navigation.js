import { goto } from "$app/navigation";
import { error } from "@sveltejs/kit";

export const navigation = {
    toHome: () => goto("/"),
    toAbout: () => goto("/about"),
    toContact: () => goto("/contact"),
    toRepository: () => {
        window.location.href = "https://invenio.am-d-model.eu/";
    },
    toMethodology: () => goto("/methodology"),
    to404: () => {
        throw error(404, "Page not found");
    },
};
