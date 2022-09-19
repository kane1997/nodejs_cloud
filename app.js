const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Konecer!')
})


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/addproduct', (req, res, next) => {
  console.log('In the middleware');
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  next();
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})
// app.use('/addorder',(req,res,next)=>{
//   console.log('In another middleware');
//   res.send("<h1>The Add Order Page</h1>");
//   next();
// })

// app.use('/', (req, res, next) => {
//   // console.log('In home!');
//   res.status(300).send('<h1>Hello from Express!</h1>');
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})