'use strict';
const bycrpt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Febrian",
        profession: "Software Engineer",
        role: "admin",
        email: "fbrnngrh@gmail.com",
        password: bycrpt.hashSync("123456", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "bayu",
        profession: "Frontend Engineer",
        role: "student",
        email: "byunngrh@gmail.com",
        password: bycrpt.hashSync("tes123456", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
