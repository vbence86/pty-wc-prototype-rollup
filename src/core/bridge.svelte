<svelte:options tag="module-name" />

<script>
  import { bubble } from 'svelte/internal';
  import { onMount } from 'svelte';
  import { proxyHost } from './utils';
  import { applyTheme } from './themes';
  import Main from '../main.svelte';

  let main;

  /**
   * Bootstrap function that is invoked when the web component
   * is mounted to the DOM.
   */
  const bootstrap = () => {
    // we apply the global styles by moving them over into
    // the attached ShadowDOM of this web component
    applyTheme();

    // proxies custom events coming from the DOM custom element
    proxyHost((host) => {
      host.addEventListener('pty-custom-event', (e) => bubble(main, e));
    });
  };

  // executes the bootstrapping on "mount" lifecycle event
  onMount(bootstrap);
</script>

<style>
  @import 'nestedStyles';
</style>

<Main {...$$props} bind:this={main}>
  <slot></slot>
</Main>
