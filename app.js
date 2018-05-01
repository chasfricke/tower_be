const express = require('express')
const app = express()
const cors = require('cors')
const queries = require('./db/queries_locations')
const bodyParser = require('body-parser')
const database = require('./db/database-connection')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (request, response, next) => {
  queries.list('locations').catch(next)
})

app.get('/locations', (request, response, next) => {
  queries
    .list('locations')
    .then(locations => {
      response.json({ locations })
    })
    .catch(next)
})

app.get('/locations/:id', (request, response, next) => {
  queries
    .read('locations', request.params.id)
    .then(locations => {
      locations ? response.json({ locations }) : response.sendStatus(404)
    })
    .catch(next)
})

app.post('/locations', (request, response, next) => {
  queries
    .create('locations', request.body)
    .then(locations => {
      response.status(201).json({ locations: locations })
    })
    .catch(next)
})

app.delete('/locations/:id', (request, response, next) => {
  queries
    .delete('locations', request.params.id)
    .then(() => {
      response.sendStatus(204)
    })
    .catch(next)
})

app.put('/locations/:id', (request, response, next) => {
  queries
    .update('locations', request.params.id, request.body)
    .then(locations => {
      response.json({ locations: locations[0] })
    })
    .catch(next)
})

app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  const url = req.originalUrl
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    // Don't log less important (automatic) browser requests
    console.error('[404: Requested file not found] ', url)
  }
  res.status(404).send({error: 'Url not found', status: 404, url})
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}


module.exports = app
