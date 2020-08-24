const GeoJSON = require("mongoose-geojson-schema");
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const location_schema = new mongoose.Schema({
  geometry: GeoJSON,
  properties: {
    name: String,
    description: String,
  },
  type: String,
});
location_schema.plugin(uniqueValidator);
module.exports = mongoose.model("Location", location_schema);
