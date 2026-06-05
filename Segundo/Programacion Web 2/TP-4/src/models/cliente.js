import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Cliente = sequelize.define("Cliente", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Hash
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Cliente;
