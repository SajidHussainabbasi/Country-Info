import { handleCountrySearch } from '../handlers/informationHandler.js';

export const onSearchClick = async () => {
  const input = document.getElementById('country-input').value.trim();
  if (!input) {
    alert('Please enter a country name');
    return;
  }
  await handleCountrySearch(input);
};