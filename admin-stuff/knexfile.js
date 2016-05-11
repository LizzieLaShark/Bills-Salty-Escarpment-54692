
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'submissions_dev'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'submissions_test',
  },

  production: process.env.DATABASE_URL || {
    client: 'postgresql',
   connection: process.env.DATABASE_URL,
   pool: {
     min: 2,
     max: 10
   },
   migrations: {
     tableName: 'knex_migrations'
  }
}
}
};
