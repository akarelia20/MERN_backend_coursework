const express = require('express')
const mongoose = require('mongoose')

const app = express()
require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// This has to be at the end and before the app.listen othewise post requests will not show any req.body data
require('./routes/joke.routes')(app)

app.listen(8000, () =>
  console.log('You have successfully connected to port 8000')
)
