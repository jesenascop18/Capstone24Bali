import { Sequelize } from "sequelize"; 

const db = new Sequelize("24Bali", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
