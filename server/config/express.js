var express  = require("express"),
    stylus = require("stylus"),
    logger = require("express-logger");
    
module.exports = function (app, config) {
    
    app.set('views', config.rootPath  + 'server/views');
    app.set('view engine', 'jade');
    //app.use(logger('logger.'));
    
    app.use(stylus.middleware(
      {
        src: config.rootPath + '/public',
        compile: compile
      }
    ));
    app.use(express.static(config.rootPath + '/public'));
    
    
    function compile(str, path) {
        return stylus(str).set('filename', path);
    }
    
};


    
