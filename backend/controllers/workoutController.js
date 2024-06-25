const Workout = require("../models/Workout")
const mongoose = require("mongoose")

// get all workouts
const getWorkouts = async (req, res) => {
    try {
        const user_id = req.user._id;
        const workouts = await Workout.find({user_id}).sort({ createdAt: -1 });
        res.status(200).json(workouts)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// get single workouts
const getWorkout = async (req, res) => {

    const { id } = req.params

    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).json({ error: "no such workout" })
    }

    try {
        const workout = await Workout.find({ _id: id });
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// create workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    let emptyFields = [];

    if(!title){
        emptyFields.push("title")
    }
    if(!load){
        emptyFields.push("load")
    }
    if(!reps){
        emptyFields.push("reps")
    }
    console.log(emptyFields)

    if(emptyFields.length){
        return res.status(400).json({error:"please fill all the fields", emptyFields})
    }

    try {
        const user_id = req.user._id;
        const workout = await Workout.create({ title, load, reps, user_id })
        return res.status(200).json(workout)
    }
    catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

// delete workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).json({ error: "no such workout" })
    }

    try {
        const workout = await Workout.findOneAndDelete({ _id: id })
        res.status(200).json(workout)
    } 
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// update workout
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).json({ error: "no such workout" })
    }

    try {
        const workout = await Workout.findOneAndUpdate({_id: id},{
            ...req.body
        })
        res.status(200).json(workout)
    } 
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
}