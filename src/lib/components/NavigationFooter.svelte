<script>
    import "$lib/styles/NavigationFooter.scss";
    import ScrollToTop from "$lib/components/ScrollToTop.svelte";
    import Link from "$lib/components/Link.svelte";

    import { CDN } from "$lib/constants";

    import { navigation } from "$lib/navigation";

    const partnerLogos = [
        {
            href: "https://dcu.ie/",
            src: CDN + "/DCU_Logo.webp",
            alt: "Dublin City University Logo",
        },
        { href: "https://ethz.ch", src: CDN + "/ETHZ_Logo.webp", alt: "ETH Zurich Logo" },
        {
            href: "https://uliege.be",
            src: CDN + "/UL_Logo.webp",
            alt: "University of Liege Logo",
        },
        { href: "https://aalto.fi", src: CDN + "/AU_Logo.webp", alt: "Aalto University Logo" },
        {
            href: "https://nus.edu.sg",
            src: CDN + "/NUS_Logo.webp",
            alt: "National University of Singapore Logo",
        },
        {
            href: "https://www.strath.ac.uk",
            src: CDN + "/USG_Logo.webp",
            alt: "Strathclyde University Logo",
        },
        {
            href: "https://dtu.dk",
            src: CDN + "/DTU_Logo.webp",
            alt: "Danmarks Teksnike Universitet Logo",
        },
        {
            href: "https://eng.pw.edu.pl",
            src: CDN + "/WUT_Logo.webp",
            alt: "Warsaw University of Technology Logo",
        },
    ];
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
        <div class="logo-grid-container">
            {#each partnerLogos as logo (logo.src)}
                <a href={logo.href} target="_blank" rel="noopener noreferrer" title={logo.alt}>
                    <img src={logo.src} alt={logo.alt} class="grid-logo" />
                </a>
            {/each}
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
