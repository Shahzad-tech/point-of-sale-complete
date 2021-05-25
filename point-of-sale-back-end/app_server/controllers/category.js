var mongoose = require('mongoose');
var Category = require('../models/category');

module.exports.getCategories = async (req, res, next) => {
    await Category.find({}, (err,categories) => {
        if(err) {
            return res.status(400).json({success: false, error: err})
        }
        if(!categories.length) {
            return res.status(200).json({success: false, error: "Categories not found"})
        }
        return res.status(200).json({success: true, data: categories})
    }).catch(err => console.log(err))
}