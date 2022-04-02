const express = require('express')
const app = express()

app.get('/api/v1/sabado/', function (req, res) {
  res.send('Hello soy la peticion GET')
})

app.listen(3000, function(){
    console.log("servidor encendido")
})