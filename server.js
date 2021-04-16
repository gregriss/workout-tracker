const express = require('express');
const mongoose = require('mongoose');
const db = require('./models');
const logger = require('morgan');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(logger('dev'));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

const databaseUrl = 'fitness';
const collections = ['workouts'];

// const db = mongojs(databaseUrl, collections);
// db.on('error', error => {
//     console.log("Database Error:", error);
// });


app.listen(PORT, function() {
    console.log('App listening at http://localhost:' + PORT);
})