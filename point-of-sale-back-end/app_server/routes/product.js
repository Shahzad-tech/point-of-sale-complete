var express = require('express');
var router = express.Router();
var controller = require('../controllers/product');

router.get('/', controller.getProducts);
router.get('/:id', controller.getProductById);

router.post('/add', controller.addProduct);

router.delete('/delete/:id', controller.deleteProduct);

router.put('/edit/:id', controller.editProduct);

module.exports = router;