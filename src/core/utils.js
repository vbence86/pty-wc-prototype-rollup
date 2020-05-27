import { get_current_component } from 'svelte/internal';

/**
 * Calls the passed function in the context of the host component
 *
 * @params {function} func - reference to the function to be called
 */
export const proxyHost = (func) => {
  const host = get_current_component();
  func.call(host, host);
};
