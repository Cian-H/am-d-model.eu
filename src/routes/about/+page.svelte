<script>
    import "./AboutPage.scss";
    import NavigationHeader from "$lib/components/NavigationHeader.svelte";
    import NavigationFooter from "$lib/components/NavigationFooter.svelte";
</script>

<div class="about-page">
    <NavigationHeader />
    <div class="copy">
        <main>
            <h1>How Can I Get Involved?</h1>

            <section>
                <h2>Contributing Data</h2>
                <p>
                    All data for the AM-D-Model project is managed via our
                    Invenio instance. Researchers who wish to contribute can
                    request access via our Invenio homepage, at the “Data
                    Repository” link. External contributors will initially be
                    given a 50GB data storage allocation, with the ability to
                    request more from our repository administrators if required.
                </p>
            </section>

            <section>
                <h2>Accessing Data</h2>
                <p>
                    Data for the AM-D-Model project is planned to first be made
                    publicly available on our Invenio instance once it is
                    possible to do so. Data is also intended to be disseminated
                    via other means such as material science data repositories
                    and published datasets once the dissemination phase of the
                    project begins. For those interested, the latest information
                    on data accessibility will be made available here.
                </p>
            </section>

            <section>
                <h2>Collaboration with the AM-D-Model team</h2>
                <p>
                    Researchers interested in other collaborative opportunities
                    with the AM-D-Model team can contact us via the “Contact Us”
                    button, or via the various social media channels made
                    available in the footer of this page.
                </p>
            </section>

            <section>
                <h2>Inquiries</h2>
                <p>
                    We aren’t only interested in hearing from researchers, we
                    also want to hear from all those with an interest in our
                    project. If you have any inquiries about the project and
                    contributing to a community effort towards an open, data
                    driven future for L-PBF please feel free to let us know via
                    the “Contact Us” button.
                </p>
            </section>
        </main>
    </div>
    <NavigationFooter />
</div>
