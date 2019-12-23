const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const nasaSchema = new Schema({
  date: Date,
  explanation: String,
  title: String,
  url: String
});

module.exports = mongoose.model("nasaSchema", nasaSchema);
