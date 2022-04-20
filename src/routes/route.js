const express = require('express');
const router = express.Router();

const Controller= require("../controllers/developerController")

router.post("/batches", Controller.getBatch)

router.post("/developers", Controller.getdeveloper)

router.get("/scholarship-developers", Controller.scholarshipDetails)

router.get("/developers?percentage=value1&program=value2",Controller.getDeveloper)

module.exports = router;