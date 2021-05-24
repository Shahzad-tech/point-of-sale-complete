var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
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
    purchaseNo: {
        type: Number,
        required: true,
    },
    purchaseAmount: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('History', HistorySchema);