const router = require('express').Router();
const db = require('../models/modelObjects');

    // Route used to add exercises to the most recent workout plan
    // get most recent workout/with total from all exercises
    // then need to add an exercise to that workout 
   
    router.get('/api/workouts', (req, res) => {
        // db.Workout.find({})
            // .populate('exercises')
        db.Workout.aggregate(
            [
                {
                    $addFields: {
                        totalDuration: { $sum: "$exercises.duration" }
                    }
                }
            ]
        ) 
        .then(dbWorkout => {
            // console.log('dbWorkout:' + dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    // route to add exercises to lastWorkout, or to new workout
    router.put('/api/workouts/:id', (req, res) => {
        db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
        .then(dbWorkout => {
            console.log(dbWorkout);
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    // route to add a new workout
    router.post('/api/workouts', ({ body }, res) => {
        // create the workout
        db.Workout.create(body)
        // send json response
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });

    // Route used to view the combined weight of multiple exercises from the past 7 workouts on the `stats` page.


    // Route used to view the total duration of each workout from past 7 days on `stats.html` page
    router.get('/api/workouts/range', (req, res) => {
        db.Workout.aggregate(
            [
                {
                    $addFields: {
                        totalDuration: { $sum: "$exercises.duration" }
                    }
                }
            ]
        )
            .then(dbWorkoutRange => {
                console.log(dbWorkoutRange);
                res.json(dbWorkoutRange);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    })

module.exports = router;