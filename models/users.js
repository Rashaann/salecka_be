const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    address: String,
    city: String,
    zipCode: String,
    password: String,
    token: String,
    favorite: [{type: mongoose.Schema.Types.ObjectId, ref:'articles'}],
    cart: [{type: mongoose.Schema.Types.ObjectId, ref:'articles'}],
});

const User = mongoose.model('users', usersSchema);

module.exports = User;