const express = require("express");
const router = express.Router();
const  user =require ("../models/users.models");

router.route("/data").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const newUser = new user({
    name,
    email,
    message,
  });
  newUser.save();
});

module.exports = router ;
