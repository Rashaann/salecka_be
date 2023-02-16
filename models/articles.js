const mongoose = require('mongoose');

const quantities = mongoose.Schema({
    xs:Number,
    s:Number,
    m:Number,
    l:Number,
    xl:Number,
    xxl:Number,
});

const articlesSchema = mongoose.Schema({
    name:String,
    description:String,
    type:String,            //= T-shirt, jeans, etc.
    category:String,        //= Men, Women, Children
    price:Number,
    token:String,
    popularity:[{type: mongoose.Schema.Types.ObjectId, ref:'users'}], //add of user's id when a given one liked an article
    quantity: quantities,
});

const Article = mongoose.model('articles', articlesSchema);

module.exports = Article;