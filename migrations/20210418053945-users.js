'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query(`
        create table if not exists users(
          id serial primary key,

          created_at timestamp default now(),
          updated_at timestamp default now(),
          deleted_at timestamp,

          email text unique not null,
          username text not null,
          password text not null check (char_length(password) >= 4)
        )
      `)
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query(`
        drop table if exists users
        `)
    },
}
