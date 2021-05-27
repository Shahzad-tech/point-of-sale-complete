var express = require('express');
var router = express.Router();
var controller = require('../controllers/cart');

router.get('/', controller.getCarts);
router.get('/:id', controller.getCartById);

router.post('/add', controller.addCart);

module.exports = router;