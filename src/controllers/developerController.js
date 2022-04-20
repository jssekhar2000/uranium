const devModel=require('../models/developer')
const batModel=require('../models/batches')

const createBatch=async function(req,res){
const bodyData=req.body
const data=await batModel.create(bodyData)
res.send({msg:data})
}
const createDevloper=async function(req,res){
const bodyDate=req.body
const data=await devModel.create(bodyDate)
res.send({msg:data})
}
const scholarship=async function(req,res){
const allData=await devModel.find({percentage:{$gte:70},"gender.enum":"female"})
res.send({msg:allData})
}
const developers=async function(req,res){
    let data=req.query.percentage
    let data1=req.query.program
const details=await devModel.find({percentage:data,"program.enum":data1})
res.send({msg:details})
}
module.exports.getBatch=createBatch;
module.exports.getdeveloper=createDevloper
module.exports.scholarshipDetails=scholarship
module.exports.getDeveloper=developers