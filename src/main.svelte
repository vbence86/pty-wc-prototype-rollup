<svelte:options tag="pty-scoreboard" />

<script>
  import { get_current_component } from 'svelte/internal';
  import { onMount } from 'svelte';
  import NavBar from './components/NavBar.svelte';
  import Player from './components/Player.svelte';
  import AddPlayer from './components/AddPlayer.svelte';

  /**
   * Array of player instances
   *
   * @type {array}
   */
  export let players = [];

  /**
   * Adds a new player to the player collection.
   *
   * @param {object} evt - { detail: object }
   */
  const addPlayer = (evt) => {
    const player = evt.detail;
    players = [
      ...players,
      player,
    ];
  };

  /**
   * Deletes the given player to the player collection.
   *
   * @param {object} evt - { detail: string }
   */
  const removePlayer = (evt) => {
    players = players.filter(player => player.name !== evt.detail);
  };

  /**
   * Lifecycle function that is invoked when the custom element
   * is attached to the DOM.
   */
  onMount((e) => {
    // we manually extend the shadow DOM to import the theme-specific CSS file
    const host = get_current_component();
    const cssThemeURI = host.getAttribute('cssThemeURI');

    if (!cssThemeURI) return;
    // theme styles must land on the top of the shadow root in order to
    // provide a natural way to overwrite them
    const style = document.createElement('style');
    style.textContent = `@import "${cssThemeURI}";`;
    host.shadowRoot.insertBefore(style, host.shadowRoot.firstChild);
  });

</script>

<NavBar text="This is my svelte custom element"/>
<div class="container">
  <AddPlayer on:addplayer={addPlayer} />
  {#if players.length === 0}
    <p>No players</p>
  {:else}
    {#each players as player}
      <Player name={player.name} score={player.score} on:removeplayer={removePlayer} />
    {/each}
  {/if}
</div>
