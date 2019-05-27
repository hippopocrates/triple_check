const express = require("express");
const app = express();
const instructorRoutes = express.Router();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

let Instructor = require("./models/instructorModel");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb://127.0.0.1:27017/instructors",
  { useNewUrlParser: true }
);

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

instructorRoutes.route("/").get(function(req, res) {
  Instructor.find(function(err, instructors) {
    if (err) {
      console.log(err);
    } else {
      res.json(instructors);
    }
  });
});

instructorRoutes.route("/add").post(function(req, res) {
  let instructor = new Instructor(req.body);
  console.log(req.body);
  instructor
    .save()
    .then(instructor => {
      res.status(200).json({ instructor: "instructor added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new instructor failed");
    });
});

instructorRoutes.route("/:id").patch(function(req, res) {
  Instructor.findById(req.params.id, function(err, instructor) {
    if (!instructor) {
      res.status(400).send("data not found");
    } else {
      instructor.reviews = [...instructor.reviews, req.body.newReview];
      let totalRating =
        Number(instructor.rating) + Number(req.body.newReview.rating);
      instructor.rating = totalRating / instructor.reviews.length;
      instructor
        .save()
        .then(instructor => {
          res.json("instructor updated");
        })
        .catch(err => {
          res.status(400).send("update not possible");
        });
    }
  });
});

instructorRoutes.route("/:id").get(function(req, res) {
  Instructor.findById(req.params.id, function(err, instructor) {
    console.log(instructor);
    res.json(instructor);
  });
});

instructorRoutes.route("/:id").post(function(req, res) {
  Instructor.findById(req.params.id, function(err, review) {});
});

app.use("/instructors", instructorRoutes);

const PORT = 4000;

app.listen(PORT, function() {
  console.log("Server is running on port: " + PORT);
});
