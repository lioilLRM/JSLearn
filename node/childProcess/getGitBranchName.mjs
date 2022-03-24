import { exec } from 'child_process'

exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
  console.log(`err, stdout：`, stdout, err, stderr)
})
