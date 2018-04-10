'use strict'

require('zone.js/dist/zone-node');

const express = require('express')
    , app = express()
    , path = require('path')


app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
})

const port = 4000;

app.listen(port, () => console.log(`Connected to port ${port}`))