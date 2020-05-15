import { action } from '@storybook/addon-actions';

import Component from '../main.svelte';

export default { title: 'pty-scoreboard' }

export const withPlayers = () => ({
  Component,
  props: {
    players: [
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
    ],
  }
});

export const withNoPlayers = () => ({
  Component,
});
