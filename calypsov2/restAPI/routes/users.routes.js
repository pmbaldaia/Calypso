const express = require('express');
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/users.controller");

// express router
let router = express.Router();

router.route('/')
    .post(userController.createUser);

router.route('/login')
    .post(userController.login);

router.route('/ranking')
    .get(authController.verifyToken, userController.getRanking) 

router.route('/:name')
    .get(authController.verifyToken, userController.getUserInfo)
    .patch(authController.verifyToken, userController.changeInfo);

router.route('/:name/movies/:movieTitle/favorites')
    .post(authController.verifyToken, userController.addMovieFav)
    .patch(authController.verifyToken, userController.removeMovieFav);

router.route('/:name/series/:serieTitle/favorites')
    .post(authController.verifyToken, userController.addSeriesFav)
    .patch(authController.verifyToken, userController.removeSerieFav)
    
router.route('/:name/quizzes/:quizzTitle')
    .patch(authController.verifyToken, userController.finishQuizz)
    //.get(authController.verifyToken, userController.quizzList)

    router.all('*', function (req, res) {
    //send an predefined error message 
    res.status(404).json({ message: 'USERS: what???' });
})

module.exports = router;