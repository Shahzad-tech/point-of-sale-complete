var mongoose = require('mongoose');
var Cart = require('../models/cart');

module.exports.getCarts = async (req, res, next) => {
    await Cart.find({}).populate('customer').populate('products.sid').exec((err,carts) => {
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

module.exports.addCart = (req, res, next) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'no input provided',
        })
    }
    const cart = new Cart(body)

    if (!cart) {
        return res.status(400).json({error: err })
    }
    cart.save().then(() => {
        return res.status(201).json({
            success: true,
            id: cart._id,
            message: 'cart created successfully',
        })
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'an error occured while creating cart',
        })
    })
}
  