import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess({
        postcss: true,
    }),
    kit: {
        paths: {
            assets: 'https://dxx34o0ozp8j.cloudfront.net'
        },
        adapter: adapter({
            out: 'build',
            precompress: true, // Pre-compresses files
            polyfill: true
        }),
        prerender: {
            handleMissingId: 'warn'
        },
        csp: {
            mode: 'auto',
            directives: {
                'script-src': ['self']
            }
        },
        version: {
            name: Date.now().toString()
        }
    }
};

export default config;
