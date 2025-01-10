<script>
    export let items_class;
    export let link_class;
    export let button_class;
    export let button_text_class;
    export let display_title = true;

    import "./NavigationHeader.scss";
    import Button from "./Button.svelte";
    import Link from "./Link.svelte";
</script>

<div class={$$props.class}>
    <div class="navigation-header-items-outer">
        <div class="flexrow-right {items_class}">
            <Link class={link_class} text="Data Repository" hotkey="d" />
            <Link class={link_class} text="How to Contribute" hotkey="h" />
            <Button
                class={button_class}
                text="Contact Us"
                inner_class={button_text_class}
                hotkey="c"
            />
        </div>
        {#if display_title}
            <div class="flexrow-left {items_class}">
                <div class="navigation-header-site-name">AM-D-Model.eu</div>
            </div>
        {/if}
    </div>
</div>
