const mongoose = require("mongoose");

const userSchema = {
  name: String,
  email: String,
  message: String,
};

const user = mongoose.model("User", userSchema);

module.exports =  user ;
