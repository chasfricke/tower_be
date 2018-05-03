const express = require('express')
const app = express()
const queries = require('../db/queries_dropoff_details')

app.get('/', (request, response, next) => {
    queries.list('dropoff_details').catch(next)
  })
  
  app.get('/dropoff_details', (request, response, next) => {
    queries
      .list('dropoff_details')
      .then(dropoff_details => {
        response.json({ dropoff_details })
      })
      .catch(next)
  })
  
  app.get('/dropoff_details/:id', (request, response, next) => {
    queries
      .read('dropoff_details', request.params.id)
      .then(dropoff_details => {
        dropoff_details ? response.json({ dropoff_details }) : response.sendStatus(404)
      })
      .catch(next)
  })
  
  app.post('/dropoff_details', (request, response, next) => {
    queries
      .create('dropoff_details', request.body)
      .then(dropoff_details => {
        response.status(201).json({ dropoff_details: dropoff_details })
      })
      .catch(next)
  })
  
  app.delete('/dropoff_details/:id', (request, response, next) => {
    queries
      .delete('dropoff_details', request.params.id)
      .then(() => {
        response.sendStatus(204)
      })
      .catch(next)
  })
  
  app.put('/dropoff_details/:id', (request, response, next) => {
    queries
      .update('dropoff_details', request.params.id, request.body)
      .then(dropoff_details => {
        response.json({ dropoff_details: dropoff_details[0] })
      })
      .catch(next)
  })
  
  module.exports = app;
