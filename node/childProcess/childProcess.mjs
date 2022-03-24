import { spawn } from 'child_process'
import { resolve } from 'path'

console.log(`path：`, resolve())

const ls = spawn('ls', ['-al'])

ls.stdout.on('data', (data) => {
  console.log(`right data：`, data)
})

ls.stderr.on('data', (data) => {
  console.log(`err data：`, data)
})

ls.on('close', (code) => {
  console.log(`exit width code：`, code)
})
