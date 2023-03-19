const { Router } = require('express')

const routerReservas = Router();

routerReservas.get("/", (req, res) => {
    console.log("Estoy la ruta Reservas")
    res.status(200).json({ message: "Hola Mundo" });
})

module.exports = routerReservas;