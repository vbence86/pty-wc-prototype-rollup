<script>

  import { get_current_component } from 'svelte/internal';

  // @TODO Import your components here
  // ...
  import NestedElement from './components/NestedElement';

  /**
   * Represents the "name" attribute of the web component
   *
   * @public
   * @type {string}
   */
  export let name = 'World';

  /**
   * Demo event callback 
   *
   * @param {object} e - event object
   */
  const eventCallback = (e) => console.log(e);

  // example of setting up listeners against custom events
  // propagated to the ShadowDOM from the outside world
  const host = get_current_component();
  host.$on('pty-custom-event', eventCallback);

  // @TODO add any public properties here through which the web component can communicate with the outside world
  // ...
</script>

<style>

  /* @TODO Remove this preset style */
  .hello-world-container {
    height: 5rem;
    margin: auto;
    width: 25rem;
  }

  /* @TODO Remove this preset style */
  p {
    color: #00F;
    font-size: 1.5rem;
    text-shadow: 0 0 0.85rem rgba(0, 0, 0, .5);
  }

  /* @TODO Add your style definitions here */  

</style>

<!-- @TODO put the markup of the web component here -->
<div class="hello-world-container">

  <p>Hello {name}!</p>

  <!-- @TODO you can split the application logic into child components to follow the seperation of concerns methodology -->
  <NestedElement />

</div>
