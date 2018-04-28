// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");

// app.use(cors({origin: true}))
// app.use(bodyParser.json());

// app.use("/locations", require('./routes/locations'))

// app.use((request, response) => {
//     response.status(404).send({message: 'url not found'});
// });

// app.use((err, req, res, next) => {
//     console.error('ERROR:', err);
//     res.status(500).send({message: err.message, stack: err.stack})
// });

// module.exports = app;

const express = require('express')
const app = express()
const cors = require('cors')
const queries = require('./db/queries_locations')
const bodyParser = require('body-parser')
const database = require('./db/database-connection')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (request, response) => {
  queries.list('locations').catch(console.error)
})

app.get('/locations', (request, response) => {
  queries
    .list('locations')
    .then(locations => {
      response.json({ locations })
    })
    .catch(console.error)
})

app.get('/locations/:id', (request, response) => {
  queries
    .read('locations', request.params.id)
    .then(locations => {
      locations ? response.json({ locations }) : response.sendStatus(404)
    })
    .catch(console.error)
})

app.post('/locations', (request, response) => {
  queries
    .create('locations', request.body)
    .then(locations => {
      response.status(201).json({ locations: locations })
    })
    .catch(console.error)
})

app.delete('/locations/:id', (request, response) => {
  queries
    .delete('locations', request.params.id)
    .then(() => {
      response.sendStatus(204)
    })
    .catch(console.error)
})

app.put('/locations/:id', (request, response) => {
  queries
    .update('locations', request.params.id, request.body)
    .then(locations => {
      response.json({ locations: locations[0] })
    })
    .catch(console.error)
})

app.use((request, response) => {
  response.send(404)
})

module.exports = app
