import { Router } from 'express'
import * as taskController from '../controllers/tasks.js'

const tasksRoutes = Router()

tasksRoutes.get('/tasks', taskController.getAllTasks)
tasksRoutes.post('/tasks', taskController.addTask)
tasksRoutes.delete('/tasks/:id', taskController.deleteTask)

export { tasksRoutes }
