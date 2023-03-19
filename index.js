// Importo variables .env
require('dotenv').config();
const { EXPRESS_PORT } = process.env;
const { database } = require("./src/db");

// Importo servidor del archivo app.js
const server = require('./src/app');


//Sincronizo la base de datos inicialmente y luego ejecuto el servidor => .then(Promesa)
// force: true => Elimina todas las tablas y las vuelve a crear con base en los modelos
// alter: true => Actualiza las tablas de la base de datos con base en los modelos

database
    .sync({ force: true })
    .then(() => {
        server.listen(EXPRESS_PORT, () => {
            console.log(`Escuchando en el puerto ${EXPRESS_PORT}`)
        })
    }).catch((error) => {
        console.log(error.message)
    })






