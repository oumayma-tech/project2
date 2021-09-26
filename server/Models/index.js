const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.emploi = require("./emploi.model");
db.product = require("./products.model");

db.ROLES = ["client", "admin", "pp", "rh"];

module.exports = db;