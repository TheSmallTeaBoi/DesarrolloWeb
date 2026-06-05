import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Pedido = sequelize.define("Pedido", {
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default Pedido;
