const jwt = require("jsonwebtoken"); //JWT tokens creation (sign()) 
const bcrypt = require("bcryptjs"); //password encryption

const config = require("../config/db.config.js");
const db = require("../models/index.js");
const User = db.users;
const Quizz = db.quizzes;



exports.createUser = async (req, res) => {
    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        points: req.body.points,
        role: req.body.role
    }) 
    
    
    try {
        await user.save(); // save User in the database
        console.log(user)
        res.status(201).json({ success: true, msg: "New user created.", URL: `/users/${user._id}` });
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
                    success: false, msg: err.message || "Ocorreu um erro ao criar este utilizador"
                });
        };
};

exports.login = async (req, res) => {

    try {
        if (!req.body || !req.body.name || !req.body.password)
            return res.status(400).json({ success: false, msg: "Must provide name and password." });
        
        let user = await User
        .findOne({ name: req.body.name })
        .exec(); //get user data from DB
        
        if (!user) return res.status(404).json({ success: false, msg: "User not found." });

        // tests a string (password in body) against a hash (password in database)
        const check = bcrypt.compareSync( req.body.password, user.password );
        if (!check) return res.status(401).json({ success:false, accessToken:null, msg:"Invalid credentials!" });
        
        // sign the given payload (user ID and type) into a JWT payload – builds JWT token, using secret key
        const token = jwt.sign({ name: user.name, role: user.role },
            config.SECRET, { expiresIn: '24h' // 24 hours
        });
            return res.status(200).json({ success: true, accessToken: token });
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
                success: false, msg: err.message || "Some error occurred while loggin in."
            });    
    };
};

exports.getRanking = async (req, res) => {
    try {
        let data = await User
            .find({ $or: [{ role: "regular" }, { role: "advanced" }] })
            .select('name points') // select the fields (it will add _id): do not show versionKey
            .exec();
        res.status(200).json({success: true, count, users: data});
    }
    catch (err) {
        res.status(500).json({
            success: false, msg: err.message || "Some error occurred while retrieving the tutorials."
        });
    }
};

exports.getUserInfo = async (req, res) => {
    try {    
        const user = await User
        .findOne({"role": req.params.name})
        .exec();
        // no data returned means there is no tutorial in DB with that given ID 
        if (user === null) {
            res.status(404).json({
            message: `Not found user with name ${req.params.name}.`
            });
        } else {
            res.status(200).json(user);
            }
        }
        catch (err) 
        {
        res.status(500).json({
        message: err.message || `Error retrieving user with name ${req.params.name}.`
        });
        }
}

exports.changeInfo = async (req, res) => {
    if (!req.body) { // validate request body data
        res.status(400).json({ message: "Request body cannot be empty!" });
        return;
    }
    console.log(req.body);
    try {
        const user = await User.findOneAndUpdate({"name": req.params.name}, req.body, { 
            useFindAndModify: false //https://mongoosejs.com/docs/deprecations.html#findandmodify
        }).exec();
        if (!user) // returns the found document (if any) to the callback
            res.status(404).json({
            message: `Not found User with id=${req.params.name}.`
            });
        else
            res.status(200).json({
            message: `User name=${req.params.name} was updated successfully.`
            });
    } 
    catch (err) 
    {
        res.status(500).json({
        message: `Error updating User with name=${req.params.name}.`
        });
    };
};

exports.addMovieFav = async (req, res) => {
    
    if ( req.loggedUsername != req.params.name ) {
        res.status(400).json({ message: "Must be connected!" });
        return;
    } else if (!req.body) { // validate request body data
        res.status(400).json({ message: "Request body can not be empty!" });
        return;
    }

    

    try {
        let user = await User.findOneAndUpdate(
            {"name": req.params.name},
            { $push: 
                {
                    favMovies:
                    {
                    title: req.body.title,
                    image: req.body.image
                    }
                }
            },
            { new: true, useFindAndModify: false })
            console.log(user);
        res.status(201).json({ success: true, msg: "New fav. movie added."});
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

exports.removeMovieFav = async (req, res) => {
    
    if ( req.loggedUsername != req.params.name ) {
        res.status(400).json({ message: "Must be connected!" });
        return;
    } else if (!req.body) { // validate request body data
        res.status(400).json({ message: "Request body can not be empty!" });
        return;
    }


    try {
        let data = await User.findOneAndUpdate(
            {"name": req.params.name},
            { $pull: {favMovies: {"title": req.body.title}}})
            console.log(data);
        res.status(201).json({ success: true, msg: "Fav. movie removed."});
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

exports.addSeriesFav = async (req, res) => {
    
    if ( req.loggedUsername != req.params.name ) {
        res.status(400).json({ message: "Must be connected!" });
        return;
    } else if (!req.body) { // validate request body data
        res.status(400).json({ message: "Request body can not be empty!" });
        return;
    }

    let serie = {
        title: req.body.title,
        image: req.body.image
    }
    

    try {
        let data = await User.findOneAndUpdate(
            {"name": req.params.name},
            { $push: {favSeries: serie}})
            console.log(data);
        res.status(201).json({ success: true, msg: "New fav. serie added."});
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

exports.removeSerieFav = async (req, res) => {
    
    if ( req.loggedUsername != req.params.name ) {
        res.status(400).json({ message: "Must be connected!" });
        return;
    } else if (!req.body) { // validate request body data
        res.status(400).json({ message: "Request body can not be empty!" });
        return;
    }


    try {
        let data = await User.findOneAndUpdate(
            {"name": req.params.name},
            { $pull: {favSeries: {"title": req.body.title}}})
            console.log(data);
        res.status(201).json({ success: true, msg: "Fav. serie removed."});
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

exports.finishQuizz = async (req, res) => {
    // if (!req.body) { // validate request body data
    //     res.status(400).json({ message: "Request body can not be empty!" });
    //     return;
    // }
    
    try {
        let data = await Quizz
            .findOne({"title": req.params.quizzTitle})
            .exec();
        console.log(data);

        let quizz =  {
            title: data.title,
            image: data.image
        }

        const user = await User.findOneAndUpdate({"name": req.params.name}, {$inc: {points: data.points}}, { 
            useFindAndModify: false //https://mongoosejs.com/docs/deprecations.html#findandmodify
        }).exec();

        await User.findOneAndUpdate({"name": req.params.name}, { $push: {doneQuizz: quizz}}, { 
            useFindAndModify: false //https://mongoosejs.com/docs/deprecations.html#findandmodify
        }).exec();

        if (!user) // returns the found document (if any) to the callback
            res.status(404).json({
            message: `Not found User with id=${req.params.name}.`
            });
        else
            res.status(200).json({
            message: `User name=${req.params.name} was updated successfully.`
            });
    } 
    catch (err) 
    {
        res.status(500).json({
        message: `Error updating User with name=${req.params.name}.`
        });
    };
};