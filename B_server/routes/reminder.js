const express = require('express')
const Reminder = require("../models/reminderModel")

const router = express.Router()

// GET all reminders
router.get('/', (req, res) => {
    res.json({mssg: 'GET all reminders'})
})

// GET a single reminder
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single reminder'})
})

// POST a new reminder
router.post('/', async (req,res) => {
    const {title, load, reps} = req.body
    try {
        const reminder = await Reminder.create({title, load, reps})
        res.status(200).json(reminder)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({mssg: 'POST a new reminder'})
})

// DELETE a reminder
router.delete('/:id', (req,res) => {
    res.json({mssg: 'DELETE a reminder'})
})

// UPDATE a reminder
router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE a reminder'})
})


module.exports = router