const mongoose=require('mongoose')
const objectId=mongoose.Schema.Types.ObjectId
const devloperModel=new mongoose.Schema(
    {
        name:String,
        gender:{
            enum:['male','female','other']
        },
        percentage:Number,
        batch:{
            type:objectId,
            ref:'batch'
        }
    }
)
module.exports=mongoose.model('developer',devloperModel)