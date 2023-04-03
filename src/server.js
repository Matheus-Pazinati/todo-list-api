import http from 'node:http'
import { json } from './middlewares/json.js'
import fs from 'node:fs/promises'

const port = 3333

const databasePath = new URL('../db.json', import.meta.url)

const server = http.createServer( async (req, res) => {
  
  await json(req, res)

  if (req.method === "GET") {
    const tasks = await fs.readFile(databasePath, 'utf-8')
    res.statusCode = 200
    return res.end(tasks)
  }
})

server.listen(port)