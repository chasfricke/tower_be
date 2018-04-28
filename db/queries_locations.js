const knex = require("./database-connection");

module.exports = {
    list(){
      return knex('locations')
    },
    read(id){
      return knex('locations').where('id', id).first()
    },
    create(locations){
      return knex('locations').insert(locations).returning('*')
        .then (record => record[0])
    },
    update(id, locations){
      return knex('locations').update(locations).where('id', id).returning('*')
        .then(record => record[0])
    },
    delete(id){
      return knex('locations').delete().where('id', id);
    }
};