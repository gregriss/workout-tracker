const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
});

// const Exercise = mongoose.model('Exercise', ExerciseSchema);

// module.exports = Exercise;


// trim: true,
// required: "Enter Exercise Name"

// should I use Boolean, like "isCardio"? 