import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {},
    },

    plugins: [forms],

    theme: {
        fontFamily: {
            sans: ["Assistant", "sans-serif"],
            serif: ["Martel", "serif"],
            mono: ["Consolas", "monospace"],
        },
    },
};
