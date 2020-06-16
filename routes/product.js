var express = require('express');
var router = express.Router();

const productController = require ('../controllers/productController');
/* GET home page. */
router.get('/', productController.raiz)

router.get('/detail/:id',productController.detail)

module.exports = router;
