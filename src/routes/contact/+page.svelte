<script>
    import "./ContactPage.scss";
    import NavigationHeader from "$lib/components/NavigationHeader.svelte";
    import NavigationFooter from "$lib/components/NavigationFooter.svelte";
    import ContactForm from "$lib/components/ContactForm.svelte";

    import { CDN } from "$lib/constants";

    const EMAIL_ENDPOINT =
        "https://bst564m4ws3ouxg27nqrpfqv5a0jbhxi.lambda-url.eu-west-1.on.aws/";
</script>

<div class="contact-page">
    <NavigationHeader />
    <div class="contact-content">
        <div class="contact-form-column">
            <h1>Contact Us</h1>
            <h2>We look forward to hearing from you!</h2>
            <p>
                Interested in contributing, collaborating, or otherwise getting
                in touch with the AM-D-Model team? We are always looking for
                input on our project from others in the wider L-PBF research
                community. Please use the form below to email our corresponding
                researcher and they will reply as soon as they are able.
            </p>
            <ContactForm
                class="contact-form"
                emailEndpointApi={EMAIL_ENDPOINT}
            />
        </div>
        <div class="contact-image-column">
            <img
                class="contact-image"
                src="{CDN}/contact.webp"
                alt="A photograph of our lovely colleague who is eager to hear from you"
            />
        </div>
    </div>
    <NavigationFooter />
</div>
