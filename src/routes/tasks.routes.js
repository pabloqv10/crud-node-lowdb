const { Router } = require('express')
const { getTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks.controller')

const router = Router()

router.get('/tasks', getTasks)
router.post('/tasks', createTask)
router.get('/tasks/:id', getTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

module.exports = router
