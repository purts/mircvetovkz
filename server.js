var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local").Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();


var config = require("./server/config/config")[env];

require("./server/config/express")(app, config);

require("./server/config/mongoose")(config);

var User = mongoose.model('User');
passport.use(new LocalStrategy(function (userName, password, done) {
    User.findOne({UserName:userName}).exec(function (err, user) {
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    });
}));

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    })
});


require("./server/config/routes")(app);

app.listen(config.port, config.ip);
console.log('Listening ip ' + config.ip + ' ...');
console.log('Listening port ' + config.port + ' ...');


/*app.get('/api/users', function (req, res) {
    mongoose.model('User').find({}).exec(function (error, collection) {
        res.send(collection);
    });
});
app.get('*', function(req, res) {
    res.render('index');
});*/

/*mongoose.connect('mongodb://localhost/mircvetovkz');
var con = mongoose.connection;
con.once('open', function () {
   console.log('connected to mongodb');
   userModel.createDefaultUsers();
});*/


