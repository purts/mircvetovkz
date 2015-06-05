var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    encrypt = require('../utilities/encryption');

var userSchema = new Schema({
    FirstName: {type: String, required: '{PATH} обязательное поле'},
    LastName: {
        type: String, required: '{PATH} обязательное поле'
    },
    UserName: {
        type: String,
        required: '{PATH} обязательное поле',
        unique: true
    },
    Salt: {type: String, required: '{PATH} обязательное поле!'},
    Hashed_pwd: {type: String, required: '{PATH} обязательное поле!'},
    Email: String,
    Phone: String,
    Roles: [String]
});

userSchema.methods = {
    authenticate: function (passwordToMatch) {
        return encrypt.hashPwd(this.Salt, passwordToMatch) === this.Hashed_pwd;
    },
    hasRole: function (role) {
        return this.Roles.indexOf(role) > -1;
    }

};

var User = mongoose.model('User', userSchema, 'Users');

function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Qaz1wsx2');
            User.create({
                FirstName: 'Администратор',
                LastName: 'Администратор',
                UserName: 'admin',
                Salt: salt,
                Hashed_pwd: hash,
                Email: 'admin@sitenodejs.kz',
                Roles: ['admin']
            });

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Qaz1wsx2');
            User.create({
                FirstName: 'Пользователь 1',
                LastName: 'Пользователь 1',
                UserName: 'user1',
                Salt: salt,
                Hashed_pwd: hash,
                Email: 'user1@sitenodejs.kz',
                Roles: ['user']
            });

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Qaz1wsx2');
            User.create({
                FirstName: 'Пользователь 2',
                LastName: 'Пользователь 2',
                UserName: 'user2',
                Salt: salt,
                Hashed_pwd: hash,
                Email: 'user2@sitenodejs.kz',
                Roles: ['user']
            });
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;
