import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Producto = sequelize.define("Producto", {
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default Producto;
