const express = require('express');
const v1WorkoutRoutesRouter = require ("./V1/routes/workoutRoutes");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/workoutRoutes", v1WorkoutRoutesRouter); 

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) });