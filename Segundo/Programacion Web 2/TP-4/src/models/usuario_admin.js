import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const UsuarioAdmin = sequelize.define("UsuarioAdmin", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Hash
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default UsuarioAdmin;
