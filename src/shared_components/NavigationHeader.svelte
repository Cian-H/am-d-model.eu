<script>
    export let items_class;
    export let link_class;
    export let button_class;
    export let button_text_class;

    import Button from "../shared_components/Button.svelte";
    import Link from "../shared_components/Link.svelte";
</script>

<div class={$$props.class}>
    <div class={items_class}>
        <Link class={link_class} text="Data Repository" hotkey="d" />
        <Link class={link_class} text="How to Contribute" hotkey="h" />
        <Button
            class={button_class}
            text="Contact Us"
            inner_class={button_text_class}
            hotkey="c"
        />
    </div>
</div>
