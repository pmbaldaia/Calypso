const express = require('express');
const authController = require("../controllers/auth.controller");
const moviesController = require("../controllers/movies.controller");

// express router
let router = express.Router();


router.route('/')
    .get(moviesController.getMovies)
    .post(authController.verifyToken, moviesController.createMovie);

router.route('/:movieTitle')
    .get(moviesController.getSpecificMovies)

router.route('/:movieTitle/users/:name/comments')
    .put(authController.verifyToken, moviesController.createComment)

router.route('/:movieTitle/users/:name/ratings')
    .put(authController.verifyToken, moviesController.addRating)


router.all('*', function (req, res) {
    //send an predefined error message 
    res.status(404).json({ message: 'MOVIES: what???' });
})

module.exports = router;