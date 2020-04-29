/*
    Import modules
 */
const db=require('../config/mongoose')//db connection object
const products=require('../model/products')//products model
const supportModule=require('../modules/supportingModules')//supporting modules
const errorHandler=supportModule.errorHandling
/*
    create product action
    returns 504 or 200 with product document
 */
module.exports.create=function(req,res){
    console.log(req.query.product)
    products.create(req.query.product,function(err,data){
        
        if(err){
            var message='Error creating product record'
            errorHandler(errr,504,res,message)//error handler
            return
        }
       
        return res.send(200,{'data':{'product':{'name':data.name,'quantity':data.quantity}}})
    })
}
/*
    fetch products action
    returns 404 or 200 with the list of products in the inventory
 */
module.exports.get=function(req,res){
    products.find({},'__id name quantity',function(err,data){
            if(err){
                var message='Error Finding product'
                errorHandler(errr,404,res,message)
            }
            return res.send(200,{'data':{'products':data}})
    })
}
/*
    delete product action
    return 504 or 200 with appropriate message
 */
module.exports.delete=function(req,res){
    products.findByIdAndDelete(req.params.id,function(err,data){
        var message='Product deleted Successfully';
        if(err){
            message='Error Deleting product'
            errorHandler(errr,504,res,message)
            return;
        }
        console.log(data)
        
        if(!data)
            message="Product not in Inventory"
        return res.send(200,{'data':{'message':message}});
        
    })
}
/*
    update product action
    return 504 or 200 with update data if data found or null if not
 */
module.exports.update_quantity=function(req,res){
    console.log(req.params.id,req.query.number)
    products.findByIdAndUpdate(req.params.id,{'quantity':req.query.number},{new:true,select:'__id name quantity'},function(err,data){
        var message='update successfull';
        if(err){
            message='Error Deleting product';
            errorHandler(errr,504,res,message)
            return;
        }
        if(!data)
            message='No product found to update'
        res.send(200,{'data':{
            'product':data,
             message:message
        }})
    })
} 