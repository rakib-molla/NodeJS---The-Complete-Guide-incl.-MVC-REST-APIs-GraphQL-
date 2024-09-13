const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const adminData = require('./admin');


router.get('/', (req, res, next)=>{
   const products = adminData?.product;
   res.render('shop',{products: products, docTitle:'Shop'});
})


module.exports = router;