import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Direccion = sequelize.define("Direccion", {
    calle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    provincia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    codigo_postal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_cliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Direccion;
