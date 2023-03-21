const { DataTypes } = require("sequelize");


module.exports = (database) => {
    database.define("Pago", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        monto: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
}