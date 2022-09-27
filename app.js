const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const expressHbs = require('express-handlebars')
const path = require('path');


// app.get('/', (req, res) => {
//   res.send('<h1>Hello Konecer!</h1>')
// })
app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoutes.routes);

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
app.use( (req,res,next)=>{
  res.status(404).render('404');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

