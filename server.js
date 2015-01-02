var express = require("express");

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require("./server/config/config")[env];

require("./server/config/express")(app, config);

require("./server/config/mongoose")(config);

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


