//import adapter from "@sveltejs/adapter-auto";
import adapter from '@sveltejs/adapter-static';
import { svelte } from '@sveltejs/kit';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({})],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
    alias: {
      "@/*": "./src/lib/*",
			'$services': './src/services',
      '$components': './src/components',
    },
    // Add the onwarn function here to filter out a11y warnings
    onwarn: (warning, handler) => {
      if (warning.code && warning.code.startsWith('a11y-')) {
        // Ignore a11y warnings
        return;
      }
      // Handle other warnings normally
      handler(warning);
    }    
  },
};

export default config;
