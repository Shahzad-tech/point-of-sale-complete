var express = require('express');
var router = express.Router();
var controller = require('../controllers/cart');

router.get('/', controller.getCarts);
router.get('/:id', controller.getCartById);

module.exports = router;