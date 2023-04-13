const mongoose = require('mongoose')
const Reminder = require("../models/reminderModel")


// get all reminders
const getReminders = async (req, res) => {
    const reminders = await Reminder.find({}).sort({createdAt: -1})

    res.status(200).json(reminders)
}

// get single reminder
const getSingleReminder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid ID'})
    }

    const reminder = await Reminder.findById(id)

    if (!reminder) {
        return res.status(404).json({error: 'No such reminder'})
    }

    res.status(200).json(reminder)
}

// create new reminder
const createReminder = async (req, res) => {
    const {title, load, reps} = req.body
    try {
        // add doc to db
        const reminder = await Reminder.create({title, load, reps})
        res.status(200).json(reminder)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a reminder
const deleteReminder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid ID"})
    }

    const reminder = await Reminder.findOneAndDelete({_id: id})

    if (!reminder) {
        return res.status(404).json({error: "No such reminder"})
    }

    res.status(200).json(reminder)
}

// update a reminder
const updateReminder = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid ID"})
    }

    const reminder = await Reminder.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!reminder) {
        return res.status(404).json({error: "No such reminder"})
    }

    res.status(200).json(reminder)
}

// exporting functions

module.exports = {
    getReminders,
    getSingleReminder,
    createReminder,
    deleteReminder,
    updateReminder
}