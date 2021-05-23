var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    }, 
    itemCount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Order', OrderSchema);