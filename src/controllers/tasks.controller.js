const { v4 } = require('uuid')
const { getConnection: db } = require('../database')

const getTasks = (req, res) => {
  const tasks = db()
    .get('tasks')
    .value()

  return res.json(tasks)
}

const createTask = (req, res) => {
  const { title, description } = req.body
  const newTask = {
    id: v4(),
    title,
    description
  }

  db().get('tasks').push(newTask).write()
  
  res.json(newTask)
}

const getTask = (req, res) => {
  const task = db()
    .get('tasks')
    .find({ id: req.params.id })
    .value();
  res.json(task);
};

const updateTask = async (req, res) => {
  const result = await db()
    .get('tasks')
    .find({ id: req.params.id })
    .assign(req.body)
    .write();
  res.json(result);
};

const deleteTask = async (req, res) => {
  const result = await db()
    .get('tasks')
    .remove({ id: req.params.id })
    .write();
  res.json(result);
};

module.exports = {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}
