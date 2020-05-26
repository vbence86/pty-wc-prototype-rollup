<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  /**
   * Email address
   *
   * @type {string}
   */
  let email = '';

  /**
   * Password
   *
   * @type {string}
   */
  let password = '';

  /**
   * Dispatches the newly created player instance
   *
   * @param {object} e
   */
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch('my-custom-event', {
      email,
      password,
    });
  };
</script>

<form on:submit={onSubmit}>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" bind:value={email}>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" bind:value={password}>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>