const express = require('express')

const router = express.Router()

// GET all meals
router.get('/', (req, res) => {
    res.json({mssg: 'GET all meals'})
})

// GET a single meal
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single meal'})
})

// POST a new reminder
router.post('/', (req,res) => {
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