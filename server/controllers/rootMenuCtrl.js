rootRequire('models/RootMenu');
var RootMenu = require('mongoose').model('RootMenu');

exports.GetRootMenu = function(req, res){
    RootMenu.find({}).exec(function(e, c) {
        if (e){
            console.log(e.message);
            res.status(500);
            res.send(e.message);
        }else{
            res.send(c);
        }
    });
}