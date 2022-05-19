const express = require('express');
const seriesController = require("../controllers/series.controller");

// express router
let router = express.Router();

 
// router.route('/')
//     .get(seriesController.getMovies)

// router.route('/:movieName')
//     .get(seriesController.getSpecificMovies)

// router.route('/:movieName/users/:userName/comments')
//     .post(seriesController.createComment)

// router.route('/:movieName/users/:userName/ratings')
//     .post(seriesController.addRating)



router.all('*', function (req, res) {
    //send an predefined error message 
    res.status(404).json({ message: 'SERIES: what???' });
})

module.exports = router;