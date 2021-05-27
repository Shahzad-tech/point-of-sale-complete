var express = require('express');
var router = express.Router();
var controller = require('../controllers/sales');

router.get('/daily', controller.getDailySales);
router.get('/weekly', controller.getWeeklySales);
router.get('/monthly', controller.getMonthlySales);
router.get('/top', controller.getTopSales);

module.exports = router;