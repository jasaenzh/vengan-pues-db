// Importa DataTypes de sequelize
const { DataTypes } = require("sequelize");

// Define el modelo de la tabla de reservas
module.exports = (database) => {
    database.define("Reserva",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            fechaInicio: {
                type: DataTypes.DATE,
                allowNull: false
            },
            fechaFin: {
                type: DataTypes.DATE,
                allowNull: false
            },
            estado: {
                type: DataTypes.ENUM("pendiente", "confirmada", "cancelada"),
                allowNull: false
            }
        }
    )
};