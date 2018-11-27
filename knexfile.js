// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/DATABASE_NAME_THAT_MAKES_SENSE_FOR_G102_DATABASE'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
