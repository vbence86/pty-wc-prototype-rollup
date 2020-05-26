import { render, fireEvent, createEvent } from '@testing-library/svelte';
import NestedElement from './NestedElement.svelte';

describe('NestedElement', () => {

  test('triggers my-custom-event', async () => {
    const spy = jest.fn();
    const { container, component } = render(NestedElement);
    const submitBtn = container.querySelector('button[type="submit"]');

    component.$on('my-custom-event', spy);
    await fireEvent.click(submitBtn);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('submitting new data with valid input', async () => {
    let data;
    const spy = jest.fn(e => (data = e.detail));
    const { container, component } = render(NestedElement);
    const emailInput = container.querySelector('input[type="email"]');
    const pwdInput = container.querySelector('input[type="password"]');
    const submitBtn = container.querySelector('button[type="submit"]');

    const email = 'test';
    const password = 'test123';

    component.$on('my-custom-event', spy);
    await fireEvent.input(emailInput, { target: { value: email } })
    await fireEvent.input(pwdInput, { target: { value: password } })
    await fireEvent.click(submitBtn);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(data).toEqual({ email, password });
  });

  test('contains the right classes', async () => {
    const { container } = render(NestedElement);
    const button = container.querySelector('button');
    expect(button.getAttribute('class')).toBe('btn btn-primary');
  });
});