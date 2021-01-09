// console.log("yes im here");

const apiData =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// empty array - push the json response into this array:
const cities = [];

fetch(apiData)
  .then((res) => res.json())
  .then((data) => {
    cities.push(...data);
  });
// console.log("the cities array:", cities);

// match letter vs city or state in array:
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // city or state matches input:
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

// put in some nice commas in the number result:
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// display:
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  // console.log(matchArray);
  const html = matchArray
    .map((place) => {
      // highlight the search frase in result:
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return `
      <li>
        <span class="name"> ${cityName}, ${stateName} </span>
        <span class="population"> ${numberWithCommas(place.population)} </span>
      </li>
    `;
    })
    .join(""); // to get the array as a string .join

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

/*
RegExp:
https://cheatography.com/davechild/cheat-sheets/regular-expressions/

Pattern Modifiers:

g = Global match

i * = Case-i­nse­nsitive (monday - monDAY)

*/
