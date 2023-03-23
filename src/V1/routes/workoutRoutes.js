const express = require('express');
const router = express.Router();
const workoutControllers = require("../../controllers/workoutControllers");
router
    .get('/', workoutControllers.getAllWorkouts)
    .get('/:workoutID', workoutControllers.getOneWorkouts)
    .post('/',workoutControllers.createNewWorkouts)
    .patch('/:workoutID', workoutControllers.updateOneWorkouts)
    .delete('/:workoutID',workoutControllers.deleteOneWorkouts)
module.exports = router;