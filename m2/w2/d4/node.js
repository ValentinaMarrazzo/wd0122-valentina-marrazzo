let http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/plain'})//mostra come contenuto testuale/html
    res.end('Hello world')
})

server.listen(3000, '127.0.0.1')//genera l'indirizzo dove vedere il sito web

const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('test')
})
