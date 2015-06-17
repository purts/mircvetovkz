global.rootRequire = function (str) {
    return require(__dirname + "/" + str);
}

rootRequire('../web/run.js');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = rootRequire("config/config")[env];
rootRequire("config/mongoose")(config);

var express = require("express");
var app = express();
rootRequire("config/express")(app, config);
rootRequire("config/routes")(app);
app.listen(config.port, config.ip);

rootRequire("config/passport")();

console.log('Listening ip ' + config.ip + ' ...');
console.log('Listening port ' + config.port + ' ...');

console.log();