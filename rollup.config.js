import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const BUILD_PATH = 'dist/';

const preprocess = extend => sveltePreprocess({
  /**
   * Replace string patterns in your markup 
   */
  replace: [
    [
      /process\.env\.(\w+)/g,
      (_, prop) => JSON.stringify(process.env[prop]),
    ],
    [/@if\s*\((.*?)\)$/gim, '{#if $1}'],
    [/@endif$/gim, '{/if}'],
  ],
  // custom properties
  ...extend,
});

export default {
  input: 'src/main.svelte',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: `${BUILD_PATH}bundle.js`,
  },
  plugins: [
    // builds web components if the file is the main.svelte
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we're generating a custom element component
      customElement: true,
      include: /main\.svelte$/,
      preprocess: preprocess(),
    }),

    // builds normal svelte components if the target file is not main.svelte
    svelte({
      dev: !production,
      customElement: false,
      exclude: /main\.svelte$/,
      preprocess: preprocess(),
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),

    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload(BUILD_PATH),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    // production && terser()
  ],
  watch: {
    clearScreen: false
  }
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}
