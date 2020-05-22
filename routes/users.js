const express = require("express");
const router = express.Router();
const User = require("../models/user");

//desc check
router.get("/", (req, res) => {
  res.send("user");
});

// add user
router.post("/add", (req, res) => {
  let obj = {
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender
  };
  obj.addresses = req.body.addresses;
  //   console.log(obj);
  new User(obj)
    .save()
    .then(data => {
      res.status(200).json({ message: "success" });
    })
    .catch(err => {
      return res.status(400).json({ error: err });
    });
});

// view users
router.get("/all", (req, res) => {
  User.find({}).then(data => {
    return res.status(200).json({ data: data });
  });
});

// view particular user
router.get("/one/:id", (req, res) => {
  User.findById(req.params.id)
    .then(data => {
      return res.status(200).json({ data: data });
    })
    .catch(err => {
      return res.status(400).json({ error: "error" });
    });
});

module.exports = router;
