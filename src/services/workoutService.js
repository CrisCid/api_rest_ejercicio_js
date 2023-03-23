const Workouts = require("../../src/database/Workout");
const {v4: uuid} =require("uuid");
const getAllWorkouts = () =>{
    const allWorkouts = Workouts.getAllWorkouts();
    return allWorkouts;
};
const getOneWorkouts = () =>{
    return;
};
const createNewWorkouts = (newWorkout) =>{
    const workoutToInsert={
        ...newWorkout,
        id: uuid(),
    }
    const createdWorkouts = Workouts.createNewWorkouts(workoutToInsert);
    return createdWorkouts;
};
const updateOneWorkouts = () =>{

     
};
const deleteOneWorkouts = () =>{
    return;
};

module.exports ={
    getAllWorkouts,
    getOneWorkouts,
    createNewWorkouts,
    updateOneWorkouts,
    deleteOneWorkouts
};