exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dropoff_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('dropoff_details').insert([
        {id: 1, foreign_key: 1, staff_name: 'Chas Fricke', comment: 'Left 1 poster and pinned 5 postcards to community board located in back of business.', visit_date: '2017-01-14'},
        {id: 2, foreign_key: 1, staff_name: 'Chas Fricke', comment: 'Left 5 more postcards on community board.', visit_date: '2017-01-24'},
        {id: 3, foreign_key: 2, staff_name: 'Chas Fricke', comment: 'Left 25 postcards on the table to the immediate left of the enterance.', visit_date: '2017-01-24'},

      ]);
    })
    .then (() => {
      return knex.raw('ALTER SEQUENCE dropoff_details_id_seq RESTART WITH 4;')
    })
  }