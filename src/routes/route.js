const express = require('express');
const router = express.Router();
const userControl = require("../Controllers/userController");
const auth = require("../Middlewares/auth")


router.post("/user", userControl.creatUser);
router.post("/loginUser", userControl.loginUser);
router.get("/users/:userId",auth.validateToken, userControl.getUserData);
router.put("/users/:userId", auth.validateToken, userControl.updateUser);
router.delete("/users/:userId", auth.validateToken, userControl.deleteUser);



module.exports=router