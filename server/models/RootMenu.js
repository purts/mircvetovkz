var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var rootMenuSchema = new Schema({
    Label: {
        type: String
        , required: '{PATH} обязательное поле'
    }
    , Order: {
        type: Number
        , required: '{PATH} обязательное поле'
    }
    //, Inner: {
    //    type: [Parent]
    //}
});

var RootMenu = mongoose.model('RootMenu', rootMenuSchema, 'RootMenus');