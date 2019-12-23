const Nasa = require("../models/nasaSchema");
const stateController = {
  index: (req, res) => {
    Nasa.find({}).then(states => {
      res.json(states);
    });
  },
  edit: (req, res) => {
    Nasa.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(states => {
      res.json(states);
    });
  },
  showNasaName: (req, res) => {
    Nasa.findOne({ name: req.params.name }).then(states => {
      res.json(states);
    });
  },
  delete: (req, res) => {
    Nasa.findOneAndDelete({ name: req.params.name }).then(states => {
      res.json(states);
    });
  },
  create: (req, res) => {
    Nasa.create(req.body).then(states => {
      res.json(states);
    });
  }
};
module.exports = stateController;
