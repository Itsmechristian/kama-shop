'use strict'

require('zone.js/dist/zone-node');

const express = require('express')
    , app = express()
    , path = require('path')


app.use(express.static(path.join(__dirname, 'dist')))


function angularRoute(req , res) {
  res.render('index', { req, res } );
}

app.get('/', angularRoute);
app.get('*', angularRoute);


const port = 4000;

app.listen(port, () => console.log(`Connected to port ${port}`))