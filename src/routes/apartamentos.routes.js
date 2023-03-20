const { Router } = require('express')

const { getApartamentos, getApartamentoById, findApartamento, createApartamento, updateApartamento, deleteApartamento } = require("../controllers/apartamentoController")

const routerApartamentos = Router();

// Traer todos los apartamentos
routerApartamentos.get("/", async (req, res) => {
    const { numeroApartamento } = req.body;

    let apartamentos;
    try {
        if (numeroApartamento) {
            apartamentos = await findApartamento(numeroApartamento)
        } else {
            apartamentos = await getApartamentos()
        }

        res.status(200).json(apartamentos)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

})

// Trae apartametno por id
routerApartamentos.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const apartamento = await getApartamentoById(id);
        res.status(200).json(apartamento);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// Crear un Apartamento
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

        const newApartamento = await createApartamento
            (
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
            );

        res.status(200).json(newApartamento);

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// Actualizar apartamento
routerApartamentos.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const {
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
        } = req.body;

        const updateToApartamento = await updateApartamento
            (
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
            );

        res.status(200).json(updateApartamento);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

routerApartamentos.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deleteToApartamento = await deleteApartamento(id);
        res.status(200).json(deleteToApartamento);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

module.exports = routerApartamentos;