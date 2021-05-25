var express = require('express');
var router = express.Router();
var controller = require('../controllers/customer');

router.get('/', controller.getCustomers);

module.exports = router;
