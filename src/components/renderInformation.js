export const renderCountryInfo = (country) => {
  const container = document.getElementById('country-info');
  container.innerHTML = `
    <h2>${country.name.common}</h2>
    <img src="${country.flags.png}" alt="Flag of ${country.name.common}" />
    <p><strong>Capital:</strong> ${country.capital?.[0]}</p>
    <p><strong>Region:</strong> ${country.region}</p>
    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    <p><strong>Languages:</strong> ${Object.values(country.languages).join(', ')}</p>
    <p><strong>Currencies:</strong> ${Object.values(country.currencies).map(c => c.name).join(', ')}</p>
  `;
};