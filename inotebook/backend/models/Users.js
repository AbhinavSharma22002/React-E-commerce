const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address:{
    type: String
  },
  number:{
    type: String
  },
  pin:{
    type: String
  },
  Card_number:{
    type: String
  },
  Name_card:{
    type: String
  },
  Expire:{
    type: String
  },
  email: {
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});
const User = mongoose.model("users", UserSchema);
module.exports = User;
