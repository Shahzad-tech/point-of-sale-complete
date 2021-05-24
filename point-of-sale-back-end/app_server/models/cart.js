var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    products: {
        type: [{
            sid: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
            },
            quantity:{
                type: Number,
                required: true,
            }
        }],
        required: true,
    },
    cartNo: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Cart', CartSchema);