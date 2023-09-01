import { describe, it, after } from 'node:test'
import { equal, deepStrictEqual } from 'node:assert/strict'
import request from 'supertest'

import { app, server } from '../app.js'

describe('Task Routes', () => {
  let taskId = null

  after(() => {
    server.close()
  })

  it('should add a new task', async () => {
    const response = await request(app)
      .post('/tasks')
      .send({
        description: 'Test task'
      })

    equal(response.statusCode, 200)
    equal(response.body.description, 'Test task')
    taskId = response.body.id
  })

  it('should fetch all tasks', async () => {
    const response = await request(app).get('/tasks')

    equal(response.statusCode, 200)
    equal(Array.isArray(response.body), true)
    equal(response.body.length, 1)
    equal(response.body[0].description, 'Test task')
  })

  it('should delete a task', async () => {
    const response = await request(app).delete(`/tasks/${taskId}`)

    equal(response.statusCode, 200)
    equal(response.body.message, 'Deleted successfully')
  })

  it('should have no tasks after deletion', async () => {
    const response = await request(app).get('/tasks')

    equal(response.statusCode, 200)
    deepStrictEqual(response.body, [])
  })
})
