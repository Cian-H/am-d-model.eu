<script>
    import "./Methodology.scss";
    import NavigationHeader from "$lib/components/NavigationHeader.svelte";
    import NavigationFooter from "$lib/components/NavigationFooter.svelte";
    import Latex from "$lib/components/Latex.svelte";

    import { CDN } from "$lib/constants";

    const laser_params = [
        { name: "Laser Power (P)", values: [80, 120, 160, 200], unit: "W" },
        { name: "Scan Speed (V)", values: [600, 800, 1000, 1200], unit: "mm/s" },
        { name: "Hatch Spacing (H)", values: [60, 90, 120, 150], unit: "µm" },
        { name: "Spot Size (f)", values: [80, 90, 100, 110], unit: "µm" },
    ];

    const ved_params = [
        {
            name: "Volumetric Energy Density based on spot size (VED<sub>f</sub>)",
            min: 4.04,
            max: 69.44,
            unit: "J/mm<sup>3</sup>",
        },
        {
            name: "Volumetric Energy Density based on hatch spacing (VED<sub>H</sub>)",
            min: 8.89,
            max: 111.11,
            unit: "J/mm<sup>3</sup>",
        },
    ];

    const vedf_eq = "VED_f=\\frac{P}{V \\times L \\times f}\\space\\left( \\frac{J}{mm^3} \\right)";
    const vedh_eq = "VED_H=\\frac{P}{V \\times L \\times H}\\space\\left( \\frac{J}{mm^3} \\right)";

    const pyrometry_params = [
        { name: "Measurable temperature range", desc: "500–2500 °C" },
        { name: "Field of view", desc: "0.5 mm" },
        { name: "Spectral range", desc: "1.58–1.80 µm" },
        { name: "Response time (T90)", desc: "10 µs" },
        { name: "Resolution", desc: "10-bit" },
        { name: "Data acquisition rate", desc: "100 kHz" },
    ];

    /**
     * @typedef {Object} DataRow
     * @property {number} x - X coordinate
     * @property {number} y - Y coordinate
     * @property {number} t1 - First temperature
     * @property {number} t2 - Second temperature
     */

    /**
     * @type {{
     *   headers: Array<keyof DataRow>,
     *   data: DataRow[]
     * }}
     */
    const ir_table = {
        headers: ["x", "y", "t1", "t2"],
        data: [
            { x: -20139, y: -15428, t1: 820, t2: 820 },
            { x: -20139, y: -15428, t1: 804, t2: 804 },
            { x: -20139, y: -15428, t1: 811, t2: 811 },
            { x: -20139, y: -15428, t1: 803, t2: 803 },
            { x: -20139, y: -15428, t1: 812, t2: 812 },
            { x: -20139, y: -15428, t1: 812, t2: 812 },
            { x: -20139, y: -15428, t1: 808, t2: 808 },
            { x: -20139, y: -15428, t1: 815, t2: 815 },
            { x: -20139, y: -15428, t1: 808, t2: 808 },
            { x: -20139, y: -15428, t1: 815, t2: 815 },
            { x: -20139, y: -15428, t1: 799, t2: 799 },
        ],
    };
</script>

<div class="methodology">
    <NavigationHeader />
    <main>
        <div class="copy">
            <h1>Methodology</h1>
            <p>
                This page describes the methodology being used for sample fabrication and in-situ IR
                pyrometry being used by the AM-D-Model project. Data contributions to the project
                should follow a similar methodology to this, to ensure data consistency in the
                resulting benchmark. As part of our commitment to openness and transparency, we
                encourage collaborators and interested parties to review our methodology and engage
                with our team. We welcome any and all suggestions for potential improvements and
                discussions on how we can ensure that this project produces a valuable benchmark
                dataset that can drive the future development of metal AM.
            </p>
        </div>

        <div class="copy">
            <section>
                <h2>Component Geometry and Specification</h2>
                <div class="copy-with-figure">
                    <div class="copy">
                        <p>
                            The geometry of the test AM components (samples) shown in Figure 1
                            consist of a 7mm × 7mm × 7.2mm (L x B x H) cuboid, complemented with a
                            tapered support structure of height, 2.85 mm. Additionally, sample
                            numbers with a height of 300 µm were incorporated into the top of the
                            cuboid geometry, resulting in a total sample dimension of 7mm × 7mm ×
                            10.35 mm. This geometry, along with the support structure design, was
                            specifically chosen to enable straightforward sample removal using a wet
                            abrasive cutter equipped with 2.8 mm thick blades, while also ensuring
                            easy handling during characterization.
                        </p>
                    </div>
                    <div class="figure-column">
                        <figure>
                            <img
                                src="{CDN}/methodology_fig1.webp"
                                alt="A CAD model projection of one of the samples produced."
                            />
                            <figcaption>
                                <b>Figure 1.</b> CAD representations of the sample geometry:
                                <i>(a)</i>
                                isometric view, and <i>(b)</i> front view.
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </div>

        <div class="copy">
            <section>
                <h2>AM Pilot Line and Process Parameters</h2>
                <p>
                    The samples were fabricated using the AM pilot line at Dublin City University
                    (DCU). This pilot line is the AconityMINI® 3D powder bed fusion-laser system.
                    It is equipped with a 200 W, 1068 nm Yb- fiber laser. This system supports laser
                    scanning speeds of up to 2000 mm/s and features a minimum laser beam diameter of
                    32 µm. High-purity argon gas (99.99999% purity) was used as shielding gas, and
                    the "Skywriting" feature was enabled during the fabrication process. A
                    comprehensive PBF-LB process parameter window was defined through a
                    full-factorial experimental design. This approach systematically explores the
                    effects of key process parameters by varying four factors at four levels each (4
                    factors × 4 levels = 4<sup>4</sup>), resulting in a total of 256 unique
                    parameter combinations. The factors and their corresponding levels are as
                    follows:
                </p>
                <div class="laser-param-list">
                    <dl>
                        {#each laser_params as param}
                            <div>
                                <dt>{@html param.name}:</dt>
                                <dd>[ {@html param.values.join(", ")} ] {@html param.unit}</dd>
                            </div>
                        {/each}
                    </dl>
                </div>
                <p>
                    The range of energy densities calculated from these parameters spans the
                    following:
                </p>
                <div class="ved-param-list">
                    <dl>
                        {#each ved_params as param}
                            <div>
                                <dt>{@html param.name}:</dt>
                                <dd>
                                    [ {@html param.min} to {@html param.max} ] {@html param.unit}
                                </dd>
                            </div>
                        {/each}
                    </dl>
                </div>
                <p>
                    The metal powder feedstock used was the PowderRange® 316L stainless steel
                    powder supplied by Carpenter Additive®. The particle size of the powder
                    feedstock ranged between 15 and 45 µm. For this reason, the layer thickness (L)
                    parameter was maintained at a constant value of 50 µm. At this layer thickness,
                    each sample with dimensions of 7 mm × 7 mm × 10.3 mm required 206 layers to
                    complete fabrication. A bidirectional scanning strategy was applied, starting
                    with a layer angle of 45 degrees, followed by a 90° rotation for each subsequent
                    layer.
                </p>
                <div class="copy-with-figure">
                    <div class="copy">
                        <p>
                            Two sets of the 256 unique parameter combinations were fabricated,
                            yielding a total of 512 samples. Figure 2 shows representative pictures
                            of the first 100 samples produced. During the final print session, 56
                            remaining samples from the first set were combined with 56 remaining
                            samples from the second set, creating a final print batch with 112
                            samples. This method was implemented to maintain consistent interlayer
                            printing times and achieve thermal distribution uniformity across all
                            samples, comparable to the other print batches of 100 samples.
                        </p>
                    </div>
                    <div class="figure-column">
                        <figure>
                            <img
                                src="{CDN}/methodology_fig2.webp"
                                alt="2 photographs of a PBF buildplate featuring 100 samples."
                            />
                            <figcaption>
                                <b>Figure 2.</b> Exemplar pictures of 100 fabricated samples still
                                attached to the build plate <i>(a)</i> top view and <i>(b)</i> angled
                                view.
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <p>
                    Volumetric Energy Density (VED) is a derived thermodynamic metric widely used in
                    AM industry and reported in metal AM research. It is typically expressed as
                    either the spot size variant (<i>VED<sub>f</sub></i>) or the hatch spacing
                    variant (<i>VED<sub>H</sub></i>), calculated using the below equations,
                    respectively:
                </p>
                <div class="equation-container">
                    <Latex math={vedf_eq} class="equation" displayMode />
                </div>
                <div class="equation-container">
                    <Latex math={vedh_eq} class="equation" displayMode />
                </div>
                <p>
                    However, these two VED variants are not directly comparable, as neither
                    exclusively captures the full complexity of melt pool physics. This includes
                    melt pool formation and propagation, solidification geometry (width and depth),
                    and the intricate mass and heat transfer between the melt pool and the
                    surrounding material. Given these limitations, both <i>VED<sub>f</sub></i> and
                    <i>VED<sub>H</sub></i> are included as PBF-LB process-based features. The inclusion
                    of these two distinct measures of volumetric energy density, further enriches the
                    experimental space, enabling a nuanced exploration of the relevance of energy distribution
                    to the ML model performance.
                </p>
            </section>

            <section>
                <h2>Infrared (IR) Pyrometry</h2>
                <p>
                    IR pyrometry measures thermal radiation from the melt pools during the PBF-LB
                    process, enabling real-time recording of temperature distributions. This helps
                    identify issues such as overheating, insufficient melting, or thermal gradients
                    that may cause defects or residual stresses.
                </p>
                <div class="copy-with-figure">
                    <div class="figure-column">
                        <figure>
                            <img
                                src="{CDN}/methodology_fig3.webp"
                                alt="2 photographs of a PBF buildplate featuring 100 samples."
                            />
                            <figcaption>
                                <b>Figure 3.</b> Installed in-situ monitoring modules in the
                                <i>(a)</i>
                                <a
                                    class="text-blue-700"
                                    href="https://aconity3d.com/products/aconity-mini/"
                                    >AconityMINI PBF-LB machine</a
                                >
                                at DCU; <i>(b)</i> two
                                <a
                                    class="text-blue-700"
                                    href="https://www.kleiberinfrared.com/index.php/en/products/highspeed/series-740-lo-730-lo/series-740-lo.html"
                                    >Kleiber® KG 740-LO pyrometers</a
                                >
                                in-line with the laser beam path; <i>(c)</i>
                                <a class="text-blue-700" href="https://amiquam.net/"
                                    >AMiquam W1 ECM module</a
                                >
                                with two channels; and <i>(d)</i> one
                                <a
                                    class="text-blue-700"
                                    href="https://avisoft.com/ultrasound-microphones/cm16-cmpa/"
                                    >Avisoft-Bioacoustics® CM16/CMPA ultrasonic microphone</a
                                >.
                            </figcaption>
                        </figure>
                    </div>
                    <div class="copy">
                        <p>
                            In-situ temporal IR monitoring was performed using two
                            <a
                                href="https://www.kleiberinfrared.com/index.php/en/products/highspeed/series-740-lo-730-lo/series-740-lo.html"
                                >Kleiber® KG 740-LO pyrometers</a
                            >
                            fitted to our AconityMINI machine (Figure 3a). The optical path of both pyrometers
                            was configured to be in line with the laser beam path (see Figure 3b). This
                            enabled the capturing of the meltpool positions (x, y) with the corresponding
                            relative temperature of the meltpool (T) of all samples being fabricated.
                            The pyrometers were calibrated to a black-body standard to the same temperature
                            range, and features:
                        </p>
                    </div>
                </div>

                <div class="copy">
                    <div class="pyrometry-param-list">
                        <dl>
                            {#each pyrometry_params as param}
                                <div>
                                    <dt>{@html param.name}:</dt>
                                    <dd>{@html param.desc}</dd>
                                </div>
                            {/each}
                        </dl>
                    </div>
                </div>
            </section>
            <section>
                <h2>Relative Density</h2>
                <p>
                    The target material property is the observed relative density (RD) of the test
                    samples, expressed as a percentage of the theoretical density of a perfectly
                    dense specimen. The RD of each sample was determined using Archimedes’
                    principle, following the ASTM B962-23 standard. Ethanol served as the immersion
                    fluid for the measurements, and the assumed theoretical density of 316L -SS was
                    to be 8000 kg/m<sup>3</sup> for these calculations.
                </p>
            </section>
            <section>
                <h2>Sensor Data</h2>
                <p>
                    The collected data from the sensors form a comprehensive dataset designed to
                    capture various aspects of the PBF-LB process. This dataset integrates
                    measurements from multiple sources, ensuring a detailed representation of the
                    process parameters and their influence on the target material property
                    prediction.
                </p>
            </section>
            <section>
                <h2>Infrared Pyrometry (IR) Data</h2>
                <p>
                    IR data is stored as layer-by-layer .pcd files, where the filename represents
                    the layer thickness (e.g., 5.24.pcd corresponds to IR data at a 5.24 mm layer
                    thickness). Each file contains meltpool coordinates (x, y) and relative meltpool
                    temperature (in degrees Celsius) from the two pyrometers, as illustrated in
                    Table 1.
                </p>
                <figure>
                    <figcaption>
                        <b>Table 1:</b> Raw IR data structure
                    </figcaption>
                    <table>
                        <thead>
                            <tr>
                                {#each ir_table.headers as header}
                                    <th>{header}</th>
                                {/each}
                            </tr>
                        </thead>
                        <tbody>
                            {#each ir_table.data as row}
                                <tr>
                                    {#each ir_table.headers as header}
                                        <td>{row[header]}</td>
                                    {/each}
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </figure>
            </section>
        </div>
    </main>
    <NavigationFooter />
</div>
