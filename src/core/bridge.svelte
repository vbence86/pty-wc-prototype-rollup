<svelte:options tag="module-name" />

<script>
  import { onMount } from 'svelte';
  import { applyTheme } from './themes';
  import Main from '../main.svelte';

  /**
   * Bootstrap function that is invoked when the web component
   * is mounted to the DOM.
   */
  const bootstrap = () => {
    applyTheme();
  };

  onMount(bootstrap);
</script>

<style>
  @import 'nestedStyles';
</style>

<Main {...$$props}>
  <slot></slot>
</Main>
