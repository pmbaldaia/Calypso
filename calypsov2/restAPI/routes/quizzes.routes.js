const express = require('express');
const authController = require("../controllers/auth.controller");
const quizzController = require("../controllers/quizzes.controller");

// express router
let router = express.Router();

 
router.route('/')
    .get(quizzController.getQuizzes)
    .post(authController.verifyToken, quizzController.createQuizz);  

router.route('/:quizzTitle')
    .get(quizzController.getSpecificQuizzes)

router.route('/:quizzTitle/users/:name/comments')
    .put(authController.verifyToken,quizzController.createComment)

router.route('/:quizzTitle/users/:name/ratings')
    .put(authController.verifyToken, quizzController.addRating)



router.all('*', function (req, res) {
    //send an predefined error message 
    res.status(404).json({ message: 'QUIZZES: what???' });
})

module.exports = router;