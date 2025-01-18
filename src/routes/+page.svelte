<script>
    import NavigationHeader from "$lib/components/NavigationHeader.svelte";
    import NavigationFooter from "$lib/components/NavigationFooter.svelte";
    import Splash from "./Splash.svelte";
    import InfoScroll from "./InfoScroll.svelte";
    import BottomCall from "./BottomCall.svelte";
    import "./LandingPage.scss";
    import "./NavigationHeader.scss";

    import { CDN } from "$lib/constants";

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
                preload="auto"
                poster="{CDN}/landing.webp"
                autoplay
                muted
                playsinline
                on:error={handleVideoError}
            >
                <source src="{CDN}/landing.webm" type="video/webm" />
            </video>
        {:else}
            <img
                class="background"
                src="{CDN}/landing.webp"
                alt="Landing background of L-PBF print in progress"
            />
        {/if}
        <div class="landing-zone">
            <NavigationHeader
                class="splash-navigation-header"
                display_title={false}
            />
            <Splash />
        </div>
    </div>
    <InfoScroll />
    <BottomCall />
    <NavigationFooter />
</div>
