const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => {

    res.send('Ok hehehe')

})

app.get('/showFS/:fs/', (req, res) => {

    let fs = lerFS(req.params.fs)

    console.log(fs.conteudo)

    res.send(fs.conteudo)

})

app.get('/createFS/:fs/:conteudo', (req, res) => {

    criarFS(req.params.fs, req.params.conteudo)

    res.redirect('/')

})

app.get('/pages/:page', (req, res) => {

    res.sendFile(`${__dirname}/assets/pages/${req.params.page}.html`)

})

app.listen(80, () => console.log('Rodando interface'))

function criarFS(name, conteudo){

    fs.createWriteStream(`${__dirname}/fs/${name}.json`).write(`{ "conteudo": "${conteudo}" } `)

}

function lerFS(name){

    let arq = JSON.parse(fs.readFileSync(`${__dirname}/fs/${name}.json`))

    return arq

}