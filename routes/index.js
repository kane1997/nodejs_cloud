const express = require('express');
const router = express.Router();


// /admin/addproduct =>get
router.get('/addproduct', (req, res, next) => {
  console.log('In the middleware');
  res.send('<form action="/admin/addproduct" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  next();
});


// /admin/addproduct =>post
router.post('/addproduct', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

module.exports = router;
