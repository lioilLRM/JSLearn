addEventListener('message', function(event) {
  console.log(`event：`, event)
  let total = 0
  const num = event.data
  for (let i = 0; i < num; i++) {
    total += i
  }
  postMessage(total)
})
