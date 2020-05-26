import { loadThemeGlobally } from './core/themes';

import Component from './main.svelte';

export default { title: 'Web Component' };

export const withBetonlineTheme = () => {
  loadThemeGlobally('bol.css');
  return {
    Component,
    props: {
      name: 'betonline',
    },
  };
};

export const withWildTheme = () => {
  loadThemeGlobally('wild.css');
  return {
    Component,
    props: {
      name: 'wild',
    },
  };
};
