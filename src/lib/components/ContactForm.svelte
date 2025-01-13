<script>
    import { Send, Loader2 } from "lucide-svelte";
    import "$lib/styles/ContactForm.scss";

    let formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    let errors = {};
    let isSubmitting = false;
    let submitted = false;

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        errors = newErrors;
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        isSubmitting = true;
        // Simulate API call - replace with your actual API endpoint
        await new Promise((resolve) => setTimeout(resolve, 1500));
        isSubmitting = false;
        submitted = true;

        // Reset form
        formData = {
            name: "",
            email: "",
            subject: "",
            message: "",
        };
    };

    const handleInput = (e) => {
        const target = e.target;
        formData[target.name] = target.value;
        // Clear error when user starts typing
        if (errors[target.name]) {
            errors[target.name] = "";
        }
    };
</script>

{#if submitted}
    <div class="form-container {$$props.class}">
        <div class="success-message">
            <h1 class="text-green-600 mb-4">Thank You!</h1>
            <h2>Your message has been sent successfully.</h2>
        </div>
    </div>
{:else}
    <div class="form-container {$$props.class}">
        <h1 class="text-6xl mb-4">Contact Form</h1>

        <form on:submit={handleSubmit} class="space-y-4">
            <div>
                <label for="name"> Name </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Carl Deckard"
                    bind:value={formData.name}
                    on:input={handleInput}
                    class="w-full text-lg px-3 py-2 rounded-md border-[1px] border-solid border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    class:border-red-500={errors.name}
                />
                {#if errors.name}
                    <p class="mt-1 text-sm text-red-500">{errors.name}</p>
                {/if}
            </div>

            <div>
                <label for="email"> Email </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="example@university.edu"
                    bind:value={formData.email}
                    on:input={handleInput}
                    class="w-full text-lg px-3 py-2 rounded-md border-[1px] border-solid border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    class:border-red-500={errors.email}
                />
                {#if errors.email}
                    <p class="mt-1 text-sm text-red-500">{errors.email}</p>
                {/if}
            </div>

            <div>
                <label for="subject"> Subject </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="I want to discuss AM"
                    bind:value={formData.subject}
                    on:input={handleInput}
                    class="w-full text-lg px-3 py-2 rounded-md border-[1px] border-solid border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    class:border-red-500={errors.subject}
                />
                {#if errors.subject}
                    <p class="mt-1 text-sm text-red-500">{errors.subject}</p>
                {/if}
            </div>

            <div>
                <label for="message"> Message </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your question or message"
                    bind:value={formData.message}
                    on:input={handleInput}
                    rows={8}
                    class="w-full text-lg px-3 py-2 rounded-md border-[1px] border-solid border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    class:border-red-500={errors.message}
                ></textarea>
                {#if errors.message}
                    <p class="mt-1 text-sm text-red-500">{errors.message}</p>
                {/if}
            </div>

            <button type="submit" disabled={isSubmitting} class="submit-button">
                {#if isSubmitting}
                    <Loader2 class="animate-spin" size={20} />
                    <span>Sending...</span>
                {:else}
                    <Send size={20} />
                    <span>Send Message</span>
                {/if}
            </button>
        </form>
    </div>
{/if}
