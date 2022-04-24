const jwt= require("jsonwebtoken");
const { modelName } = require("../models/userModel");
const userModel = require("../models/userModel");

const creatUser = async function (req,res) {  // we Can Use abcd,xyz objects Anything.
//but the first parameter is always the request 
  //the second parameter is always the response
  let data = req.body;
  let savedData= await userModel.create(data);
  res.send({msg: savedData});
}

const loginUser = async function(req,res){
  let userName = req.body.emailId;
  let password=req.body.password;

  let user = await userModel.findOne({emailId:userName,password:password});
  if(!user){
    return res.send({
      status:false,
      msg:"user name or the password is not correct"
    })
  }
// Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
let token = jwt.sign(
  {
    userId: user._id.toString(),
    batch: "Uranium",
    Organisation: "FunctionUp"
  },
  "FunctionUp-Uranium"
);
res.send({status:true,data:token});
}

const getUserData = async function(req,res){
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);

  if(!userDetails)
  return res.send({status : false , msg:"No Such user Exist "});
  res.send({status:true,data:userDetails});
};

const updateUser = async function (req,res){
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if(!user){
  return res.send({status:false,msg:"No such User Exist"});
  };
  let userData = req.body;
  let updateUser = await userModel.findOneAndUpdate({_id:userId},userData,{new : true});
  res.send({status:true,dara:updateUser});
};

const deleteUser = async function(req,res){
  let userId=req.params.userId;
  let user = await userModel.findById(userId)
  if(!user){
    return res.send({status:false,msg:"No such User Exist"});
  };
  let updateUser = await userModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true});
  res.send({status:true,data:updateUser});
};
module.exports.creatUser = creatUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;