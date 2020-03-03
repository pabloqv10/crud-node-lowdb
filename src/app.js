const express = require('express')
const morgan = require('morgan')
const tasksRouter = require('./routes/tasks.routes')

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use(tasksRouter)

module.exports = app
