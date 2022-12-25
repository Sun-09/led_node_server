const express = require('express')  
const path = require('path')
const app = express()
const port = process.env.PORT || 3000;
let value;

app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')))
//app.use('/about', express.static(path.join(__dirname, 'views')))




//http://127.0.0.1/about
app.post('/button', (req, res) => {
    value = req.body
    console.log(req.body)
    res.send({
      "status": true
    }) //html css js
    return value;
})



app.get('/esp32', (req,res) =>{
  res.send(value)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})