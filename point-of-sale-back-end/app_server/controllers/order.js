var mongoose = require('mongoose');
var Order = require('../models/orders');

module.exports.getOrders = async (req, res, next) => {
  await Order.find({}, (err,orders) => {
      if(err) {
          return res.status(400).json(err)
      }
      if(!categories.length) {
          return res.status(200).json("orders not found")
      }
      return res.status(200).json(orders)
  }).catch(err => console.log(err))
}

module.exports.getOrderById = async (req, res, next) => {
  await Order.findById(req.params.id)
      .then((order) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(order);
      }, (err) => next(err))
      .catch((err) => next(err));
}
