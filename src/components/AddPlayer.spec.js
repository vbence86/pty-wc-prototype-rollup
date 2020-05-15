import { render, fireEvent, createEvent } from '@testing-library/svelte';
import AddPlayer from './AddPlayer.svelte';

describe('AddPlayer', () => {

  test('can submit new players', async () => {
    const spy = jest.fn();
    const { container, component } = render(AddPlayer);
    const submitBtn = container.querySelector('input[type="submit"]');

    component.$on('addplayer', spy);
    await fireEvent.click(submitBtn);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('submitting new players with valid input', async () => {
    let newPlayer;
    const spy = jest.fn(e => (newPlayer = e.detail));
    const { container, component } = render(AddPlayer);
    const nameInput = container.querySelector('input[placeholder="Name"]');
    const scoreInput = container.querySelector('input[placeholder="Score"]');
    const submitBtn = container.querySelector('input[type="submit"]');

    const name = 'Test Osteron';
    const score = '99';

    component.$on('addplayer', spy);
    await fireEvent.input(nameInput, { target: { value: name } })
    await fireEvent.input(scoreInput, { target: { value: score } })
    await fireEvent.click(submitBtn);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(newPlayer).toEqual({ name, score });
  });

  test('contains the right classes', async () => {
    const { container } = render(AddPlayer);
    const form = container.querySelector('form');

    expect(form).not.toBe(undefined);
    expect(form.getAttribute('class')).toBe('grid-3');
  });
});