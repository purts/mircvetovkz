var User = require("mongoose").model('User');

exports.getUsers = function (req, res) {
    User.find({}).exec(function(error, collection){
        res.send(collection);
    });
};