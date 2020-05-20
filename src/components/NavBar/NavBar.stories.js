import NavBar from './NavBar.svelte';

export default { title: 'components/NavBar' }

export const withText = () => ({
  Component: NavBar,
  props: {
    text: 'some text',
  },
});

export const withDefaultText = () => ({
  Component: NavBar,
});
