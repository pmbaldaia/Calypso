const express = require('express');
const tutorialController = require("../controllers/badges.controller");

// express router
let router = express.Router();


// router.route('/')
//     .get()


router.all('*', function (req, res) {
    //send an predefined error message 
    res.status(404).json({ message: 'Badges: what???' });
})

module.exports = router;