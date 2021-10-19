const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const JWT_secret = 'abhinavisagood$body';

//Create a user using : Post "/auth/createUser". Doesn't require Auth
router.post(
  "/",
  [
    body("name", "Enter valid Name").isLength({ min: 5 }),
    body("email", "Enter valid Email").isEmail(),
    body("password", "Enter valid Password").isLength({ min: 5 }),
  ],
  (req, res) => {
    //If there are errors, return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check whether email exist already
    let user = User.findOne(
      { email: { $gte: req.body.email } },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          if (docs != null) {
            return res
              .status(400)
              .json({
                error: "Sorry a user with the same email exist already",
              });
          } else {
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(req.body.password, salt);
            user = User.create({
              name: req.body.name,
              password: hash,
              email: req.body.email,
            });

            const data = {
              user:{
                id: user.id
              }
            }
            const authData = jwt.sign(data,JWT_secret);
            return res.json({authData});

          }
        }
      }
    );
  }
);

module.exports = router;
