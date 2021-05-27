var express = require('express');
var router = express.Router();
var controller = require('../controllers/category');

router.get('/', controller.getCategories);
router.get('/:id', controller.getCategoryById);

router.post('/add', controller.addCategory);

router.delete('/delete/:id', controller.deleteCategory);

router.put('/edit/:id', controller.editCategory);

module.exports = router;