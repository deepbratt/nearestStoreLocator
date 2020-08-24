const router = require("express").Router();
const mongoose = require("mongoose");
const Location = mongoose.model("Location");

router.get("/get", async (req, res) => {
  const findData = await Location.find({
    geometry: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [req.body.lat, req.body.long],
        },
        $maxDistance: 100,
        $minDistance: 10,
      },
    },
  });
  res.send(findData);
});

module.exports = router;
