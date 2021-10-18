const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    date:{
        type: Date,
        default: Date.now,
        required: true
    }    
});

module.exports = mongoose.model('user',UserSchema);