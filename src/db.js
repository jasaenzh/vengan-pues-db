const { Sequelize } = require("sequelize");
const ApartamentoModel = require("./models/Apartamento")


//Importo las credenciales
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const database = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
        logging: false
    }
)

// Definimos los modelos
ApartamentoModel(database);



module.exports = { database, ...database.models };