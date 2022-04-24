const mongoose= require('mongoose');

const userSchema = new mongoose.Schema ( {
firstName: String,
lastName: String,
mobile:{
    type:String,
    required:true
},
emailId: String,
password: String,
gender:{
    type:String,
    enum:["Male","Female","Others"]
},
isDeleted:{type:Boolean,default:false}
}, {timestamps:true});


module.exports = mongoose.model("MW2User",userSchema)