const { Apartamento } = require("../db");



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
        throw Error("Precio no puede ser negativo")
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
        throw Error("Falta dato: duplex y el campo debe ser de tipo boolean");
    }

    const newApartamento = await Apartamento.create({
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
    })

    return newApartamento;
}

module.exports = { createApartamento }

