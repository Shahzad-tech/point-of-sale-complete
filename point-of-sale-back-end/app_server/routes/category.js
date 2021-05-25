var express = require('express');
var router = express.Router();
var controller = require('../controllers/category');

router.get('/', controller.getCategories);

module.exports = router;