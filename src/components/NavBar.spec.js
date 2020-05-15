import { render } from '@testing-library/svelte';
import NavBar from './NavBar.svelte';

describe('NavBar', () => {

  test('contains the right text', async () => {
    const text = 'Test';
    const getByTextDefault = render(NavBar).getByText;
    const getByTextProp = render(NavBar, { text }).getByText;

    expect(getByTextDefault('Default Text'));
    expect(getByTextProp(text));
  });

  test('contains the right classes', async () => {
    const { container } = render(NavBar);
    const div = container.querySelector('div.navbar');

    expect(div).not.toBe(undefined);
    expect(div.getAttribute('class')).toBe('navbar bg-primary');
  });
});