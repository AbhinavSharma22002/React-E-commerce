const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");

//Create a user using : Post "/auth/createUser". Doesn't require Auth
router.post(
  "/",
  [
    body("name", "Enter valid Name").isLength({ min: 5 }),
    body("email", "Enter valid Email").isEmail(),
    body("password", "Enter valid Password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //If there are errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check whether email exist already
    let user =  User.findOne({email: req.body.email});
    console.log(user);
    if(user){
        return res.status(400).json({error:'Sorry a user with the same email exist already'})
    }
    user =  User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
    //   .then((user) => res.json(user))
    //   .catch((err) => {
    //     console.log(err);
    //     res.json({ message: "Please enter a unique value of email" });
    //   });
  }
);

module.exports = router;
