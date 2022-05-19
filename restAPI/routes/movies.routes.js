const express = require('express');
const moviesController = require("../controllers/movies.controller");

// express router
let router = express.Router();

// router.route('/')
//     .get(moviesController.getMovies)


// router.route('/:movieName')
//     .get(moviesController.getSpecificMovies)

// router.route('/:movieName/users/:userName/comments')
//     .post(moviesController.createComment)

// router.route('/:movieName/users/:userName/ratings')
//     .post(moviesController.addRating)


router.all('*', function (req, res) {
    //send an predefined error message 
    res.status(404).json({ message: 'MOVIES: what???' });
})

module.exports = router;