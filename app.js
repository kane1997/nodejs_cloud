const express = require('express')
const app = express()
const port = 3001

// app.get('/', (req, res) => {
//   res.send('Hello Konecer!')
// })


app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
})

app.use((req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})