<script>
    export let text = "Link_Text";
    export let redirectFunc = () => {};
    export let hotkey = "";

    function handleKeypress(event) {
        if (
            event.key === hotkey ||
            event.key === "Enter" ||
            event.key === " "
        ) {
            event.preventDefault();
            redirectFunc();
        }
    }
</script>

<div
    class="cursor-pointer select-none {$$props.class}"
    style="cursor: pointer;"
    on:click={redirectFunc}
    on:keydown={handleKeypress}
    tabindex="0"
    role="link"
>
    {text}
</div>
