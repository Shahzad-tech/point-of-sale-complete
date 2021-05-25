var express = require('express');
var router = express.Router();
var controller = require('../controllers/product');

router.get('/', controller.getProducts);

module.exports = router;