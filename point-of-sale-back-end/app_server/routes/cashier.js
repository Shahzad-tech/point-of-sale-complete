var express = require('express');
var router = express.Router();
var controller = require('../controllers/cashier');

router.get('/', controller.getCashiers);

module.exports = router;