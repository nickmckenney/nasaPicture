const Picture = require("../models/nasaSchema.js");
const data = require("./data.json");
Picture.deleteMany({}).then(() => {
  Picture.create(data).then(programsArray => {
    console.log(programsArray);
  });
});
