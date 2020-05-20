import { get_current_component } from 'svelte/internal';
import createEmotion from 'create-emotion';

/**
 * Creates an @emotion processor instance
 *
 * @param {HTMLElement}
 * @returns {object}
 * @see https://github.com/emotion-js/emotion/blob/master/packages/create-emotion/README.md
 */
const createProcessor = container => createEmotion({
  container,
});

/**
 * Returns the singleton @emotion processor that will be
 * linked to the given target <style> tag in the DOM or the the <head> otherwise
 *
 * @param {HTMLElement}
 * @returns {object}
 * @see https://github.com/emotion-js/emotion/blob/master/packages/create-emotion/README.md
 */
export const emotion = (container) => {
  const host = get_current_component();
  // the target style tag is either the passed HTMLElement
  // the the actual Svelte component or the <head> element
  const targetElm = container || host.shadowRoot || document.head;
  const styleParent = document.createElement('div');
  styleParent.style.display = 'none';
  targetElm.insertBefore(styleParent, targetElm.firstChild);
  return createProcessor(styleParent);
};
