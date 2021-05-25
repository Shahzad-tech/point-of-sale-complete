var express = require('express');
var router = express.Router();
var controller = require('../controllers/admin');

router.get('/products', controller.getProducts);
router.get('/categories', controller.getCategories);
router.get('/customers', controller.getCustomers);
router.get('/cashiers', controller.getCashiers);

module.exports = router;

