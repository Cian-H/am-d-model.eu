<script>
    export let items_class;
    export let link_class;
    export let button_class;
    export let button_text_class;
    export let display_title = true;

    import "$lib/styles/NavigationHeader.scss";
    import Button from "$lib/components/Button.svelte";
    import Link from "$lib/components/Link.svelte";

    import { navigation } from "$lib/navigation";
</script>

<div class={$$props.class}>
    <div class="navigation-header-items-outer">
        <div class="flexrow-right {items_class}">
            <Link
                class={link_class}
                text="Data Repository"
                hotkey="d"
                redirectFunc={navigation.to404}
            />
            <Link
                class={link_class}
                text="How to Contribute"
                hotkey="h"
                redirectFunc={navigation.toAbout}
            />
            <Button
                class={button_class}
                text="Contact Us"
                inner_class={button_text_class}
                hotkey="c"
                redirectFunc={navigation.toContact}
            />
        </div>
        {#if display_title}
            <div class="flexrow-left {items_class}">
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
