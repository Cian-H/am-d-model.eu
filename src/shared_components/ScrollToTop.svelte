<script>
    export let text = "Return to top";

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    function handleKeydown(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            scrollToTop();
        }
    }
</script>

<span
    class="cursor-pointer {$$props.class}"
    style="cursor: pointer;"
    on:click={scrollToTop}
    on:keydown={handleKeydown}
    tabindex="0"
    role="button"
>
    {text}
</span>
