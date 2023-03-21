const { Reserva } = require("../db");

const { Op } = require("sequelize");

// Funcion para obtener todos los reservas
const getReservas = async () => {
    const reserva = await Reserva.findAll();

    return reserva;
}

// Funcion para buscar reserva por id
const getReservaById = async (id) => {
    const reserva = await Reserva.findByPk(id);
    return pago;
}

// Funcion para buscar pago por el numero del apartamento
const findReserva = async (ReservaId) => {

    if (ReservaId.length > 0) {
        const searchReserva = await Reserva.findAll({
            where: {
                ReservaId: { [Op.eq]: ReservaId },
            },
        })
        return searchReserva;
    } else {
        return "Debe de tener por lo menos 1 caracter"
    }
}

// Funcion para crear Reserva
const createReserva = async (fechaInicio, fechaFin, codigoReserva, estado, ApartamentoId) => {

    if (!fechaInicio) {
        throw Error("Falta dato: fecha inicio")
    }

    if (!fechaFin) {
        throw Error("Falta dato: fecha fin")
    }

    if (!codigoReserva) {
        throw Error("Falta dato: codigo de la reserva")
    }

    const newReserva = await Reserva.create(
        {
            fechaInicio: fechaInicio,
            fechaFin: fechaFin,
            codigoReserva: codigoReserva,
            estado: estado,
            ApartamentoId: ApartamentoId
        }
    )

    return newReserva;

}


// Funcion para actualizar reserva
const updateReserva = async (id, fechaInicio, fechaFin, codigoReserva, estado, ReservaId) => {
    const reservaToUpdate = await Reserva.findByPk(id);
    await reservaToUpdate.update({
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        codigoReserva: codigoReserva,
        estado: estado,
        ReservaId: ReservaId
    })
}


const deleteReserva = async (id) => {

    const reservaToDelete = await Reserva.findByPk(id);
    await reservaToDelete.destroy();
    return reservaToDelete;

}

module.exports = {
    getReservas,
    getReservaById,
    findReserva,
    createReserva,
    updateReserva,
    deleteReserva
}