const knex = require('./database-connection');

module.exports = {
    list(dropoff_details){
      return knex('dropoff_details')
    },
    read(dropoff_details, id){
      return knex('dropoff_details').where('id', id).first()
    },
    create(dropoff_details, item){
      return knex('dropoff_details').insert(item).returning('*')
        .then (record => record[0])
    },
    update(dropoff_details, id, location){
      return knex('dropoff_details').update(location).where('id', id).returning('*')
        .then(record => record[0])
    },
    delete(dropoff_details, id){
      return knex('dropoff_details').delete().where('id', id);
    }
};