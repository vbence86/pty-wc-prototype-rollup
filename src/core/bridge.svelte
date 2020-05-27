<svelte:options tag="module-name" />

<script>
  import { onMount } from 'svelte';
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
