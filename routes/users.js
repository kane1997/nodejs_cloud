const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  console.log('In home!');
  res.status(300).send('<h1>Hello from Express!</h1>');
});

module.exports = router;
