<script>
    import "./BottomCall.scss";
    import Button from "$lib/components/Button.svelte";

    import { navigation } from "$lib/navigation";
</script>

<div class="btmcall">
    <div class="btmcall-text">Interested in the project?</div>
    <div class="btmcall-buttons">
        <Button
            class="btmcall-button1"
            text="Get Involved!"
            inner_class="btmcall-get-involved"
            hotkey="g"
            redirectFunc={navigation.toAbout}
        />
        <Button
            class="btmcall-button2"
            text="Contact Us"
            inner_class="btmcall-contact-us"
            hotkey="c"
            redirectFunc={navigation.toContact}
        />
    </div>
</div>
