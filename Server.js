const express = require('express')
const app = express();

app.listen('8080',() => {
    console.log('Listening on 8080...')
})

app.get('/', (req,res) => {
    res.sendFile('/index.html')
})