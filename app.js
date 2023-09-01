import express from 'express'
import { tasksRoutes } from './routes/tasks.js'

export const app = express()

app.use(express.json())
app.use(tasksRoutes)

const PORT = 1234

export const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
