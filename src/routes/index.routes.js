const { Router } = require("express");
const routerApartamentos = require("./apartamentos.routes");
const routerReservas = require("./reservas.routes");
const routerPagos = require("./pagos.routes");

const mainRouter = Router();

// Rutas (endpoint)
mainRouter.use("/apartamentos", routerApartamentos)
mainRouter.use("/reservas", routerReservas)
mainRouter.use("/pagos", routerPagos)

module.exports = mainRouter;