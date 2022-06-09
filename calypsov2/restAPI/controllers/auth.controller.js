const config = require("../config/db.config.js");
const jwt = require("jsonwebtoken"); //JWT tokens creation (sign()) 
const bcrypt = require("bcryptjs"); //password encryption

exports.verifyToken = (req, res, next) => {
    // search token in headers most commonly used for authorization
    const header = req.headers['x-access-token'] || req.headers.authorization;
    if (typeof header == 'undefined')
        return res.status(401).json({ 
            success: false, 
            msg: "No token provided!" });
    
    const bearer = header.split(' '); // Authorization: Bearer <token>
    const token = bearer[1];
    
    try {
        let decoded = jwt.verify(token, config.SECRET);
        req.loggedUsername = decoded.name; // save user ID and role into request object
        req.loggedUserRole = decoded.role;
        next();
    } catch (err) {
        return res.status(401).json({ success: false, msg: "Unauthorized!" });
    }
};