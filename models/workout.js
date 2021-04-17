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
        type: Schema.Types.ObjectId,

    }]
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