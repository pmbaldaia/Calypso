const express = require('express');
const authController = require("../controllers/auth.controller");
const seriesController = require("../controllers/series.controller");

// express router
let router = express.Router();

 
router.route('/')
    .post(authController.verifyToken, seriesController.createSerie)
    .get(seriesController.getSeries);

router.route('/:serieTitle')
    .get(seriesController.getSpecificSeries)

router.route('/:serieTitle/users/:name/comments')
    .put(authController.verifyToken, seriesController.createComment)

router.route('/:serieTitle/users/:name/ratings')
    .post(authController.verifyToken, seriesController.addRating)



router.all('*', function (req, res) {
    //send an predefined error message 
    res.status(404).json({ message: 'SERIES: what???' });
})

module.exports = router;