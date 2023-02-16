const mongoose = require('mongoose');


const newsletterSchema = mongoose.Schema({
    name:String,
    description:String,
    date:Date,
});

const Newsletter = mongoose.model('newsletter', newsletterSchema);

module.exports = Newsletter;