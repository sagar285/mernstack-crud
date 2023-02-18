const mongoose =require("mongoose")
const productschema =new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userid:String,
    company:String
});

const Product =mongoose.model("Products",productschema);
module.exports =Product
