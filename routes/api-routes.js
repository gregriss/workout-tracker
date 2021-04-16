const router = require('express').Router();
// const Workout = require('../models/workout');
const db = require('../models');

router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });

});

// router.post('/api/workouts/bulk', ({ body }, res) => {
//     db.Workout.insertMany(body)
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });

router.get('/api/workouts', (req, res) => {
    // db.Workout.find({})
    // .sort({ date: -1 })
    db.Workout.aggregate(
        [
            {
                $addFields: {
                    totalduration: { $sum: "$exercises.duration" }
                }
            }
        ]
    )
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.aggregate([{}])
    .then(dbWorkoutRange => {
        console.log(dbWorkoutRange);
        res.json(dbWorkoutRange);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

router.put('/api/workouts/:id', (req, res) => {

})
module.exports = router;