const express = require("express")
const router = express.Router()

const Workout = require('../models/Workout');
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
} = require("../controllers/workoutController");

//require auth for all workout routes
const requireAuth = require("../middleware/requireAuth")

router.use(requireAuth)

router.get("/", getWorkouts)

router.get("/:id", getWorkout)

router.post("/", createWorkout)

router.delete("/:id", deleteWorkout)

router.patch("/:id", updateWorkout)

module.exports = router