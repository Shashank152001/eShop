const mongoose =require('mongoose');//module


const productSchema = mongoose.Schema({
    name:String,
    desc:String,
    price:Number,
    img:String
});

module.exports=  mongoose.model('product',productSchema);