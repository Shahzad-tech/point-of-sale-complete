var express = require('express');
var router = express.Router();
var controller = require('../controllers/cashier');

router.get('/', controller.getCashiers);
router.get('/:id', controller.getCashierById);

router.post('/add', controller.addCashier);

router.delete('/delete/:id', controller.deleteCashier);

router.put('/edit/:id', controller.editCashier);

module.exports = router;