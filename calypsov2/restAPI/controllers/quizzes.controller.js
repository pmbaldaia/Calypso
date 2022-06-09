const db = require("../models/index.js");
const Quizz = db.quizzes;

exports.createQuizz = async (req, res) => {
    
    if ( req.loggedUserRole === 'regular') {
        res.status(400).json({ message: "Must be an admin! or advanced" });
        return;
    } else if (!req.body) { // validate request body data
        res.status(400).json({ message: "Request body can not be empty!" });
        return;
    }

    const quizz = new Quizz({
        title: req.body.title,
        type: req.body.type,
        image: req.body.image,
        points: req.body.points,
        quizz: req.body.quizz
    })

    try {
        await quizz.save(); // save User in the database
        console.log(quizz)
        res.status(201).json({ success: true, msg: "New quizz created.", URL: `/quizzes/${quizz._id}` });
        }
        catch (err) {
            if (err.name === "ValidationError") {
                let errors = [];
                Object.keys(err.errors).forEach((key) => {
                    errors.push(err.errors[key].message);
                });
                return res.status(400).json({ success: false, msgs: errors });
            } 
            else
                res.status(500).json({
                    success: false, msg: err.message || "Ocorreu um erro ao criar este quizz"
                });
        };
};

exports.getQuizzes = async (req, res) => { 
    const perPage = 6, page = req.query.page;
    try {
        let data = await Quizz
            .find()
            .select('title image') // select the fields
            .skip(perPage * page)
            .limit(perPage)
            .exec();
        res.status(200).json({success: true, quizzes: data});
        }
        catch (err) {
            res.status(500).json({
                success: false, msg: err.message || "Some error occurred while retrieving the quizzes."
            });
        };
}; 

exports.getSpecificQuizzes = async (req, res) => { 

    try {
        let data = await Quizz
            .findOne({"title": req.params.quizzTitle})
            .select() // select the fields
            .exec();
        res.status(200).json({success: true, quizz: data});
        }
        catch (err) {
            res.status(500).json({
                success: false, msg: err.message || "Some error occurred while retrieving the quizz."
            });
        };
};
 
exports.createComment = async (req, res) => {
    
    if ( req.loggedUserRole != req.params.name ) {
        res.status(400).json({ message: "Must be connected!" });
        return;
    } else if (!req.body) { // validate request body data
        res.status(400).json({ message: "Request body can not be empty!" });
        return;
    }

    let comment = {
        content: req.body.content,
        name: req.params.name
    }
    

    try {
        let data = await Quizz.findOneAndUpdate(
            {"title": req.params.quizzTitle},
            { $push: {comments: comment}})
            console.log(data);
        res.status(201).json({ success: true, msg: "New comment created."});
        }
        catch (err) {
            if (err.name === "ValidationError") {
                let errors = [];
                Object.keys(err.errors).forEach((key) => {
                    errors.push(err.errors[key].message);
                });
                return res.status(400).json({ success: false, msgs: errors });
            } 
            else
                res.status(500).json({
                    success: false, msg: err.message || "Ocorreu um erro ao criar este commentario"
                });
        };
};

exports.addRating = async (req, res) => {
    
    if ( req.loggedUsername != req.params.name ) {
        res.status(400).json({ message: "Must be connected!" });
        console.log(req.loggedUserRole);
        return;
    } else if (!req.body) { // validate request body data
        res.status(400).json({ message: "Request body can not be empty!" });
        return;
    }
    

    try {
        let data = await Quizz.findOneAndUpdate(
            {"title": req.params.quizzTitle},
            { $push: {ratings: req.body.rating}})
            console.log(data);
        res.status(201).json({ success: true, msg: "New rating added."});
        }
        catch (err) {
            if (err.name === "ValidationError") {
                let errors = [];
                Object.keys(err.errors).forEach((key) => {
                    errors.push(err.errors[key].message);
                });
                return res.status(400).json({ success: false, msgs: errors });
            } 
            else
                res.status(500).json({
                    success: false, msg: err.message || "Ocorreu um erro ao criar este commentario"
                });
        };
};