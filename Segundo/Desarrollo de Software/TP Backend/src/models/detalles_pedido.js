import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const DetallesPedido = sequelize.define("DetallesPedido", {
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precio_unitario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default DetallesPedido;
