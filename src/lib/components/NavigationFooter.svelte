<script>
    import "$lib/styles/NavigationFooter.scss";
    import ScrollToTop from "$lib/components/ScrollToTop.svelte";
    import Link from "$lib/components/Link.svelte";

    import { navigation } from "$lib/navigation";
    import { assets } from "$app/paths";
</script>

<div class="navigation-footer">
    <div class="navigation-footer-column-left">
        <Link
            class="navigation-footer-site-name"
            text="AM-D-Model.eu"
            hotkey="a"
            redirectFunc={navigation.toHome}
        />
        <div class="navigation-footer-social-media">
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="{assets}/facebook.svg"
                    alt="Grey Facebook icon"
                />
            </div>
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="{assets}/linkedin.svg"
                    alt="Grey LinkedIn icon"
                />
            </div>
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="{assets}/youtube.svg"
                    alt="Grey YouTube icon"
                />
            </div>
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="{assets}/instagram.svg"
                    alt="Grey Instagram icon"
                />
            </div>
        </div>
    </div>
    <div class="navigation-footer-column-mid">
        <ScrollToTop
            class="navigation-footer-return"
            text="↥↥↥ Return to top ↥↥↥"
        />
    </div>
    <div class="navigation-footer-column-right">
        <div class="navigation-footer-topic-column">
            <div class="navigation-footer-topic">Topic</div>
            <Link
                class="navigation-footer-link"
                text="Data Repository"
                hotkey="d"
                redirectFunc={navigation.to404}
            />
            <Link
                class="navigation-footer-link"
                text="How to Contribute"
                hotkey="h"
                redirectFunc={navigation.toAbout}
            />
            <Link
                class="navigation-footer-link"
                text="Contact us"
                hotkey="c"
                redirectFunc={navigation.toContact}
            />
        </div>
    </div>
</div>
