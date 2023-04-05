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
  }
]