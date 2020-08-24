const router = require("express").Router();
const mongoose = require("mongoose");
const Location = mongoose.model("Location");

router.get("/get", async (req, res) => {
  const findData = await Location.find({});
  res.send(findData);
});

module.exports = router;
