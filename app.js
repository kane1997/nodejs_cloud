const express = require('express')
const swaggerJsdoc = require('swagger-jsdoc');
const app = express()
const bodyParser = require('body-parser');
const port = 3000
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const path = require('path');
const swaggerUI = require('swagger-ui-express');
//const { engine } = require('express-handlebars');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Customer API',
      description: "Customer API Information",
      contact: {
        name:'Amazing Developer'
      },
      servers: ['http://localhost:3000']
    }
  },
  //['.routes/*.js']
  apis:['./routes/*.js']
}
const swaggerDocs = swaggerJsdoc(swaggerOptions);
// app.get('/', (req, res) => {
//   res.send('<h1>Hello Konecer!</h1>')
// })
//app.engine('hbs', engine());
app.set('view engine', 'pug');
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoutes.routes);
app.use(usersRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
// app.use('/addorder',(req,res,next)=>{
//   console.log('In another middleware');
//   res.send("<h1>The Add Order Page</h1>");
//   next();
// })

// app.use('/', (req, res, next) => {
//   // console.log('In home!');
//   res.status(300).send('<h1>Hello from Express!</h1>');
// });
app.use( (req,res)=>{
  res.status(404).render('404');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

