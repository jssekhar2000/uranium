const newAuthorModel=require('../models/newAuthorModel');
const newPublisherModel=require('../models/newPublisherModel');
const newBookModel=require('../models/newBookModel');
const { default: mongoose } = require('mongoose');

const authorModel=async function(req,res){
let authorBodyData=req.body
let authorData=await newAuthorModel.create(authorBodyData)
res.send(authorData)
}

const publisherModel=async function(req,res){
    let publisherBodyData=req.body
let publisherData=await newPublisherModel.create(publisherBodyData)
res.send(publisherData)
}
const bookModel=async function(req,res){
  let bodyData=req.body
  let authorId=bodyData.author
  let publisherId=bodyData.publisher
  if(!authorId){
    return res.send({message:"Author id must be present in book details"})
  }
  let author=await newAuthorModel.findById(authorId)
  if(!author){
    return res.send({message:"Not a valid Author id"})
  }
  if(!publisherId){
    return res.send({messege:"Publisher id must be present in book details"})
  }
  let publisher= await newPublisherModel.findById(publisherId)
  if(!publisher){
    res.send({message: "Not a valid publisher id"})
  }
    let bookData=await newBookModel.create(bodyData)
    res.send({data: bookData})
  }

let allBooks=async function(req,res){
    let allData=await newBookModel.find().populate('author publisher')
    res.send({data:allData})
}
let books=async function(req,res){
    let data=await newBookModel.updateMany(
      {ratings:{$gt:3.5}},
      {$inc:{price:10}},
      {new:true}
    )
    res.send({msg:data})
  }
  
module.exports.authorModel=authorModel;
module.exports.publisherModel=publisherModel;
module.exports.bookModel=bookModel;
module.exports.allBooks=allBooks;
module.exports.books=books;