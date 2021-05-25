var express = require('express');
var router = express.Router();
var controller = require('../controllers/cart');

router.get('/', controller.index);

module.exports = router;