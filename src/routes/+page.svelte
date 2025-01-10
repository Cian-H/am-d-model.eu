<script>
    import "./LandingPage.scss";
    import NavigationHeader from "$lib/components/NavigationHeader.svelte";
    import "./NavigationHeader.scss";
    import NavigationFooter from "$lib/components/NavigationFooter.svelte";
    import Splash from "./Splash.svelte";
    import InfoScroll from "./InfoScroll.svelte";
    import BottomCall from "./BottomCall.svelte";

    let use_video = true;
    function handleVideoError() {
        use_video = false;
    }
</script>

<div class={"landing-page"}>
    <div class="landing-zone-outer">
        {#if use_video}
            <video
                class="background"
                autoplay
                muted
                playsinline
                on:error={handleVideoError}
            >
                <source src="landing.webm" type="video/webm" />
            </video>
        {:else}
            <img
                class="background"
                src="landing.webp"
                alt="Landing background of L-PBF print in progress"
            />
        {/if}
        <div class="landing-zone">
            <NavigationHeader
                class="landing-navigation-header"
                items_class="landing-navigation-header-items"
                link_class="landing-navigation-header-link"
                button_class="landing-navigation-header-button"
                button_text_class="landing-navigation-header-button-text"
                display_title={false}
            />
            <Splash />
        </div>
    </div>
    <InfoScroll />
    <BottomCall />
    <NavigationFooter />
</div>
