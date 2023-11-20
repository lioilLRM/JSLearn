import fetch from 'node-fetch'

const url = 'https://api.frdic.com/api/open/v1/studylist/words/0?language=en&category_id=0&page=1&page_size=2'
fetch(url, { method: 'GET' })
  .then(response => {
    console.log(response)
    console.log(response)
  })
  .catch(error => {
    console.log(error)
  })
