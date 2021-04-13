const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// look up how to add array/list to schema
const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for this Workout"
    },
    exercises: {
        type: String,
        trim: true,
        required: "Enter names of exercises"
    },
    length: {
        type: Number,
        required: "Enter a length of time"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;