const svelte = require('rollup-plugin-svelte');
const sveltePreprocess = require('svelte-preprocess');
const babel = require('rollup-plugin-babel');
const injectProcessEnv = require('rollup-plugin-inject-process-env');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const livereload = require('rollup-plugin-livereload');
const terser = require('rollup-plugin-terser').terser;

const fs = require('fs');
const path = require('path');
const rollup = require('rollup');
const appPath = path.resolve(__dirname, '../');

const production = !process.env.ROLLUP_WATCH;
const buildPath = `${appPath}/dist`;
const entryPoint = `${appPath}/src/core/bridge.svelte`;
const moduleName = require('../package.json').name;

const outputOptions = {
  sourcemap: true,
  format: 'iife',
  name: 'App',
  file: `${buildPath}/${moduleName}.js`,
};

async function generateNestedCSS() {
  let cssChunk;
  // create a bundle  
  const bundle = await rollup.rollup({
    input: entryPoint,
    plugins: [
      svelte({
        // all nested child elementes are built as normal svelte components
        customElement: false,
        exclude: /bridge\.svelte$/,
        preprocess: sveltePreprocess(),

        // Extract CSS into a variable
        css: css => (cssChunk = css.code.replace(/\n/g, '')),
      }),
      svelte({
        customElement: true,
        include: /bridge\.svelte$/,
      }),
      // transpile to ES2015+
      babel({
        extensions: [ '.js', '.mjs', '.html', '.svelte' ],
      }),      
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
    ],
  });

  // generate output specific code in-memory
  // you can call this function multiple times on the same bundle object
  await bundle.generate(outputOptions);
  return cssChunk;
}

async function buildWebComponent(nestedCSS) {
  // create a bundle
  const bundle = await rollup.rollup({
    input: entryPoint,
    plugins: [
      replace({'module-name': moduleName }),
      svelte({
        dev: false,
        // all nested child elementes are built as normal svelte components
        customElement: false,
        exclude: /bridge\.svelte$/,
        preprocess: sveltePreprocess(),
      }),
      svelte({
        // enable run-time checks when not in production
        dev: !production,
        // we're generating a -- Web Component --
        customElement: true,
        include: /bridge\.svelte$/,
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
        dedupe: ['svelte'],
      }),

      commonjs(),

      // Watch the `public` directory and refresh the
      // browser on changes when not in production
      !production && livereload(buildPath),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser()
    ],
  });

  // generate output specific code in-memory
  // you can call this function multiple times on the same bundle object
  const { output } = await bundle.generate(outputOptions);
  const { code, map } = output[0];

  const updatedCode = code.replace(`@import 'nestedStyles'`, nestedCSS);

  fs.writeFile(outputOptions.file, updatedCode, (err) => {
    if (err) return console.log(err);
  });

  fs.writeFile(outputOptions.file.replace('.js', '.js.map'), map, (err) => {
    if (err) return console.log(err);
  });
}

async function build() {
  try {
    const nestedCSS = await generateNestedCSS();
    await buildWebComponent(nestedCSS);
  } catch (ex) {
    console.log(ex);
  }
}

build();