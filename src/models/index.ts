import { Sequelize } from "sequelize";
import { PetFactory } from "./pet";

const dbName = 'petDB';
const username = 'root';
const password = 'hotrod';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

PetFactory(sequelize);

export const db = sequelize;