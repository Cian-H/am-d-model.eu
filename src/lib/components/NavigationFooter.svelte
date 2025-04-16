<script>
    import "$lib/styles/NavigationFooter.scss";
    import ScrollToTop from "$lib/components/ScrollToTop.svelte";
    import Link from "$lib/components/Link.svelte";

    import { CDN } from "$lib/constants";

    import { navigation } from "$lib/navigation";
</script>

<div class="navigation-footer">
    <div class="navigation-footer-column-left">
        <div class="navigation-footer-logo-link">
            <a href="https://esaform.org/">
                <img
                    class="navigation-footer-logo"
                    src="{CDN}/ESAFORM_logo.webp"
                    alt="ESAFORM Logo"
                />
            </a>
        </div>
        <div class="navigation-footer-social-media">
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="https://s.magecdn.com/social/mb-facebook.svg"
                    alt="Black Facebook icon"
                />
            </div>
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="https://s.magecdn.com/social/mb-linkedin.svg"
                    alt="Black LinkedIn icon"
                />
            </div>
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="https://s.magecdn.com/social/mb-youtube.svg"
                    alt="Black YouTube icon"
                />
            </div>
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="https://s.magecdn.com/social/mb-instagram.svg"
                    alt="Black Instagram icon"
                />
            </div>
        </div>
    </div>
    <div class="navigation-footer-column-mid">
        <ScrollToTop class="navigation-footer-return" text="↥↥↥ Return to top ↥↥↥" />
    </div>
    <div class="navigation-footer-column-right">
        <div class="navigation-footer-topic-column">
            <div class="navigation-footer-topic">Topic</div>
            <Link
                class="navigation-footer-link"
                text="Home"
                hotkey="d"
                redirectFunc={navigation.toHome}
            />
            <Link
                class="navigation-footer-link"
                text="Data Repository"
                hotkey="d"
                redirectFunc={navigation.toRepository}
            />
            <Link
                class="navigation-footer-link"
                text="Data Methodology"
                hotkey="d"
                redirectFunc={navigation.toMethodology}
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
