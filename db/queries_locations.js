const knex = require("./database-connection");

module.exports = {
    list(locations){
      return knex('locations')
    },
    read(locations, id){
      return knex('locations').where('id', id).first()
    },
    create(locations, item){
      return knex('locations').insert(locations).returning('*')
        .then (record => record[0])
    },
    update(locations, id, location){
      return knex('locations').update(location).where('id', id).returning('*')
        .then(record => record[0])
    },
    delete(locations, id){
      return knex('locations').delete().where('id', id);
    }
};