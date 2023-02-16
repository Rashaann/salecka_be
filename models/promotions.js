const mongoose = require('mongoose');

const promotionsSchema = mongoose.Schema({
    name: String,
    description: String,
    value: String,       //ex: value = 0.3 <=> 30% => 0.3*20e = 6e => 20e-6e = 14e
                        //-> price after deduction of the promotion's value.
    type: String,        //= T-shirt, jeans, etc.
    category: String,    //= Men, Women, Children
    token: String,
    popularity: [{type: mongoose.Schema.Types.ObjectId, ref:'users'}], //add of user's id when a given one liked a promotion
    creation: Date,
});

const Promotion = mongoose.model('promotions', promotionsSchema);

module.exports = Promotion;