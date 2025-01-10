<script>
    import "./Splash.scss";
    import Button from "$lib/components/Button.svelte";
</script>

<div class="splash">
    <div class="splash-copy">
        <div class="splash-title">
            Benchmarking the future of metal 3d printing
        </div>
        <div class="splash-body">
            AM-D-Model is an ESAFORM benchmark project aiming to create the data
            that will drive the future of Laser Powder-Bed-Fusion (L-PBF)
            research and innovation. By connecting an international network of
            collaborators AM-D-Model will create a comprehensive, open L-PBF
            benchmark dataset. As part of our commitment to open science, this
            dataset will be openly shared with the research community. Our goal
            is to create a universal benchmark for the L-PBF community, sparking
            the collaboration and innovation that will build the future of this
            technology.
        </div>
        <Button
            class="splash-button"
            text="Get Involved!"
            inner_class="splash-get-involved"
            hotkey="g"
        />
    </div>
</div>
