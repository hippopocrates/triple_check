const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Reviews = new Schema({
  author: String,
  avatar: String,
  rating: Number,
  rate: Number,
  review: String,
  date: String,
  time: String
});

let Instructor = new Schema({
  name: String,
  title: String,
  rate: Number,
  rating: Number,
  avatar: String,
  reviews: [Reviews]
});

module.exports = mongoose.model("Instructor", Instructor);
