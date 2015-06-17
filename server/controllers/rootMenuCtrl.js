rootRequire('models/RootMenu');
var RootMenu = require('mongoose').model('RootMenu');

exports.GetRootMenu = function(req, res){
    RootMenu.find({}).exec(function(e, c) {
        if (e){
            console.log(e.message);
            res.status(500);
            res.send(e);
        }else{
            res.send(c);
        }
    });
}

exports.SetRootMenu = function(req, res){
    RootMenu = req;
    RootMenu.save(function(err, req){
        if (err){
            res.status(500);
            res.send(err);
        }else{
            res.send('ok');
        }
    });
}