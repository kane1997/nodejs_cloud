const express = require('express');
const router = express.Router();
const path = require('path');

// /addproduct =>get
router.get('/addproduct', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'addproduct.html'))
  //next();   
});


// /admin/addproduct =>post
router.post('/addproduct', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

module.exports = router;
