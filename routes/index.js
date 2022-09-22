const express = require('express');
const router = express.Router();
const path = require('path');

// /admin/addproduct =>get
router.get('/addproduct', (req, res, next) => {
  console.log('In the middleware');
  res.sendFile(path.join(__dirname, '../', 'views', 'addproduct.html'))
  next();
});


// /admin/addproduct =>post
router.post('/addproduct', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

module.exports = router;
