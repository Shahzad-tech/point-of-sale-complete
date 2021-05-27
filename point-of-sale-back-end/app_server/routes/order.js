var express = require('express');
var router = express.Router();
var controller = require('../controllers/order');

router.get('/', controller.getOrders);
router.get('/:id', controller.getOrderById);

module.exports = router;