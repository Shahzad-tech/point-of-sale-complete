var mongoose = require('mongoose');
var Cart = require('../models/cart');

module.exports.getCarts = async (req, res, next) => {
    await Cart.find({}, (err,carts) => {
        if(err) {
            return res.status(400).json(err)
        }
        if(!carts.length) {
            return res.status(200).json("carts not found")
        }
        return res.status(200).json(carts)
    }).catch(err => console.log(err))
}
  
module.exports.getCartById = async (req, res, next) => {
      await Cart.findById(req.params.id)
          .then((cart) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(cart);
          }, (err) => next(err))
          .catch((err) => next(err));
}
  