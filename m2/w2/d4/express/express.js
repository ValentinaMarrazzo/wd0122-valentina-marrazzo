const express = require('express')
const path = require('path')//con path si può navigare nelle cartelle e selezionare un file

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/contatti', (req, res) => {
    res.send('contatti')
})


app.listen(3000, () => {
    console.log('server running at http://127.0.01:3000')
})