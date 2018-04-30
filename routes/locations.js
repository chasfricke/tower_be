// const app = require("express").Router();
// const queries = require("../db/queries_locations");


// app.get("/", (request, response, next) => {
//     queries.list().then(data => {
//       console.log('data', data);
//         response.json(data);
//     }).catch(next);
// });

// app.get("/:id", (request, response, next) => {
//     queries.read(request.params.id).then(locations => {
//         locations
//             ? response.json({locations})
//             : response.sendStatus(404)
//     }).catch(next);
// });

// app.post("/", (request, response, next) => {
//     queries.create(request.body).then(locations => {
//         response.status(201).json({locations});
//     }).catch(next);
// });

// app.delete("/:id", (request, response, next) => {
//     queries.delete(request.params.id).then(() => {
//         response.sendStatus(204);
//     }).catch(next);
// });

// app.put("/:id", (request, response, next) => {
//     queries.update(request.params.id, request.body).then(locations => {
//         response.json({locations});
//     }).catch(next);
// });

// module.exports = app
