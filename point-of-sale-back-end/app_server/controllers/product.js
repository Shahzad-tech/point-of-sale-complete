var mongoose = require('mongoose');
var Product = require('../models/product');
// var Category = require('../models/category');
// var Customer = require('../models/customer');
// var Cashier = require('../models/cashier');

module.exports.getProducts = async (req, res, next) => {
    await Product.find({}, (err,products) => {
        if(err) {
            return res.status(400).json({success: false, error: err})
        }
        if(!products.length) {
            return res.status(200).json({success: false, error: "Products not found"}) //change code to 404 when data added
        }
        return res.status(200).json({success: true, data: products})
    }).catch(err => console.log(err))
}