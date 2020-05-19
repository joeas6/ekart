const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const ProductSchema = new Schema( {
    productName:{type:String},
    createdDate:{type:Date}
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = {Product};  