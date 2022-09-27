const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path')
const products = [];

// /addproduct =>get
router.get('/addproduct', (req, res, next) => {
  res.render('addproduct', { pageTitle: 'Add product' });
  //res.status(200).json({ 'success': '1' });
  //next();   
});


// /admin/addproduct =>post
router.post('/addproduct', (req, res, next) => {
  products.push({title:req.body.title})
  res.redirect('/');
})

exports.routes = router;

exports.products=products