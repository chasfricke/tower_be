exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, name: 'Starbucks', business_type: 'coffee', address: '200 Quebec St, Denver, CO 80230', latitude: 39.719997, longitude: -104.901734, first_visit: "2017-01-14"},
        {id: 2, name: 'Timbuk Toys', business_type: 'business', address: '200 Quebec St, Denver, CO 80230', latitude: 39.719997, longitude: -104.901734, first_visit: "2017-01-14"},
        {id: 3, name: 'QuinceEssential Coffee House', business_type: 'coffee', address: '1447 Quince St, Denver, CO 80220', latitude: 39.739610, longitude: -104.902425, first_visit: "2017-01-14"},
        {id: 4, name: 'Lowry Elementary', business_type: 'school', address: '8001 E Cedar Ave, Denver, CO 80230', latitude: 39.712815, longitude: -104.896455, first_visit: "2017-01-14"},
        {id: 5, name: 'Teller Elementary', business_type: 'school', address: '1150 Garfield St, Denver, CO 80206', latitude: 39.734418, longitude: -104.943585, first_visit: "2017-01-14"}
      ]);
    })
    .then (() => {
      return knex.raw('ALTER SEQUENCE locations_id_seq RESTART WITH 6;')
    })
  }
