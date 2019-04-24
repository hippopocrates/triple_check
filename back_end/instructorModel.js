const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Instructor = new Schema({
  name: { type: String },
  title: { type: String },
  rate: { type: Number },
  rating: { type: Number },
  review: { type: String },
  avatar: { type: String }
});

module.exports = mongoose.model("Instructor", Instructor);
