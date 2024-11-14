const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector('.filter-by-region')
const searchInput = document.querySelector('.search-container input')
const themeSwitcher = document.querySelector('.theme-switcher')


let allCountriesData

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data)
    allCountriesData = data
  });
  

filterByRegion.addEventListener('change', (e) => {
  // console.log(filterByRegion.value);
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
  .then((res) => res.json())
  .then(renderCountries);
})

function renderCountries(data) {
  countriesContainer.innerHTML = ''
    data.forEach((country) => {
      // console.log(country);
      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `/country.html?name=${country.name.common}`

      countryCard.innerHTML = `
      <img src="${country.flags.svg}" alt="${country.name.common} flag" />
      <div class="card-text">
      <h3 class="card-title">${country.name.common}</h3>
      <p><b>Population: </b>${country.population.toLocaleString('en-In')}</p>
      <p><b>Region: </b>${country.region}</p>
      <p><b>Capital: </b>${country.capital?.[0]}</p>
      </div>
      `
      countriesContainer.append(countryCard);
    });
}

searchInput.addEventListener('input', (e) => {
  // console.log(e.target.value);
 const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  renderCountries(filteredCountries)
})

themeSwitcher.addEventListener('click', () => {
 document.body.classList.toggle('dark')
})

// country.flags.svg --- is used for country flags
// country.name.common --- is used for country name
// country.population --- is used for country population
// country.region --- is used for country region
// country.capital?.[0] --- is used for country capital only for first
// .toLocalString('en-In')---- is used for convert string into number at indian format
// new URLSearchParams(window.location.search).get('name')
// then expect callback function then automatically pass data
// call back function for then(renderCountries) = .then((data) => {
//   renderCountries(data)
// })

