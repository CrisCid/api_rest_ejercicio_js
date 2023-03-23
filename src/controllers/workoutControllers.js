const workoutService = require("../../src/services/workoutService");


const getAllWorkouts = (req, res)=>{
    const allWorkouts = workoutService.getAllWorkouts(req.params.workoutID);
    res.send({status: "OK", data:allWorkouts});
};

const getOneWorkouts = (req, res)=>{
    const Workouts = workoutService.getOneWorkouts(req.params.workoutID);
    res.send(`Get all workouts ${req.params.workoutID}`);
};

const createNewWorkouts = (req, res)=>{
    const {body} = req;
    if(
        !body.titulo ||
        !body.descripcion||
        !body.fecha_inicio||
        !body.fecha_fin||
        !body.estado||
        !body.periodo
    ){
        return;
    }
    const newWorkout = {
        titulo:body.titulo,
        descripcion:body.descripcion,
        fecha_inicio:body.fecha_inicio,
        fecha_fin:body.fecha_fin,
        estado:body.estado,
        periodo:body.periodo,
    }
    const createWorkouts = workoutService.createNewWorkouts(newWorkout);
    res.status(201).send({status: "OK",data:createNewWorkouts});
};

const updateOneWorkouts = (req, res)=>{
    const updateWorkouts = workoutService.updateOneWorkouts(req.params.workoutID);
    res.send(`Get all workouts ${req.params.workoutID}`);
};

const deleteOneWorkouts = (req, res)=>{
    workoutService.deleteOneWorkouts(req.params.workoutID);
    res.send(`Get all workouts ${req.params.workoutID}`);
};

module.exports ={
    getAllWorkouts,
    getOneWorkouts,
    createNewWorkouts,
    updateOneWorkouts,
    deleteOneWorkouts
};