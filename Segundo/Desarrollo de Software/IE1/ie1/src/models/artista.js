import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Artista = sequelize.define("Artista", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    biografia: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

export default Artista;
