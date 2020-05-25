import { loadThemeGlobally } from './core/themes';

import Component from './main.svelte';

export default { title: 'pty-scoreboard' };

const mockPlayers = [
  {
    name: 'John Doe',
    score: 100,
  },
  {
    name: 'Charles Smith',
    score: 45,
  },
  {
    name: 'Sam Teller',
    score: 151,
  },
];

export const BetonlineThemeWithPlayers = () => {
  loadThemeGlobally('bol.css');
  return {
    Component,
    props: { players: mockPlayers },
  };
};

export const BetonlineThemeWithNoPlayers = () => {
  loadThemeGlobally('bol.css');
  return {
    Component,
  };
};

export const WildThemeWithPlayers = () => {
  loadThemeGlobally('wild.css');
  return {
    Component,
    props: { players: mockPlayers },
  };
};

export const WildThemeWithNoPlayers = () => {
  loadThemeGlobally('wild.css');
  return {
    Component,
  };
};
