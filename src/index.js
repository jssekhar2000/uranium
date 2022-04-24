const bodyParser = require('body-parser');
const express = require("express");
const route = require('./routes/route.js')
const { default: mongoose } = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://urajrishu:aUHDB96UyJaq9SB@cluster0.1wief.mongodb.net/sekhar2000" ,
 {useNewUrlParser:true})
 .then( () => console.log("Hello Sekhar Your MongoDb is Connected"))
 .catch( err => console.log("err"))

 app.use('/',route)

 app.listen( process.env.PORT || 3000, function(){
    console.log('Express app running on port ' + (process.env.PORT || 3000))
 });