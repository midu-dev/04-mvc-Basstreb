import { TaskModel } from '../models/task.js'

export const getAllTasks = async (req, res) => {
  const tasks = await TaskModel.getAllTasks()
  res.json(tasks)
}

export const addTask = async (req, res) => {
  try {
    const { description } = req.body
    if (!description) {
      throw new Error('Description is required')
    }
    const task = await TaskModel.addTask(description)
    res.json(task)
  } catch (error) {
    res.status(error.status || 400).json({ message: error.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      throw new Error('ID is required')
    }
    await TaskModel.deleteTask(id)
    res.json({ message: 'Deleted successfully' })
  } catch (error) {
    res.status(error.status || 400).json({ message: error.message })
  }
}
