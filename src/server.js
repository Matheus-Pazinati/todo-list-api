import http from 'node:http'
import {} from './middlewares/json.js'

const port = 3333

const server = http.createServer( async (req, res) => {
  
  await json(req, res)

  res.statusCode = 200
  res.end('Hello World')
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})