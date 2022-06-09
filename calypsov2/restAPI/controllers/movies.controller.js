const db = require("../models/index.js");
const Movie = db.movies;

exports.createMovie = async (req, res) => {
    
    if ( req.loggedUserRole === 'regular') {
        res.status(400).json({ message: "Must be an admin or advanced!" });
        return;
    } else if (!req.body) { // validate request body data
        res.status(400).json({ message: "Request body can not be empty!" });
        return;
    }

    const movie = new Movie({
        title: req.body.title,
        type: req.body.type,
        realizador: req.body.realizador,
        description: req.body.description,
        image: req.body.image,
        actors: req.body.actors,
        duration: req.body.duration
    })
    
    try {
        await movie.save(); // save User in the database
        console.log(movie)
        res.status(201).json({ success: true, msg: "New movie created.", URL: `/movies/${movie._id}` });
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
                    success: false, msg: err.message || "Ocorreu um erro ao criar este movie"
                });
        };
};

exports.getMovies = async (req, res) => { 
    const perPage = 6, page = req.query.page;
    try {
        let data = await Movie
            .find()
            .select('title image') // select the fields
            .skip(perPage * page)
            .limit(perPage)
            .exec();
        res.status(200).json({success: true, movies: data});
        }
        catch (err) {
            res.status(500).json({
                success: false, msg: err.message || "Some error occurred while retrieving the movies."
            });
        };
}; 

exports.getSpecificMovies = async (req, res) => { 
    try {
        let data = await Movie
            .findOne({"title": req.params.movieTitle})
            .select() // select the fields
            .exec();

        console.log(data.ratings)
        let ratingAvg = 0;
        data.ratings.forEach(r => {
            ratingAvg += r.rating;
        });
        ratingAvg = ratingAvg / data.ratings.length
        res.status(200).json({success: true, movie: data, rating: ratingAvg});
        }
        catch (err) {
            res.status(500).json({
                success: false, msg: err.message || "Some error occurred while retrieving the movies."
            });
        };
};

exports.createComment = async (req, res) => {
    
    if ( req.loggedUsername != req.params.name ) {
        res.status(400).json({ message: "Must be connected!" });
        return;
    } else if (!req.body) { // validate request body data
        res.status(400).json({ message: "Request body can not be empty!" });
        return;
    }

    let comment = {
        content: req.body.content,
        name: req.loggedUsername
    }
    

    try {
        let data = await Movie.findOneAndUpdate(
            {"title": req.params.movieTitle},
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
    
    let ratingMovie = {
        name: req.params.name,
        rating: req.body.rating
    }

    try {
        let data = await Movie.findOneAndUpdate(
            {"title": req.params.movieTitle},
            { $push: {ratings: ratingMovie}})
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