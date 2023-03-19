const { Router } = require('express')

const { createApartamento } = require("../controllers/apartamentoController")

const routerApartamentos = Router();

routerApartamentos.get("/", (req, res) => {
    console.log("Estoy la ruta apartamentos")
    res.status(200).json({ message: "Hola Mundo" });
})


routerApartamentos.post("/", async (req, res) => {
    try {
        const {
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
        } = req.body;

        const newApartamento = await createApartamento(
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
            terrazaVista);

        res.status(200).json(newApartamento);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = routerApartamentos;