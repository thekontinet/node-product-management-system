"use strict";
const { Users } = require("../models");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          title: "Bag",
          price: 500,
          quantity: 50,
          userId: (await Users.findOne())?.id,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
