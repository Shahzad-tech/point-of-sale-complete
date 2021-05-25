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
        required: false,  //should be true when ar and face recognition is connected
    },
});

module.exports = mongoose.model('Customer', CustomerSchema);