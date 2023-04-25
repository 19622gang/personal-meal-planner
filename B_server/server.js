// required packages
require('dotenv').config()
const express = require('express')
const reminderRoutes = require('./routes/reminder')
const mongoose = require("mongoose")

// Initializing express app
const app = express()

// middleware
app.use(express.json()) //access request body

app.use((req, res, next) =>{
  console.log(req.path, req.method)
  next()
})

// routing
app.get('/', (req, res) => {
  res.json({mssg: 'Hello, world!'})
});
app.use('/api/reminders', reminderRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    // listening to requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to DB & Server is listening on port 4000!')
    });
  })
  .catch((error) => {
    console.log(error)
  })