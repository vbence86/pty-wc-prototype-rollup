<script>
  // @TODO Import your components here
  // ...
  import NestedElement from './components/NestedElement';

  /**
   * Represents the name property of the web component
   *
   * @type {string}
   */
  export let name = 'World';

  // @TODO add any public properties here through which the web component can communicate with the outside world
</script>

<style>
  .hello-world-container {
    height: 5rem;
    margin: auto;
    width: 25rem;
  }

  p {
    color: #00F;
    font-size: 1.5rem;
    text-shadow: 0 0 0.85rem rgba(0, 0, 0, .5);
  }

  /* @TODO add your SASS style definitions here */  
</style>

<!-- @TODO put the markup of the web component here -->
<div class="hello-world-container">

  <p>Hello {name}!</p>

  <!-- @TODO you can break the application logic into child components-->
  <NestedElement />

</div>
