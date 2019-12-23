const express = require("express");
const router = express();
const nasaController = require("../controllers/pictures");
router.get("/", nasaController.index);
module.exports = router;
