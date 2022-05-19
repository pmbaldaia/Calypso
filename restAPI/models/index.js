const dbConfig = require('../config/db.config.js');

const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.URL;
const client = new MongoClient(db.url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

(async () => {
    try {
        await client.connect();
        console.log("Connected to the database!");
    } catch (err) {
        console.log("Cannot connect to the database!", err);
        process.exit();
    }
})();
 
db.users = require("./user.model.js")(mongoose);

module.exports = db;