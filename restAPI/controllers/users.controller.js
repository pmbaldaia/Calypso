const db = require("../models/index.js");
const User = db.users;

// Find a single Tutorial with an id
exports.login = async (req, res) => {
    try {
        // to use a full fledge promise you will need to use .exec(): findById or findOne returns a QUERY object, not a document
        // You can either use a callback as the solution suggests or as of v4+ findOne returns a thenable so you can use .then or await/async to retrieve the document
        //https://mongoosejs.com/docs/promises.html
        const user = await User.findOne({'name': req.params.name, 'password': req.params.password})
            .exec();
        // no data returned means there is no tutorial in DB with that given ID 
        
        if (user === null)
            return res.status(404).json({
                success: false, msg: `Cannot find any tutorial with name ${req.params.name}.`
            });
        // on success, send the tutorial data
        if (user.name === req.params.name && user.password === req.params.password){
        res.json({ success: true, user: user });
        } else {
            return res.status(401).json({
                success: false, msg: `Incorrect username or password.`
            })
        }
    }
    catch (err) {
        res.status(500).json({
            success: false, msg: `Error retrieving tutorial with name ${req.params.name}.`
        });
    }
}; //done


/* copy of 
// Create and Save a new Tutorial
exports.create = async (req, res) => {
    // create a document (instance of model Tutorial)
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,


    });
    

    try {
        await tutorial.save(); // save Tutorial in the database
        console.log(tutorial)
        res.status(201).json({ success: true, msg: "New tutorial created.", URL: `/tutorials/${tutorial._id}` });
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
                success: false, msg: err.message || "Some error occurred while creating the tutorial."
            });
    }

};

// Retrieve all Tutorials / find by title
exports.findAll = async (req, res) => {
    const title = req.query.title;

    // build REGEX to filter tutorials titles with a sub-string - i will do a case insensitive match 
    // (https://docs.mongodb.com/manual/reference/operator/query/regex/)
    let condition = title ? { title: new RegExp(title, 'i') } : {};

    try {
        let data = await User
            .find(condition)
            .select('title description published') // select the fields (it will add _id): do not show versionKey
            .exec();
        res.status(200).json({success: true, tutorials: data});
    }
    catch (err) {
        res.status(500).json({
            success: false, msg: err.message || "Some error occurred while retrieving the tutorials."
        });

    }
};


// Update a Tutorial by the id in the request
exports.update = async (req, res) => {
    // validate request body data
    if (!req.body || !req.body.title) {
        res.status(400).json({ message: "Request body can not be empty!" });
        return;
    }
    try {
        // Issues a mongodb findAndModify update command by a document's _id field
        // Finds a matching document, updates it according to the update arg, passing any options, and returns the found document (if any) to the callback
        const tutorial = await Tutorial.findByIdAndUpdate(req.params.tutorialID, req.body,
            {
                returnOriginal: false, // to return the updated document
                runValidators: true, //runs update validators on this command. Update validators validate the update operation against the model's schema ( example: does not allow for null titles)
                useFindAndModify: false //https://mongoosejs.com/docs/deprecations.html#findandmodify,
            }
        ).exec();
        console.log(tutorial)

        if (!tutorial)
            return res.status(404).json({
                message: `Cannot update Tutorial with id=${req.params.tutorialID}. Maybe Tutorial was not found!`
            });
        res.status(200).json({
            message: `Tutorial id=${req.params.tutorialID} was updated successfully.`
        });
    } catch (err) {
        res.status(500).json({
            message: `Error updating Tutorial with id=${req.params.tutorialID}.`
        });
    };
};

// Delete a Tutorial with the specified id in the request
exports.delete = async (req, res) => {
    try {
        const tutorial = await Tutorial.findByIdAndRemove(req.params.tutorialID).exec();
        if (!tutorial)
            res.status(404).json({
                message: `Cannot delete Tutorial with id=${req.params.tutorialID}. Maybe Tutorial was not found!`
            });
        else
            res.status(200).json({
                message: `Tutorial id=${req.params.tutorialID} was deleted successfully.`
            });
    } catch (err) {
        res.status(500).json({
            message: `Error deleting Tutorial with id=${req.params.tutorialID}.`
        });
    };
};

// Find all published Tutorials
exports.findAllPublished = async (req, res) => {
    try {
        let data = await Tutorial
            .find({ published: true }) //condition
            .select('title description published') // select the fields (it will add _id): do not show versionKey
            .exec(); 
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({
            message:
                err.message || "Some error occurred while retrieving published tutorials."
        });

    }
};*/