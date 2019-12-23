const Picture = require("../models/nasaSchema.js");
const data = require("./data.json");
Picture.deleteMany({}).then(() => {
  Picture.create(data).then(programsArray => {
    console.log(programsArray);
  });
});

// const countryData = data.map(item => {
//     const country = {}
//     country.name = item.name
//     country.capital = item.capital
//     country.region = item.region
//     country.population = item.population
//     return country
// })
