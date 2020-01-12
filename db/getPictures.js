// const fetch = require("node-fetch");
// const fs = require("fs");
// const url =
//   "https://api.nasa.gov/planetary/apod?api_key=GJ6Jvh1c8erMgH5edhmmQ538fNHcSbldUeAc68AK";

// fetch(url)
//   .then(res => res.json())
//   .then(res => {
//     let countries = JSON.stringify(res);
//     fs.writeFile("./db/data.json", countries, err => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("success");
//       }
//     });
//   });
const fetch = require("node-fetch");
const url =
  "https://api.nasa.gov/planetary/apod?api_key=GJ6Jvh1c8erMgH5edhmmQ538fNHcSbldUeAc68AK";

fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res);
  });
