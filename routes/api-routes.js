const router = require('express').Router();
const db = require('../models/modelObjects');


    // router.post('/api/workouts/bulk', ({ body }, res) => {
    //     db.Workout.insertMany(body)
    //     .then(dbWorkout => {
    //         res.json(dbWorkout);
    //     })
    //     .catch(err => {
    //         res.status(400).json(err);
    //     });
    // });

    // Route used to add exercises to the most recent workout plan
    // get most recent workout
    // then need to add an exercise to that workout 
    // separate route for each one?
    router.get('/api/workouts', (req, res) => {

        db.Workout.find({})
            // .populate('exercises')
            .then(dbWorkout => {
                console.log('dbWorkout:' + dbWorkout);
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });


    // Route use to add new exercises to a new workout plan.
    // this is a PUT method, but will be router.post in mongoose
    
    // router.post('/api/workouts', ({ body }, res) => {
    //     // create the workout
    //     db.Workout.create(body)
    //     // add workout id 
    //     .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    //         console.log(dbWorkout)
    //         res.json(dbWorkout);

    //     .then(dbWorkout => {
    //         res.json(dbWorkout);
    //     })
    //     .catch(err => {
    //         res.status(400).json(err);
    //     });
    // });

    // Route used to view the combined weight of multiple exercises from the past 7 workouts on the `stats` page.



    // route 
    // router.get('/api/workouts', (req, res) => {
    //     // db.Workout.find({})
    //     // .sort({ date: -1 })
    //     db.Workout.aggregate(
    //         [
    //             {
    //                 $addFields: {
    //                     totalduration: { $sum: "$exercises.duration" }
    //                 }
    //             }
    //         ]
    //     )
    //     .then(dbWorkout => {
    //         console.log(dbWorkout);
    //         res.json(dbWorkout);
    //     })
    //     .catch(err => {
    //         res.status(400).json(err);
    //     });
    // });

    // Route used to view the total duration of each workout from past 7 workouts on `stats.html` page
    router.get('/api/workouts/range', (req, res) => {
        db.Workout.aggregate(
            [
                {
                    $addFields: {
                        totalduration: { $sum: "$exercises.duration" }
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

    // router.put('/api/workouts/:id', (req, res) => {

    // })



module.exports = router;