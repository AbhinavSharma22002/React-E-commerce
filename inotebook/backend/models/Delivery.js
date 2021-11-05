const mongoose = require('mongoose');
const { Schema } = mongoose;
const OrderSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        unique: true
    },
    payment:{
        type: Number,
        required: true
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
    order:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'notes'
    }], 
});

const Delivery = mongoose.model("Orders", OrderSchema);
module.exports = Delivery;