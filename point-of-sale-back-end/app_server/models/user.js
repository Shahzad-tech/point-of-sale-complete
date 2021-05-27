var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name : {
        type: String,
        // required: true,
    },
    role :{
        type: String,
    },
    counterNo : {
        type: Number,
        // required: true,
    },
    dOb : {
        type: Date,
        // required: false,
    },
    address : {
        type: String, 
        // required: true,
    },
    contactNo: {
        type: String,
        // required: true,
    },
    username: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        // required: true,
    },
    picture: {
        type: Buffer,
        // required: false,
    }
});
//should be a user schema instead with role as cashier or admin
module.exports = mongoose.model('User', UserSchema);