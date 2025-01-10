<script>
    import "./LandingPage.scss";
    import NavigationHeader from "./NavigationHeader.svelte";
    import Splash from "./Splash.svelte";
    import InfoScroll from "./InfoScroll.svelte";
    import BottomCall from "./BottomCall.svelte";
    import NavigationFooter from "./NavigationFooter.svelte";

    let className = "";
    export { className as class };

    let useVideo = true;
    function handleVideoError() {
        useVideo = false;
    }
</script>

<div class={"landing-page " + className}>
    <div class="landing-zone-outer">
        {#if useVideo}
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
            <NavigationHeader />
            <Splash />
        </div>
    </div>
    <InfoScroll />
    <BottomCall />
    <NavigationFooter />
</div>
