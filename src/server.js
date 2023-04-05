import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from '../src/routes.js'

const port = 3333

const server = http.createServer( async (req, res) => {
  
  await json(req, res)

  const route = routes.find((route) => {
    return route.method === req.method
  })

  if (route) {
    return route.handler(req, res)
  }
  
})

server.listen(port)