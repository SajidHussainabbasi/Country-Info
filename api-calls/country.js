import { API_BASE_URL } from '../src/config.js';

export const fetchCountryInfo = async (countryName) => {
  try {
    const response = await fetch(`${API_BASE_URL}${countryName}`);
    if (!response.ok) throw new Error(`Country not found: ${countryName}`);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};