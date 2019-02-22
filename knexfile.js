// Update with your config settings.
const pg = require("pg");
pg.defaults.ssl = true;
const pg_key =
  "postgres://lyoenwrkcepwag:06cfc1eda1e0762eb8cf21f7e37e3a6f3dd96e853c85c96c5609f15624db5980@ec2-23-21-130-182.compute-1.amazonaws.com:5432/dcin2tvajg4u50";

module.exports = {
  development: {
    client: "pg",
    connection: pg_key,
    useNullAsDefault: true,
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      min: 2,
      max: 10
    }
  }

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
};
