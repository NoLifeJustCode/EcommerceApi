//import mongoose instance 
const mongoose=require('mongoose');

//import Ecommerce db connection to attach the model to Ecommerce db to avoid default connection from mongoose
const db=require('../config/mongoose');
//import Schema 
const Schema=mongoose.Schema
/**
 * The productsSchema contains name and quantity
 * Both the fields are required and no specific validations done except data type 
 */
const productsSchema=new Schema({name:{
    type:String,
    required:true,
},
quantity:{
        type:Number,
        required:true,
}
},{timestamps:true})
module.exports=db.model('products',productsSchema)