const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.use(express.static(__dirname + '/assets/pages'))

app.get('/', (req, res) => {

    res.send('Ok hehehe')

})

app.get('/localhost', (req, res) => {

  res.sendFile(__dirname + '/assets/pages/localhost.html')

})

app.get('/banco/:sticker', function (req, res) {
  res.sendFile(path.join(__dirname + `/sticker/${req.params.sticker}.webp`))
})

app.get('/ws', (req, res) => {

  res.sendFile(__dirname + '/assets/pages/websocket.html')

})

const server = app.listen(80, () => console.log('Rodando interface'))

const WebSocket = require('ws');

const wss = new WebSocket.Server({ server: server, path: '/ws' }) //

wss.on('connection', (ws) => {

  console.log('Nova conexão WebSocket estabelecida')

  ws.on('message', (event) => {

    console.log('EVENT:', event)

  })

});
