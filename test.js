const url = 'wss://express-vercel-five-fawn.vercel.app/ws'

const WebSocket = require('ws');

const wss = new WebSocket(url).addListener('close', (ev) => console.log(ev))

// wss.addEventListener('close', ((ev) => console.log(ev)))