const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
    console.log('App listening at http://localhost:' + PORT);
})