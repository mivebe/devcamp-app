'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'Ivan.Petkov',
          phash: bcrypt.hashSync('123123', 12),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Maria.Dimitrova',
          phash: bcrypt.hashSync('123123', 12),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
