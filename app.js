const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Konecer!')
})


// app.use((req,res,next)=>{
//     console.log('In the middleware');
//     next();
// })

// app.use((req,res,next)=>{
//     console.log('In another middleware');
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})