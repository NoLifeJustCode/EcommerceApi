module.exports.errorHandling=function(err,status_code=204,res,message){
    console.log(err)
    res.send(status_code,message)
}