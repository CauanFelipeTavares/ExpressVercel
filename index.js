const express = require('express')
const app = express()

app.get('/', (req, res) => {

    res.send('Ok hehehe')

})

app.listen(process.env.PORT || 8080, () => console.log('Rodando interface'))