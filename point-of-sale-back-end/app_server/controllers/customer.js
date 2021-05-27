var mongoose = require('mongoose');
var Customer = require('../models/customer');
// var Product = require('../models/product');
// var Category = require('../models/category');

module.exports.getCustomers = async (req, res, next) => {
  await Customer.find({}, (err,customers) => {
      if(err) {
          return res.status(400).json(err)
      }
      if(!customers.length) {
          return res.status(200).json("Customers not found")
      }
      return res.status(200).json(customers)
  }).catch(err => console.log(err))
}

module.exports.getCustomerById = async (req, res, next) => {
    await Customer.findById(req.params.id)
        .then((customer) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(customer);
        }, (err) => next(err))
        .catch((err) => next(err));
}

