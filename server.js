const express = require('express');
const mongoose = require('mongoose');
const db = require('./models');
const logger = require('morgan');
const path = require('path');
const MONGO = process.env.MONGO_ATLAS;
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

// if(process.env.MONGO_ATLAS.length > 0){
//     mongoose.connect(process.env.MONGO_ATLAS, {
//       useNewUrlParser: true,
//       useFindAndModify: false
//     })
//   } else {
  
    mongoose.connect("mongodb://localhost/workout", {
      useNewUrlParser: true,
      useFindAndModify: false
    });
//   }


app.listen(PORT, function() {
    console.log('App listening at http://localhost:' + PORT);
})