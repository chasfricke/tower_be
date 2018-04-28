require('dotenv').load()

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///tower_be'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
