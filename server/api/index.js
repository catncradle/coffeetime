const router = require("express").Router();

// inputting googlemaps places here
router.use("/places", require("./places"));

module.exports = router;
