const express = require('express');
const router = express.Router();
const mixedController=require('../controllers/newBookController')


router.post('/createNewAuthor',mixedController.authorModel)
router.post('/createNewPublisher',mixedController.publisherModel)
router.post('/createNewBook',mixedController.bookModel)
router.get('/allBooks',mixedController.allBooks)
router.put('/book',mixedController.books)
module.exports = router;