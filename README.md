---

# PTY Web Components Template with Rollup

This is a web component template using [Svelte](https://svelte.dev) [Storybook](https://rollupjs.org) and [Rollup](). 

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit vbence86/pty-wc-template-rollup my-webcomponent
cd my-webcomponent
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd my-webcomponent
npm install
```

...then start [Storybook](https://rollupjs.org):

```bash
npm run storybook
```

You should see your web component running in a [Storybook](https://rollupjs.org) test environment. It uses live-reload so all changes will be automatically reflected if any of the files in `src` is updated.

## Building in production mode

To create an optimised version of the component:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Usage
```html
<!-- From CDN -->
<script async type="module" src="https://unpkg.com/pty-wc-template-rollup@latest/dist/bundle.js"></script>

<!-- From local installation -->
<script async type="module" src="/node_modules/pty-wc-template-rollup/dist/bundle.js"></script>

...

<body>
  <pty-scoreboard />
</body>
```

```js
// as a common js module
import MyComponent from 'pty-wc-template-rollup';
````

## References
### Svelte Crush Course
https://www.youtube.com/watch?v=uK2RnIzrQ0M

### Event Dispatching with Svelte
https://www.youtube.com/watch?v=9Bk7XFRMzgI

### Custom Elements with Svelte
https://www.youtube.com/watch?v=p3u5rdJH9BM

### mjs & modules
https://medium.com/passpill-project/files-with-mjs-extension-for-javascript-modules-ced195d7c84a

### Storybook
https://www.youtube.com/watch?v=p-LFh5Y89eM
