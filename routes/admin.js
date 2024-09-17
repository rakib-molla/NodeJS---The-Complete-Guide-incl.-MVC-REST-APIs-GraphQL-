const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const adminController = require('../controllers/admin');


// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/products => get
router.get('/products', adminController.getProducts);


module.exports = router;

