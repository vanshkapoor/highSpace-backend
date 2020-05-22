var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");
var database = require("./config/keys.js").mongoURI;

const user = require("./routes/users");

var app = express();
app.use(cors());

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database connectivity
mongoose.connect(database, { useNewUrlParser: true }, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to db");
  }
});

app.get("/", (req, res) => {
  res.send("/check");
});

app.use("/api/user", user);

// server starting
const port = process.env.PORT || 5000;
app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running on PORT ${port} `);
  }
});
