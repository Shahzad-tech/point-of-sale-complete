var express = require('express');
var router = express.Router();
var controller = require('../controllers/customer');

router.get('/', controller.getCustomers);
router.get('/:id', controller.getCustomerById);

router.post('/add', controller.addCustomer);

module.exports = router;
