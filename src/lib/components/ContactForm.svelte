<script>
    import { Send, Loader2 } from "lucide-svelte";

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
        <div class="text-center success-message">
            <h2 class="text-2xl font-semibold text-green-600 mb-4">
                Thank You!
            </h2>
            <p class="text-gray-600 mb-4">
                Your message has been sent successfully.
            </p>
            <button
                on:click={() => (submitted = false)}
                class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
                Send Another Message
            </button>
        </div>
    </div>
{:else}
    <div class="form-container {$$props.class}">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Contact Form</h2>

        <form on:submit={handleSubmit} class="space-y-4">
            <div>
                <label
                    for="name"
                    class="block text-sm font-medium text-gray-700 mb-1"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    bind:value={formData.name}
                    on:input={handleInput}
                    class="w-full px-3 py-2 border rounded-md {errors.name
                        ? 'error'
                        : 'border-gray-300'}"
                />
                {#if errors.name}
                    <p class="mt-1 text-sm text-red-500">{errors.name}</p>
                {/if}
            </div>

            <div>
                <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 mb-1"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    bind:value={formData.email}
                    on:input={handleInput}
                    class="w-full px-3 py-2 border rounded-md {errors.email
                        ? 'error'
                        : 'border-gray-300'}"
                />
                {#if errors.email}
                    <p class="mt-1 text-sm text-red-500">{errors.email}</p>
                {/if}
            </div>

            <div>
                <label
                    for="subject"
                    class="block text-sm font-medium text-gray-700 mb-1"
                >
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    bind:value={formData.subject}
                    on:input={handleInput}
                    class="w-full px-3 py-2 border rounded-md {errors.subject
                        ? 'error'
                        : 'border-gray-300'}"
                />
                {#if errors.subject}
                    <p class="mt-1 text-sm text-red-500">{errors.subject}</p>
                {/if}
            </div>

            <div>
                <label
                    for="message"
                    class="block text-sm font-medium text-gray-700 mb-1"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    bind:value={formData.message}
                    on:input={handleInput}
                    rows={4}
                    class="w-full px-3 py-2 border rounded-md {errors.message
                        ? 'error'
                        : 'border-gray-300'}"
                />
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
