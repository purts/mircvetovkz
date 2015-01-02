var path = require("path");
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/mircvetovkz',
        rootPath: rootPath,
        ip: process.env.IP,
        port: process.env.PORT
    },
    production: {
        db: '',
        rootPath: rootPath,
        ip: process.env.IP,
        port: process.env.PORT
    }
};