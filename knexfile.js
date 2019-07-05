// Update with your config settings.

const localPgConnection = {
  host: "localhost",
  databse:"locations",
  user: "henry",
  password: "hired!"
}
const prodDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './data/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: prodDbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    }
  }

};
