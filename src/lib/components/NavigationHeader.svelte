<script>
    import "$lib/styles/NavigationHeader.scss";
    import Dropdown from "$lib/components/Dropdown.svelte";
    import Button from "$lib/components/Button.svelte";
    import Link from "$lib/components/Link.svelte";

    import { CDN } from "$lib/constants";

    export let items_class = "";
    export let link_class = "";
    export let button_class = "";
    export let button_text_class = "";
    export let display_home = true;
    export let display_logo = true;

    import { navigation } from "$lib/navigation";

    const dataItems = [
        { text: "Repository", redirectFunc: navigation.toRepository, hotkey: "dr" },
        { text: "Methodology", redirectFunc: navigation.toMethodology, hotkey: "dm" },
    ];
</script>

<div class={$$props.class}>
    <div class="navigation-header">
        <div class="flexrow-right navigation-header-items {items_class}">
            {#if display_home}
                <Link
                    class="navigation-header-link {link_class}"
                    text="Home"
                    hotkey="d"
                    redirectFunc={navigation.toHome}
                />
            {/if}
            <Dropdown label="Data" items={dataItems} class="navigation-header-link {link_class}" />
            <Link
                class="navigation-header-link {link_class}"
                text="How to Contribute"
                hotkey="h"
                redirectFunc={navigation.toAbout}
            />
            <Button
                class="navigation-header-button {button_class}"
                text="Contact Us"
                inner_class="navigation-header-button-text {button_text_class}"
                hotkey="c"
                redirectFunc={navigation.toContact}
            />
        </div>
        {#if display_logo}
            <div class="flexrow-left navigation-header-logo-link {items_class}">
                <a href="https://esaform.org/">
                    <img
                        class="navigation-header-logo"
                        src="{CDN}/ESAFORM_logo.webp"
                        alt="ESAFORM Logo"
                    />
                </a>
            </div>
        {/if}
    </div>
</div>
