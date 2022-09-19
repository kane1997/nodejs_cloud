const express = require('express')
const app = express()
<<<<<<< HEAD
const port = 3001
=======
const bodyParser = require('body-parser');
const port = 3000
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

>>>>>>> 6e0f2333277d9fe7ce4d27769e63a1eda22d8e71

// app.get('/', (req, res) => {
//   res.send('Hello Konecer!')
// })


app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
})

<<<<<<< HEAD
app.use((req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello from Express!</h1>')
})
=======

app.use(bodyParser.urlencoded({ extended: false }));

app.use(indexRoutes);

app.use(usersRoutes);
// app.use('/addorder',(req,res,next)=>{
//   console.log('In another middleware');
//   res.send("<h1>The Add Order Page</h1>");
//   next();
// })

// app.use('/', (req, res, next) => {
//   // console.log('In home!');
//   res.status(300).send('<h1>Hello from Express!</h1>');
// });
>>>>>>> 6e0f2333277d9fe7ce4d27769e63a1eda22d8e71

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})