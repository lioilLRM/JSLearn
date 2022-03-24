import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const http = require('http')
const url = require('url')

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Origin, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS')
  res.setHeader('X-Powered-By', 'nodejs')

  res.writeHead(200, { 'Content-Type': 'application/json' })

  // res.end(JSON.stringify({ name: 'hello world', age: 12 }))
}).listen(8888)

console.log('Server running at http://localhost:8888')
