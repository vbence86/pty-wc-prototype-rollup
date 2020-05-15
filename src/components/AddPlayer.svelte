<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  /**
   * Default player model
   *
   * @type {object}
   */
  const DEFAULT_PLAYER_SCHEME = {
    name: '',
    score: 0,
  };

  /**
   * Reference to the player instance being created.
   * It's using spread operator to clone the default model
   *
   * @type {object}
   */
  let player = { ...DEFAULT_PLAYER_SCHEME };

  /**
   * Dispatches the newly created player instance
   *
   * @param {object} e
   */
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch('addplayer', player);

    player = { ...DEFAULT_PLAYER_SCHEME };
  };
</script>

<form class="grid-3" on:submit={onSubmit}>
  <input type="text" placeholder="Name" bind:value={player.name} />
  <input type="text" placeholder="Score" bind:value={player.score} />
  <input class="btn" type="submit" value="Add Player" />
</form>
