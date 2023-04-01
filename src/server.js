import http from 'node:http'

const port = 3333

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello World')
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})