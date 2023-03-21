const { Apartamento } = require("../db");

const { Op } = require("sequelize");

// Funcion para traer los Apartamentos
const getApartamentos = async () => {
    const apartamentos = await Apartamento.findAll()


    return apartamentos;
}

// Funcion para buscar un apartamento por id
const getApartamentoById = async (id) => {
    const apartamento = await Apartamento.findByPk(id);
    return apartamento;
}

// Funcion para buscar un apartamento por el numero de apartamento
const findApartamento = async (numeroApartamento) => {
    if (numeroApartamento.length > 1) {
        const searchApartamento = await Apartamento.findAll({
            where: [
                { numeroApartamento: { [Op.iLike]: `%${numeroApartamento}%` } },
            ],
        })
        return searchApartamento;
    } else {
        return "Debe de tener por lo menos 2 caracteres"
    }
}


// Funcion para crear un apartamento
const createApartamento = async (numeroApartamento, ubicacion, areaMts, precio, duplex, habitaciones, camasDobles, camasSencillas, camaNido, banos, aguaCaliente, secadorCabello, salaEstar, comedor, sofaCama, televisor, internet, cocina, nevera, lavadora, microondas, cafetera, licuadora, tostadoraPan, ollaPresion, ollaArrocera, sanduchera, camaraSeguridad, terrazaVista) => {
    if (!numeroApartamento) {
        throw Error("Falta dato: numero de apartamento")
    }

    if (!ubicacion) {
        throw Error("Falta dato: ubicacion")
    }

    if (!areaMts === undefined || areaMts === null) {
        throw Error("Falta dato: area mts")
    }

    if (areaMts < 0) {
        throw Error("La cantidad de area Mts no puede ser negativa")
    }

    if (precio === undefined || precio === null) {
        throw Error("Falta dato: precio")
    }

    if (precio < 0) {
        throw Error("Precio no puede ser un valor negativo")
    }

    if (typeof duplex !== 'boolean') {
        throw Error("Falta dato: duplex y el campo debe ser de tipo boolean");
    }

    if (habitaciones === undefined || habitaciones === null) {
        throw Error("Falta dato: Numero de habitaciones")
    }

    if (habitaciones < 0) {
        throw Error("La cantidad de habitaciones no puede ser negativa")
    }

    if (camasDobles === undefined || camasDobles === null) {
        throw Error("Falta dato: Cantidad de camas dobles")
    }

    if (camasDobles < 0) {
        throw Error("La cantidad de camas dobles no puede ser negativa")
    }

    if (camasSencillas === undefined || camasSencillas === null) {
        throw Error("Falta dato: Cantidad de camas sencillas")
    }

    if (camasSencillas < 0) {
        throw Error("La cantidad de camas sencillas no puede ser negativa")
    }

    if (camaNido === undefined || camaNido === null) {
        throw Error("Falta dato: Cantidad de camas nido")
    }

    if (camaNido < 0) {
        throw Error("La cantidad de camas nido no puede ser negativa")
    }


    if (banos === undefined || banos === null) {
        throw Error("Falta dato: Cantidad de baños")
    }

    if (banos < 0) {
        throw Error("La cantidad de banos no puede ser negativa")
    }

    if (typeof aguaCaliente !== 'boolean') {
        throw Error("Falta dato: aguaCaliente y el campo debe ser de tipo boolean");
    }

    if (typeof secadorCabello !== 'boolean') {
        throw Error("Falta dato: secadorCabello y el campo debe ser de tipo boolean");
    }

    if (typeof salaEstar !== 'boolean') {
        throw Error("Falta dato: salaEstar y el campo debe ser de tipo boolean");
    }

    if (typeof comedor !== 'boolean') {
        throw Error("Falta dato: comedor y el campo debe ser de tipo boolean");
    }

    if (typeof sofaCama !== 'boolean') {
        throw Error("Falta dato: sofaCama y el campo debe ser de tipo boolean");
    }

    if (typeof televisor !== 'boolean') {
        throw Error("Falta dato: televisor y el campo debe ser de tipo boolean");
    }

    if (typeof internet !== 'boolean') {
        throw Error("Falta dato: internet y el campo debe ser de tipo boolean");
    }

    if (typeof cocina !== 'boolean') {
        throw Error("Falta dato: cocina y el campo debe ser de tipo boolean");
    }

    if (typeof nevera !== 'boolean') {
        throw Error("Falta dato: nevera y el campo debe ser de tipo boolean");
    }

    if (typeof lavadora !== 'boolean') {
        throw Error("Falta dato: lavadora y el campo debe ser de tipo boolean");
    }

    if (typeof microondas !== 'boolean') {
        throw Error("Falta dato: microondas y el campo debe ser de tipo boolean");
    }

    if (typeof cafetera !== 'boolean') {
        throw Error("Falta dato: cafetera y el campo debe ser de tipo boolean");
    }

    if (typeof licuadora !== 'boolean') {
        throw Error("Falta dato: licuadora y el campo debe ser de tipo boolean");
    }

    if (typeof tostadoraPan !== 'boolean') {
        throw Error("Falta dato: tostadoraPan y el campo debe ser de tipo boolean");
    }

    if (typeof ollaPresion !== 'boolean') {
        throw Error("Falta dato: ollaPresion y el campo debe ser de tipo boolean");
    }

    if (typeof ollaArrocera !== 'boolean') {
        throw Error("Falta dato: ollaArrocera y el campo debe ser de tipo boolean");
    }

    if (typeof sanduchera !== 'boolean') {
        throw Error("Falta dato: ollaArrocera y el campo debe ser de tipo boolean");
    }

    if (typeof camaraSeguridad !== 'boolean') {
        throw Error("Falta dato: camaraSeguridad y el campo debe ser de tipo boolean");
    }

    if (typeof terrazaVista !== 'boolean') {
        throw Error("Falta dato: terrazaVista y el campo debe ser de tipo boolean");
    }

    const newApartamento = await Apartamento.create(
        {
            numeroApartamento: numeroApartamento,
            ubicacion: ubicacion,
            areaMts: areaMts,
            precio: precio,
            duplex: duplex,
            habitaciones: habitaciones,
            camasDobles: camasDobles,
            camasSencillas: camasSencillas,
            camaNido: camaNido,
            banos: banos,
            aguaCaliente: aguaCaliente,
            secadorCabello: secadorCabello,
            salaEstar: salaEstar,
            comedor: comedor,
            sofaCama: sofaCama,
            televisor: televisor,
            internet: internet,
            cocina: cocina,
            nevera: nevera,
            lavadora: lavadora,
            microondas: microondas,
            cafetera: cafetera,
            licuadora: licuadora,
            tostadoraPan: tostadoraPan,
            ollaPresion: ollaPresion,
            ollaArrocera: ollaArrocera,
            sanduchera: sanduchera,
            camaraSeguridad: camaraSeguridad,
            terrazaVista: terrazaVista
        }
    )

    return newApartamento;
}

// Funcion para actualizar Apartamento
const updateApartamento = async (
    id,
    numeroApartamento,
    ubicacion,
    areaMts,
    precio,
    duplex,
    habitaciones,
    camasDobles,
    camasSencillas,
    camaNido,
    banos,
    aguaCaliente,
    secadorCabello,
    salaEstar,
    comedor,
    sofaCama,
    televisor,
    internet,
    cocina,
    nevera,
    lavadora,
    microondas,
    cafetera,
    licuadora,
    tostadoraPan,
    ollaPresion,
    ollaArrocera,
    sanduchera,
    camaraSeguridad,
    terrazaVista
) => {
    const apartamentoToUpdate = await Apartamento.findByPk(id);
    await apartamentoToUpdate.update(
        {
            numeroApartamento: numeroApartamento,
            ubicacion: ubicacion,
            areaMts: areaMts,
            precio: precio,
            duplex: duplex,
            habitaciones: habitaciones,
            camasDobles: camasDobles,
            camasSencillas: camasSencillas,
            camaNido: camaNido,
            banos: banos,
            aguaCaliente: aguaCaliente,
            secadorCabello: secadorCabello,
            salaEstar: salaEstar,
            comedor: comedor,
            sofaCama: sofaCama,
            televisor: televisor,
            internet: internet,
            cocina: cocina,
            nevera: nevera,
            lavadora: lavadora,
            microondas: microondas,
            cafetera: cafetera,
            licuadora: licuadora,
            tostadoraPan: tostadoraPan,
            ollaPresion: ollaPresion,
            ollaArrocera: ollaArrocera,
            sanduchera: sanduchera,
            camaraSeguridad: camaraSeguridad,
            terrazaVista: terrazaVista
        }
    )
}

// Funcion para eliminar Apartamento
const deleteApartamento = async (id) => {
    const apertamentoToDelete = await Apartamento.findByPk(id);
    await apertamentoToDelete.destroy();
    return apertamentoToDelete
}

module.exports = { getApartamentos, getApartamentoById, findApartamento, createApartamento, updateApartamento, deleteApartamento }

