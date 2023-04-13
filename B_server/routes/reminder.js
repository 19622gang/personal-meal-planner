const express = require('express')
const Reminder = require("../models/reminderModel")
const {
    getReminders,
    getSingleReminder,
    createReminder,
    deleteReminder,
    updateReminder
} = require('../controllers/reminderController')

const router = express.Router()

// GET all reminders
router.get('/', getReminders)

// GET a single reminder
router.get('/:id', getSingleReminder)

// POST a new reminder
router.post('/', createReminder)

// DELETE a reminder
router.delete('/:id', deleteReminder)

// UPDATE a reminder
router.patch('/:id', updateReminder)


module.exports = router