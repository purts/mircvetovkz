var mongoose  = require("mongoose"),
    userModel = require("../models/User"),
    productModel = require("../models/Product"),
    categoryModel = require("../models/Category")
    ;
    
module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('mircvetov db opened');
    });
    
    userModel.createDefaultUsers();
    productModel.createDefaultProducts();
    categoryModel.createDefaultCategories();
};