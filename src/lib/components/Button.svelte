<script>
    export let text = "Button_Text";
    export let inner_class = "";
    export let redirectFunc = () => {};
    export let hotkey = "";

    function handleKeypress(event) {
        if (event.key === hotkey) {
            event.preventDefault();
            redirectFunc();
        }
    }
</script>

<div
    class="cursor-pointer select-none {$$props.class}"
    style="cursor:pointer"
    on:click={redirectFunc}
    on:keypress={handleKeypress}
    tabindex="0"
    role="button"
>
    <div class={inner_class}>{text}</div>
</div>
