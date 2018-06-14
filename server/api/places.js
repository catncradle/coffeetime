const key = require("../../secrets");
const router = require("express").Router();

const RapidAPI = require("rapidapi-connect");
const rapid = new RapidAPI(
  "default-application_5b2193e6e4b09cbc057a08fe",
  "e9d73727-1f2b-40be-b108-08f4c973c18d"
);

router.post("/", async (req, res, next) => {
  let places;

  await rapid
    .call("GooglePlaces", "getNearbyPlacesByType", {
      ...req.body,
      apiKey: key
    })
    .on("success", payload => {
      places = payload;
      res.send(places.results.slice(0, 40));
    })
    .on("error", payload => {
      next(payload);
    });
});

module.exports = router;
