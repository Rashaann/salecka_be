const mongoose = require('mongoose');


const clientListSchema = mongoose.Schema({
    email:String,
});

const ClientList = mongoose.model('clientList', clientListSchema);

module.exports = ClientList;