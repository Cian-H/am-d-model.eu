<script>
    import "$lib/styles/NavigationHeader.scss";
    import Button from "$lib/components/Button.svelte";
    import Link from "$lib/components/Link.svelte";

    export let items_class = "";
    export let link_class = "";
    export let button_class = "";
    export let button_text_class = "";
    export let display_title = true;

    import { navigation } from "$lib/navigation";
</script>

<div class={$$props.class}>
    <div class="navigation-header-items-outer">
        <div class="flexrow-right navigation-header-items {items_class}">
            <Link
                class="navigation-header-link {link_class}"
                text="Data Repository"
                hotkey="d"
                redirectFunc={navigation.to404}
            />
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
        {#if display_title}
            <div class="flexrow-left navigation-header-items {items_class}">
                <Link
                    class="navigation-header-site-name"
                    text="AM-D-Model.eu"
                    hotkey="a"
                    redirectFunc={navigation.toHome}
                />
            </div>
        {/if}
    </div>
</div>
