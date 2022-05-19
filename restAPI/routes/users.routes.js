const express = require('express');
const userController = require("../controllers/users.controller");

// express router
let router = express.Router();

// router.route('/')
//     .get(userController.findAll)

// router.route('/ranking')
//     .get(userController.getRanking) 

// router.route('/login')
//     .post(userController.login)

// router.route('/:userName')
//     .get(userController.getUser)
//     .patch(userController.changeInfo)

// router.route('/:userName/movies/:movieName')
//     .put(userController.addMovieFav)
//     .delete(userController.removeMovieFav)

// router.route('/:userName/series/:serieName')
//     .put(userController.addSeriesFav)
//     .delete(userController.removeSerieFav)

// router.route('/:userName/quizzes')
//     .get(userController.doneQuizzes)

// router.route('/:userName/quizzes/:quizzName')
//     .put(userController.setPoints)

// router.route('/:usertype/movies')
//     .put(userController.createMovie)

// router.route('/:usertype/series')
//     .put(userController.createserie)

router.route('/:usertype/quizz')
    .put(userController.createQuizz)    


    router.all('*', function (req, res) {
    //send an predefined error message 
    res.status(404).json({ message: 'USERS: what???' });
})

module.exports = router;