const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// look up how to add array/list to schema
const WorkoutSchema = new Schema(
    {
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
        type: String,
        name: String,
        duration: Number,
        distance: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        trim: true,
        required: "Enter Exercise Name"
    }],
    length: {
        type: Number,
        required: "Enter a length of time"
    }

});

WorkoutSchema.methods.newMethod = function(){
    // create method here
};

WorkoutSchema.methods.lastUpdatedDate = function(){
    // make second method here
    this.lastUpdated = Date.now();
    return this.lastUpdated;
};

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;