import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Envio = sequelize.define("Envio", {
    empresa: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero_seguimiento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado_envio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Envio;
