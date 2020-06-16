var express = require('express');
var router = express.Router();

const productOpt2Controller = require ('../controllers/productOpt2Controller');
/* GET home page. */
router.get('/', productOpt2Controller.raiz)

module.exports = router;
