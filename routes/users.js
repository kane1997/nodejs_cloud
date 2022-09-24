const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path')
const indexRoutes = require('./index')

/* GET users listing. */
router.get('/', (req, res, next) => {
  const products = indexRoutes.products
  //res.sendFile(path.join(rootDir,'views', 'shop.html'));
  res.render('shop', {prods:products, docTitle: 'Shopify'})
});

module.exports = router;

