import { fetchCountryInfo } from '../../api-calls/country.js';
import { renderCountryInfo } from '../components/renderInformation.js';

export const handleCountrySearch = async (countryName) => {
  try {
    const country = await fetchCountryInfo(countryName);
    renderCountryInfo(country);
  } catch (error) {
    document.getElementById('country-info').innerHTML = `<p>${error.message}</p>`;
  }
};