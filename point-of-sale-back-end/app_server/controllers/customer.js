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

module.exports.addCustomer = (req, res, next) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'no input provided',
        })
    }
    const customer = new Customer(body)

    if (!customer) {
        return res.status(400).json({error: err })
    }
    customer.save().then(() => {
        return res.status(201).json({
            success: true,
            id: customer._id,
            message: 'customer created successfully',
        })
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'an error occured while creating customer',
        })
    })
}
  
