import { Sequelize } from "sequelize";

const db = new Sequelize("name_database", "user name table", "password", {
  host: "localhost",
  dialect: "mysql",
  //logging:false,
});

export default db;
