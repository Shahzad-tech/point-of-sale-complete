var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    name : {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: false,
    },
    picture: {
        type: Buffer,
        required: true,
    }
});

module.exports = mongoose.model('Customer', CustomerSchema);