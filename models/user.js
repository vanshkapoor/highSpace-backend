const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userschema = new schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  addresses: [String]
});

const User = mongoose.model("users", userschema);
module.exports = User;
