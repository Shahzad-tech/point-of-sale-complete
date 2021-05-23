var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SalesSchema = new Schema({
    customer : {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    product : {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    }
});

module.exports = mongoose.model('Sales', SalesSchema);