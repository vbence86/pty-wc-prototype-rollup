<script>
  import NavBar from './components/NavBar/NavBar.svelte';
  import Player from './components/Player/Player.svelte';
  import AddPlayer from './components/AddPlayer';

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
    players = players.filter((player) => player.name !== evt.detail);
  };

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
