import { Database } from '../src/database.js'
import { randomUUID } from 'node:crypto'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const tasks = database.select('tasks')
      return res.end(JSON.stringify(tasks))
    }
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.body
      if (title && description) {
        const task = {
          id: randomUUID(),
          title,
          description,
          created_at: new Date(),
          updated_at: new Date(),
          completed_at: null
        }
        database.insert('tasks', task)
        return res.writeHead(201).end()
      } else {
        return res.writeHead(422).end()
      }
    }
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params
      const hasThisTaskOnDatabase = database.hasTask('tasks', id)
      if (hasThisTaskOnDatabase) {
        database.delete('tasks', id)
        return res.writeHead(204).end()
      } else {
        return res.writeHead(404).end()
      }

    }
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params
      if (req.body) {
        database.update('tasks', id, req.body)
        return res.writeHead(201).end()
      } else {
        return res.writeHead(422).end()
      }
    }
  }

]