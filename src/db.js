const { Sequelize } = require("sequelize");
const ApartamentoModel = require("./models/Apartamento")
const PagoModel = require("./models/Pago");
const ReservaModel = require("./models/Reserva");


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
PagoModel(database);
ReservaModel(database);

const { Apartamento, Pago, Reserva } = database.models

Apartamento.hasMany(Pago);
Pago.belongsTo(Apartamento);


Apartamento.hasMany(Reserva);
Reserva.belongsTo(Apartamento);


module.exports = { database, ...database.models };