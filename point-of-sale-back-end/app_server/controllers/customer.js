var mongoose = require('mongoose');
var Customer = require('../models/customer');
// var Product = require('../models/product');
// var Category = require('../models/category');

module.exports.getCustomers = async (req, res, next) => {
  await Customer.find({}, (err,customers) => {
      if(err) {
          return res.status(400).json({success: false, error: err})
      }
      if(!customers.length) {
          return res.status(200).json({success: false, error: "Customers not found"})
      }
      return res.status(200).json({success: true, data: customers})
  }).catch(err => console.log(err))
}

