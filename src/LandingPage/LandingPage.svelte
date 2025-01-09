<script>
    import "./LandingPage.scss";
    import NavigationHeader from "./NavigationHeader.svelte";
    import Splash from "./Splash.svelte";
    import InfoScroll from "./InfoScroll.svelte";
    import BottomCall from "./BottomCall.svelte";
    import NavigationFooter from "./NavigationFooter.svelte";

    let className = "";
    export { className as class };
</script>

<div class={"landing-page " + className}>
    <div class="landing-zone">
        <NavigationHeader />
        <Splash />
    </div>
    <InfoScroll />
    <BottomCall />
    <NavigationFooter />
</div>
