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

const Pusher = require("pusher");

app.get('/ws', (req, res) => {

  let pusher = new Pusher({
    appId: "1584150",
    key: "00301fed21bcaf1b2def",
    secret: "99a3d8e948558d607209",
    cluster: "sa1",
    useTLS: true
  });

  console.log('Rota ws')

  // let channel = pusher.subscribe('my-channel');

  // Bind a callback function to an event within the subscribed channel

  pusher.trigger("my-channel", "my-event", {
    message: "hello "
  });

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
