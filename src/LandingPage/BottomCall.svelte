<script>
    import "./BottomCall.scss";
    import Button from "../shared_components/Button.svelte";
</script>

<div class="btmcall">
    <div class="btmcall-text">Interested in the project?</div>
    <div class="btmcall-buttons">
        <Button
            class="btmcall-button1"
            text="Get Involved!"
            inner_class="btmcall-get-involved"
            hotkey="g"
        />
        <Button
            class="btmcall-button2"
            text="Contact Us"
            inner_class="btmcall-contact-us"
            hotkey="c"
        />
    </div>
</div>
