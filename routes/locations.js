const express = require('express')
const app = express()
const queries = require('../db/queries_locations')

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
  
  module.exports = app;
