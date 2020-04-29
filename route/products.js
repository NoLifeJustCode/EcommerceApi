
//import express module
const express=require('express')

//import products Controller to access the actions
const productsController=require('../controller/productsController')

//get the products router action
const router=express.Router();

//route create action
router.post('/create',productsController.create)

//handle fetch list of all products
router.get('/',productsController.get)

//handle delete request on specified product id
router.delete('/:id',productsController.delete)

//route to update quantity of specified product
router.post('/:id/update_quantity',productsController.update_quantity)

//export router 
module.exports=router