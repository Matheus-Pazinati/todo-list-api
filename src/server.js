import http from 'node:http'
import { json } from './middlewares/json.js'
import { Database } from '../src/database.js'


const port = 3333

const database = new Database()

const server = http.createServer( async (req, res) => {
  
  await json(req, res)

  if (req.method === "GET") {
    const tasks = database.select('tasks')
    res.end(JSON.stringify(tasks))
  }
})

server.listen(port)