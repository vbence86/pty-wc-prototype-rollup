---

# PTY Web Components Template with Rollup

This is a web component template using [Svelte](https://svelte.dev), [Storybook](https://rollupjs.org) and [Rollup]().

## Install 

### Generator
You can use [pty-create-webcomponent](https://www.npmjs.com/package/pty-create-webcomponent) scaffolding CLI tool to create a brand new web component with [Storybook](http://storybook.com), [Jest](https://jestjs.io/) boilerplates and built-in theming. 

```bash
npx pty-create-webcomponent
```

### Degit
You can manually create a new project based on this template using [degit](https://github.com/Rich-Harris/degit), but make sure you follow the module name conventions for custom elements.

```bash
npx degit vbence86/pty-wc-template-rollup my-webcomponent
cd my-webcomponent
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

## Get started

Install the dependencies...

```bash
npm install
```

...then start [Storybook](https://rollupjs.org):

```bash
npm start
```

You should see your web component running in a [Storybook](https://rollupjs.org) test environment. It uses live-reload so all changes will be automatically reflected if any of the files in `src` is updated.

## Build

To create an optimised sharable version of the component:

```bash
npm run build
```

This will generate an optimised bundle into the **`dist`** folder that can be loaded in the browser to register the web component.


## Test

To test the code against our styleguides...

```bash
npm run lint
```

...then run the unit tests

```bash
npm test
```

## Usage of the generated web component

```html
<!-- From CDN -->
<script async type="module" src="your-cdn/my-component.js"></script>

<!-- From local installation -->
<script async type="module" src="/node_modules/my-component/dist/my-component.js"></script>

...

<body>
  <my-component />
</body>
```

```js
// as a common js module
import MyComponent from 'my-component';
````

## Themes

In order to apply global styles on the web components you must place a **`<meta>`** tag onto your HTML document containing a URL to your global stylesheet. The web component will pick this up and apply all these global styles into the ShadowDOM during the mounting phase.

```html
<head>
  <meta property="pty:themeURL" content="https://cdn.com/betonline.css" />
</head>

...

<body>
  <my-component />

  ...
  <script async type="module" src="https://cdn.com/my-component.js"></script>
</body>
```

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, this theme library is maintained under  [the Semantic Versioning guidelines](https://semver.org/). 

See  [the Releases section of our GitHub project](https://github.com/vbence86/pty-themes/releases)  for changelogs for each release version. 


## References
### Svelte Crush Course
https://www.youtube.com/watch?v=uK2RnIzrQ0M

### Event Dispatching with Svelte
https://www.youtube.com/watch?v=9Bk7XFRMzgI

### Custom Elements with Svelte
https://www.youtube.com/watch?v=p3u5rdJH9BM

### Storybook
https://www.youtube.com/watch?v=p-LFh5Y89eM
