import { action } from '@storybook/addon-actions';

import AddPlayer from './AddPlayer.svelte';

export default { title: 'components/AddPlayer' }

export const addAction = () => ({
  Component: AddPlayer,
  on: {
    addplayer: e => action('Triggers addplayer event')(e.detail),
  },
});
