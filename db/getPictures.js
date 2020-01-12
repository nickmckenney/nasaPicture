const fetch = require("node-fetch");
const fs = require("fs");
const url =
  "https://api.nasa.gov/planetary/apod?api_key=GJ6Jvh1c8erMgH5edhmmQ538fNHcSbldUeAc68AK";

fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res);
  });
