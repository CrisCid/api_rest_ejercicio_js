const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
    return DB.workouts;
};
const createNewWorkouts = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex(
        (workouts) => workouts.name === newWorkout.name);
    if (isAlreadyAdded) {
        return;
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
}

module.exports = { getAllWorkouts, createNewWorkouts };