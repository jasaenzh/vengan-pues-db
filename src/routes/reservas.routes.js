const { Router } = require('express')

const routerReservas = Router();

const { getReservas, getReservaById, findReserva, createReserva, updateReserva, deleteReserva } = require("../controllers/reservaController")

// Traer todos las reservas
routerReservas.get("/", async (req, res) => {
    const { ApartamentoId: ReservaId } = req.query;

    let reservas;

    try {
        if (ReservaId) {
            reservas = await findReserva(ReservaId);
        } else {
            reservas = await getReservas();
        }
        res.status(200).json(reservas);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

// Traer reserva por id
routerReservas.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const reserva = await getReservaById(id);
        res.status(200).json(reserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Crear un reserva
routerReservas.post("/", async (req, res) => {
    try {
        const { fechaInicio, fechaFin, codigoReserva, estado, ApartamentoId } = req.body;
        const newReserva = await createReserva(fechaInicio, fechaFin, codigoReserva, estado, ApartamentoId);
        res.status(201).json(newReserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// Actualizar reserva
routerReservas.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const { fechaInicio, fechaFin, codigoReserva, estado } = req.body;
        const updatedToReserva = await updateReserva(id, fechaInicio, fechaFin, codigoReserva, estado, ReservaId);
        res.status(200).json(updatedToReserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Eliminar reserva
routerReservas.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedToReserva = await deleteReserva(id);
        res.status(200).json(deletedToReserva);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = routerReservas;