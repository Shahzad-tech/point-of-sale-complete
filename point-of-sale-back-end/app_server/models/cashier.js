var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CashierSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    counterNo : {
        type: Number,
        required: true,
    },
    dOb : {
        type: Date,
        required: false,
    },
    address : {
        type: String, 
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    picture: {
        type: Buffer,
        required: false,
    }
});

module.exports = mongoose.model('Cashier', CashierSchema);