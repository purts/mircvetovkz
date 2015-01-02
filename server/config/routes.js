
var users = require("../controllers/userController")

module.exports = function (app) {
    
    app.get('/api/users', users.getUsers);
    
    app.all('/api/*', function(req, res){
        res.sendStatus(404);
    });
     
   app.get('*', function(req, res) {
        res.render('index');
    });
    
    
};


