import { render, fireEvent, createEvent } from '@testing-library/svelte';
import Player from './Player.svelte';

describe('Player', () => {

  test('contains the right tags', async () => {
    const { container } = render(Player, { name: 'Test', score: 100 });
    const h1 = container.querySelector('h1');
    const h3 = container.querySelector('h3');

    expect(h1).not.toBe(undefined);
    expect(h3).not.toBe(undefined);
  });

  test('shows player name and score', async () => {
    const name = 'Test Osteron';
    const score = 99;
    const { getByText } = render(Player, { name, score });

    expect(getByText(name));
    expect(getByText(`Score: ${score}`));
  });

  test('can trigger remove event', async () => {
    const spy = jest.fn();
    const { container, component } = render(Player, { name: 'Test', score: 1 });
    const removeBtn = container.querySelector('button.btn-danger');

    component.$on('removeplayer', spy);
    await fireEvent.click(removeBtn);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});