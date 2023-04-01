import { sveltekit } from '@sveltejs/kit/vite';
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';
import { exec } from 'child_process'
import { promisify } from 'util'

// Get current tag/commit and last commit date from git
const pexec = promisify(exec)
let [lastmod] = (
  await Promise.allSettled([
    pexec('git log -1 --format=%cd --date=format:"%Y-%m-%d %H:%M"'),
  ])
).map(v => JSON.stringify(v.value?.stdout.trim()))

/** @type {import('vite').UserConfig} */
const config = {
        plugins: [
                sveltekit(),
                mdPlugin({ mode: [Mode.HTML, Mode.TOC] })
        ],

        server: {
                fs: {
                        allow: [
                                // your custom rules
                                './content',
                        ],
                },
        },

        define: {
                __LASTMOD__: lastmod,
        }
};

export default config;
