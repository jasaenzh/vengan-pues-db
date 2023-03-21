const { Pago } = require("../db");

const { Op } = require("sequelize");

// Funcion para obtener todos los pagos
const getPagos = async () => {
    const pagos = await Pago.findAll();


    return pagos;
}

// Funcion para buscar pago por id
const getPagoById = async (id) => {
    const pago = await Pago.findByPk(id);
    return pago;
}

// Funcion para buscar pago por el numero del apartamento
const findPagos = async (ApartamentoId) => {

    if (ApartamentoId.length > 0) {
        const searchPago = await Pago.findAll({
            where: {
                ApartamentoId: { [Op.eq]: ApartamentoId },
            },
        })
        return searchPago;
    } else {
        return "Debe de tener por lo menos 1 caracter"
    }

}

// Funcion para crear pago
const createPago = async (fecha, monto, ApartamentoId) => {

    if (!fecha) {
        throw Error("Falta dato: fecha de pago")
    }

    if (!monto) {
        throw Error("Falta dato: monto")
    }

    const newPago = await Pago.create(
        {
            fecha: fecha,
            monto: monto,
            ApartamentoId: ApartamentoId
        }
    )

    return newPago;

}


// Funcion para actualizar pago
const updatePago = async (id, fechaPago, monto, ApartamentoId) => {
    const pagoToUpdate = await Pago.findByPk(id);
    await pagoToUpdate.update({
        fechaPago: fechaPago,
        monto: monto,
        ApartamentoId: ApartamentoId,
    })
}

const deletePago = async (id) => {

    const pagoToDelete = await Pago.findByPk(id);
    await pagoToDelete.destroy();
    return pagoToDelete;

}



module.exports = {
    getPagos,
    getPagoById,
    findPagos,
    createPago,
    updatePago,
    deletePago
}