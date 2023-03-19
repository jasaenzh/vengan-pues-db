const { Router } = require('express')

const routerPagos = Router();

routerPagos.get("/", (req, res) => {
    console.log("Estoy la ruta Pagos")
    res.status(200).json({ message: "Hola Mundo" });
})

module.exports = routerPagos;