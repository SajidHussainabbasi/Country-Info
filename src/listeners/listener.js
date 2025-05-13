import { onSearchClick } from '../events/clickEvent.js';

export const addListeners = () => {
  const searchButton = document.getElementById('search-btn');
  const countryInput = document.getElementById('country-input');

  // Click event for button
  searchButton.addEventListener('click', onSearchClick);

  // "Enter" key event on input
  countryInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      onSearchClick();
    }
  });
};