var mongoose  = require("mongoose"),
    userModel = require("../models/User"),
    flowerModel = require("../models/Flower");
    
module.exports = function (config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('mircvetov db opened');
    });
    
    userModel.createDefaultUsers();
    flowerModel.createDefaultImages();
};