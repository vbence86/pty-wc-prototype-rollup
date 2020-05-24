import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import babel from 'rollup-plugin-babel';
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const BUILD_PATH = 'dist/';

let transpiledNestedCSS;

export default {
  input: 'src/main.svelte',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: `${BUILD_PATH}bundle.js`,
  },
  plugins: [
    // builds normal svelte components if the target file is not main.svelte
    svelte({
      dev: !production,
      // all nested child elementes are built as normal svelte components
      customElement: false,
      exclude: /main\.svelte$/,
      preprocess: sveltePreprocess(),
    }),

    // builds web components if the file is the main.svelte
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we're generating a custom element component
      customElement: true,
      include: /main\.svelte$/,
      preprocess: sveltePreprocess(),
    }),

    // transpile to ES2015+
    babel({
      extensions: [ '.js', '.mjs', '.html', '.svelte' ],
    }),

    // replaces the process.env references from the transpiled code
    injectProcessEnv({ 
      NODE_ENV: process.env.NODE_ENV,
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

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload(BUILD_PATH),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
