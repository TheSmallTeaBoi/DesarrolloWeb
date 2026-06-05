import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const DetallesPedido = sequelize.define("DetallesPedido", {
    id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
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
