const { DataTypes } = require("sequelize");


module.exports = (database) => {
    database.define("Apartamento",
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            numeroApartamento: {
                type: DataTypes.STRING,
                allowNull: false
            },
            ubicacion: {
                type: DataTypes.STRING,
                allowNull: false
            },
            areaMts: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            precio: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            duplex: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            habitaciones: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            camasDobles: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            camasSencillas: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            camaNido: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            banos: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            aguaCaliente: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            secadorCabello: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            salaEstar: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            comedor: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            sofaCama: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            televisor: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            internet: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            cocina: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            nevera: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            lavadora: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            microondas: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            cafetera: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            licuadora: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            tostadoraPan: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            ollaPresion: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            ollaArrocera: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            sanduchera: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            camaraSeguridad: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            terrazaVista: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },
        {
            timestamps: false,
        }
    )
}