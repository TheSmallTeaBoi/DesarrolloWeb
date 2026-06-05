import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Categoria = sequelize.define("Categoria", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Categoria;
