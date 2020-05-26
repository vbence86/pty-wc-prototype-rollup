import { loadThemeGlobally } from './core/themes';

import Component from './main.svelte';

export default { title: 'Web Component' };

export const withBetonlineTheme = () => {
  // you can manually change the global theme inside
  // the Storybook instance
  loadThemeGlobally('bol.css');
  return {
    Component,
    props: {
      name: 'betonline',
    },
  };
};

export const withWildTheme = () => {
  // you can manually change the global theme inside
  // the Storybook instance
  loadThemeGlobally('wild.css');
  return {
    Component,
    props: {
      name: 'wild',
    },
  };
};
