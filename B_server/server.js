// required packages
require('dotenv').config()
const express = require('express')
const mealRoutes = require('./routes/meals')

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
app.use('/api/meals', mealRoutes)

// listening to requests
app.listen(process.env.PORT, () => {
  console.log('Server is listening on port 3000!')
});