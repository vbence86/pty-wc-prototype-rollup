import { action } from '@storybook/addon-actions';

import NestedElement from './NestedElement.svelte';

export default { title: 'components/NestedElement' };

export const submitAction = () => ({
  Component: NestedElement,
  on: {
    'my-custom-event': (e) => action('Triggers my-custom-event event')(e.detail),
  },
});
