const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/index.routes")

// Creo el servidor
const server = express();

// Middeleware para hacer trakin de lo ocuerre en express
server.use(morgan("dev"));

// Middeleware para transformar los datos que vengan como json en un objeto de JavaScript
server.use(express.json());

// Creo la ruta donde se van a crear todas las rutas => Carpeta routes
server.use(mainRouter);

module.exports = server;

