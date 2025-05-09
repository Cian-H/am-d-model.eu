const config = {
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    printWidth: 100,
    plugins: ["prettier-plugin-svelte"],
    overrides: [
        {
            files: "*.svelte",
            options: {
                parser: "svelte",
            },
        },
    ],
};

export default config;
