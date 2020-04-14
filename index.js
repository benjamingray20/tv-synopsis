const express = require('express')
const showdata = require('./showdata')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/season/:number', (request, response) => {
  const season = showdata.seasons.find((season) => season.number === parseInt(request.params.number))

  return response.render('season', { season })
})

app.all('*', (request, respone) => {
  return respone.sendStatus(404)
})

app.listen(1111, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1111....')
})
