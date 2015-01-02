var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
	UserName: String,
	FirstName: String,
	LastName: String,
	Email: String,
	Phone: String,
	Roles: [String]
});

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}).exec(function (error, collection) {
        if (collection.length === 0) {
            User.create({
                UserName: 'admin', 
                FirstName: 'Администратор',
                Email: 'admin@mircvetov.kz',
                Roles: [ 'admin' ]
                
            });
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;
