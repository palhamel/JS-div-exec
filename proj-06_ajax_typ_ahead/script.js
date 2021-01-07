const apiData =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  console.log("yes im here");

// empty array - push the json response into this array:
const cities = [];

fetch(apiData)
  .then(res => res.json())
  .then(data => {
    cities.push(...data)
  })

console.log('the cities array:', cities)

function findMatches()