<script>
    import "./NavigationFooter.scss";
    import "../shared_components/ScrollToTop.svelte";
    import ScrollToTop from "./ScrollToTop.svelte";
    import Link from "./Link.svelte";
</script>

<div class="navigation-footer">
    <div class="navigation-footer-column-left">
        <div class="navigation-footer-site-name">AM-D-Model.eu</div>
        <div class="navigation-footer-social-media">
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="facebook.svg"
                    alt="Grey Facebook icon"
                />
            </div>
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="linkedin.svg"
                    alt="Grey LinkedIn icon"
                />
            </div>
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="youtube.svg"
                    alt="Grey YouTube icon"
                />
            </div>
            <div class="navigation-footer-buttons-icon">
                <img
                    class="navigation-footer-social-icon"
                    src="instagram.svg"
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
            />
            <Link
                class="navigation-footer-link"
                text="How to Contribute"
                hotkey="h"
            />
            <Link class="navigation-footer-link" text="Contact us" hotkey="c" />
        </div>
    </div>
</div>
