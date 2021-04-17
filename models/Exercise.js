const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    workouts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Workout"
        }
    ]
});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;

// name: String,
// duration: Number,
// distance: Number,
// weight: Number,
// reps: Number,
// sets: Number,
// trim: true,
// required: "Enter Exercise Name"