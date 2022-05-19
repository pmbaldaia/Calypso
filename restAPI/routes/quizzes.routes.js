const express = require('express');
const quizzController = require("../controllers/quizzes.controller");

// express router
let router = express.Router();

 
// router.route('/')
//     .get(quizzController.getQuizzes)

// router.route('/:quizzName')
//     .get(quizzController.getSpecificQuizzes)

// router.route('/:quizzName/users/:userName/comments')
//     .post(quizzController.createComment)

// router.route('/:quizzName/users/:userName/ratings')
//     .post(quizzController.addRating)



router.all('*', function (req, res) {
    //send an predefined error message 
    res.status(404).json({ message: 'QUIZZES: what???' });
})

module.exports = router;