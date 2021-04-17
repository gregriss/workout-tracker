const router = require('express').Router();
const db = require('../models');

// // was '/api/workouts'
// router.post('/api/new', ({ body }, res) => {
//     // create the workout
//     db.Workout.create(body)
//     // add workout id 
//     .then(({_id}) => db.User.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//         console.log(dbWorkout)
//         res.json(dbWorkout);
//     })
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });

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
    db.Workout.aggregate(
        [
            {
                $addFields: {
                    totalduration: { $sum: "$exercies.duration" }
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

router.put('/api/workouts/:id', (req, res) => {

})
module.exports = router;