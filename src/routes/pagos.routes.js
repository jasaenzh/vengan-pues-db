const { Router } = require('express');
const routerPagos = Router();

const { getPagos, getPagoById, createPago, updatePago, deletePago } = require("../controllers/pagoController");

// Traer todos los pagos
routerPagos.get("/", async (req, res) => {
    try {
        const pagos = await getPagos();
        res.status(200).json(pagos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Traer pago por id
routerPagos.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const pago = await getPagoById(id);
        res.status(200).json(pago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Crear un pago
routerPagos.post("/", async (req, res) => {
    try {
        const { fechaPago, monto, idApartamento } = req.body;
        const newPago = await createPago(fechaPago, monto, idApartamento);
        res.status(201).json(newPago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar pago
routerPagos.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const { fechaPago, monto, idApartamento } = req.body;
        const updatedPago = await updatePago(id, fechaPago, monto, idApartamento);
        res.status(200).json(updatedPago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar pago
routerPagos.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPago = await deletePago(id);
        res.status(200).json(deletedPago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = routerPagos;
