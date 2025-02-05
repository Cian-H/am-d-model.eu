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
                <h2>Sharing Data</h2>
                <p>
                    As a project aimed at producing a benchmark dataset, the most important
                    contribution you can make is by sharing data. Whether contributing to the data
                    or using the data in your own research, a project such as this is built on
                    researcher engagement with the dataset we are producing. As such, in the spirit
                    of open science we encourage any interested researchers to get involved in the
                    production and analysis of this dataset. And following the final, open release
                    of the dataset we even further encourage researchers to share this dataset as a
                    universal benchmark for the PBF community at large.
                </p>
                <p>
                    To ensure the success of this project, we ask only that researchers who wish to
                    make use of this dataset respect the following essential project requirements:
                </p>
                <ul class="list-disc">
                    <li>
                        All contributors will be appropriately included as authors in the IJMF
                        publication announcing public release. Participants will be contacted by our
                        publication coordinator to request a writeup of their contributions and/or
                        findings of note to be included in the release publication. The public
                        release publication is currently expected to be submitted before October 1st
                        2025.
                    </li>
                    <li>
                        We insist that participants do not share or publish the dataset before the
                        official public release. This is to avoid damaging our ability to measure
                        the impact of the benchmark dataset project. This is important as our
                        ability to justify future open science initiatives such as this is heavily
                        dependant on such impact metrics.
                    </li>
                    <li>
                        Participants are asked to attend and/or present in person at the ESAFORM
                        2025 conference. This conference will be a key milestone of project
                        participation, including open discussions among project participants on the
                        state and direction of the project. In-person cooperation is core to
                        collaborative projects such as these, so we ask that at least one member of
                        each participating team meet with the core project team at the conference so
                        we can build lasting collaborative research relationships.
                    </li>
                </ul>
                <section>
                    <h3>Contributing Data</h3>
                    <p>
                        All data for the AM-D-Model project is managed via our Invenio instance.
                        Researchers who wish to contribute can request access via our Invenio
                        homepage, at the “Data Repository” link. External contributors will
                        initially be given a 50GB data storage allocation, with the ability to
                        request more from our repository administrators if required.
                    </p>
                </section>

                <section>
                    <h3>Accessing Data</h3>
                    <p>
                        Data for the AM-D-Model project is planned to first be made publicly
                        available on our Invenio instance once it is possible to do so. Data is also
                        intended to be disseminated via other means such as material science data
                        repositories and published datasets once the dissemination phase of the
                        project begins. For those interested, the latest information on data
                        accessibility will be made available here.
                    </p>
                </section>
            </section>

            <section>
                <h2>Collaboration with the AM-D-Model team</h2>
                <p>
                    Researchers interested in other collaborative opportunities with the AM-D-Model
                    team can contact us via the “Contact Us” button, or via the various social media
                    channels made available in the footer of this page.
                </p>
            </section>

            <section>
                <h2>Inquiries</h2>
                <p>
                    We aren’t only interested in hearing from researchers, we also want to hear from
                    all those with an interest in our project. If you have any inquiries about the
                    project and contributing to a community effort towards an open, data driven
                    future for L-PBF please feel free to let us know via the “Contact Us” button.
                </p>
            </section>
        </main>
    </div>
    <NavigationFooter />
</div>
