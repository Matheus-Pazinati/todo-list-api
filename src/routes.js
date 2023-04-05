import { Database } from '../src/database.js'
import { randomUUID } from 'node:crypto'

const database = new Database()

export const routes = [
  {
    method: "GET",
    handler: (req, res) => {
      const tasks = database.select('tasks')
      return res.end(JSON.stringify(tasks))
    }
  },
  {
    method: "POST",
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
  }
]