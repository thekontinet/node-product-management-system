'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('todos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      
      userId:{
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key: 'id'
        }
      },

      content:{
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('todos');
  }
};
