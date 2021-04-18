const express = require('express');
const mongoose = require('mongoose');
const db = require('./models/modelObjects.js');
const logger = require('morgan');

// const MONGO = process.env.MONGO_ATLAS;
const PORT = process.env.PORT || 8080;
const app = express();

app.use(logger('dev'));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));

// const databaseUrl = 'workout';
// const collections = ['workouts'];

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
  
    mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost/workout', 
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }
      );
//   }


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}.`);
});