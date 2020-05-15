import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

const BUILD_PATH = 'dist/';

export default {
  input: 'src/main.svelte',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: `${BUILD_PATH}pty-scoreboard.js`,
  },
  plugins: [
    // builds web components if the file is the index.svelte
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we're generating a custom element component
      customElement: true,
      include: /index\.svelte$/,
    }),

    // builds normal svelte components if the target file is not index.svelte
    svelte({
      dev: !production,
      customElement: false,
      exclude: /index\.svelte$/,
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
    production && terser()
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
