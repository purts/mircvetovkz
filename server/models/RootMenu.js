var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var rootMenuSchema = new Schema({
    Label: {
        type: String
        , required: '{PATH} ������������ ����'
    }
    , Order: {
        type: Number
        , required: '{PATH} ������������ ����'
    }
    //, Inner: {
    //    type: [Parent]
    //}
});

var RootMenu = mongoose.model('RootMenu', rootMenuSchema, 'RootMenus');