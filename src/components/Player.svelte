<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  /**
   * Player name. Export keyword means it comes through the property chain
   *
   * @type {string}
   * @export
   */
  export let name;

  /**
   * Player's score. Export keyword means it comes through the property chain
   *
   * @type {number}
   * @export
   */
  export let score;

  /**
   * Flag to determine whether the controls should be rendered
   *
   * @type {bool}
   */
  export let showControls = false;

  /**
   * Adds a single point to the score
   */
  const addPoint = () => (score += 1);

  /**
   * Deducts a single point from the score
   */
  const removePoint = () => (score -= 1);

  /**
   * Toggles the control section
   */
  const toggleControls = () => (showControls = !showControls);

  /**
   * Dispatches an event against this component
   */
  const onRemove = () => dispatch('removeplayer', name);

</script>

<style>
  h1 {
    color: blue;
  }
</style>

<h1>
  {name}
  <button class="btn btn-sm" on:click={toggleControls}>
    {#if showControls}-{:else}+{/if}
  </button>
   <button class="btn btn-danger btn-sm" on:click={onRemove}>x</button>
</h1>
<h3>Score: {score}</h3>
{#if showControls}
  <button class="btn" on:click={addPoint}>+</button>
  <button class="btn btn-dark" on:click={removePoint}>-</button>
  <input type="text" bind:value={score} />
{/if}
