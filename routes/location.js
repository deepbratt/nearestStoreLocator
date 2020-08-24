const router = require("express").Router();
const mongoose = require("mongoose");
const Location = mongoose.model("Location");

router.get("/get", async (req, res) => {
  const findData = await Location.find({
    $near: {
      $geometry: {
        type: "Point",
        coordinates: [req.body.long, req.body.lat],
      },
      $maxDistance: 10000000000,
    },
  }).then((respn) => res.send(respn));
});

router.post("/add", async (req, res) => {
  const newLocation = new Location();
  newLocation.geometry.coordinates = [req.body.long, req.body.lat];
  newLocation.properties.name = req.body.name;
  newLocation.properties.description = req.body.description;
  newLocation.properties.type = req.body.type;
  newLocation.save().then((respn) => res.send(respn));
});

module.exports = router;
