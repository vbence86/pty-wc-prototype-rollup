import { action } from '@storybook/addon-actions';

import Player from './Player.svelte';

export default { title: 'components/Player' }

const removeAction = action('Triggers removeplayer event');
const removeplayer = e => removeAction(e.detail);
const playerData = {
  name: 'Test Osteron',
  score: 99,
};

export const withControlsClosed = () => ({
  Component: Player,
  props: {
    ...playerData
  },
  on: {
    removeplayer,
  },
});

export const withControlsOpen = () => ({
  Component: Player,
  props: {
    ...playerData,
    showControls: true,
  },
  on: {
    removeplayer,
  },
});
