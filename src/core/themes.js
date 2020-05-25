import { get_current_component } from 'svelte/internal';

/**
 * Lifecycle function that is invoked when the custom element
 * is attached to the DOM.
 *
 * @params {string} propName - property the extract the theme URI from
 */
export const applyTheme = (propName = 'cssThemeURI') => {
  // we manually extend the shadow DOM to import the theme-specific CSS file
  const host = get_current_component();

  const cssThemeURI = host.getAttribute && host.getAttribute(propName);

  if (!cssThemeURI) return;
  // theme styles must land on the top of the shadow root in order to
  // provide a natural way to overwrite them
  const link = document.createElement('link');
  link.setAttribute('href', cssThemeURI);
  link.setAttribute('rel', 'stylesheet');
  host.shadowRoot.insertBefore(link, host.shadowRoot.firstChild);
};

/**
 * Replaces the global theme css for Storybook preview mode
 *
 * @params {string} themeURI
 */
export const loadThemeGlobally = (themeURI) => {
  const link = document.querySelector('#theme-loader');
  if (link) {
    link.parentNode.removeChild(link);
  }

  const newLink = document.createElement('link');
  newLink.setAttribute('href', themeURI);
  newLink.setAttribute('rel', 'stylesheet');
  newLink.setAttribute('id', 'theme-loader');

  document.head.appendChild(newLink);
};
