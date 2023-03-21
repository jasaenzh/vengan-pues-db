const { Router } = require('express');
const routerPagos = Router();

const { getPagos, getPagoById, findPagos, createPago, updatePago, deletePago } = require("../controllers/pagoController");

// Traer todos los pagos
routerPagos.get("/", async (req, res) => {

    const { ApartamentoId } = req.query;

    let pagos;

    try {
        if (ApartamentoId) {
            pagos = await findPagos(ApartamentoId);
        } else {
            pagos = await getPagos();
        }
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
        const { fecha, monto, ApartamentoId } = req.body;
        const newPago = await createPago(fecha, monto, ApartamentoId);
        res.status(201).json(newPago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Actualizar pago
routerPagos.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const { fechaPago, monto, ApartamentoId } = req.body;
        const updatedToPago = await updatePago(id, fechaPago, monto, ApartamentoId);
        res.status(200).json(updatedToPago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar pago
routerPagos.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedToPago = await deletePago(id);
        res.status(200).json(deletedToPago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = routerPagos;
