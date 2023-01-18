const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.get('/', (req, res) => {

    res.send('Ok hehehe')

})

app.get('/banco/:sticker', function (req, res) {
  res.sendFile(path.join(__dirname + `/sticker/${req.params.sticker}.webp`))
})

app.listen(80, () => console.log('Rodando interface'))
