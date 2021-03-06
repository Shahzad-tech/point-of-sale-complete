var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name : {
        type: String,
        // required: true,
    },
    category : {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        // required: true,
    },
    description: {
        type: String,
        // required: false,
    },
    quantity: {
        type: Number,
        // required: true,
    },
    price: {
        type: Number,
        // required: true,
    },
    picture: {
        type: String,
        // required: false,
    }
});

module.exports = mongoose.model('Product', ProductSchema);