const mongoose=require('mongoose')
const publisherData=new mongoose.Schema(
    {
        name:String,
        headQuarter:String,
        
    },{timestamps:true}
)
module.exports=mongoose.model('newPublisher',publisherData)