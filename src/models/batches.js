const  mongoose=require('mongoose')
const batchModel=new mongoose.Schema({
    name:String,
    size:Number,
    program:{
        enum:["frontend","backend"]
    }

})
module.exports=mongoose.model('batch',batchModel)