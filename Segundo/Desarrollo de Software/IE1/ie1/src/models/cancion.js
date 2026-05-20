import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Cancion = sequelize.define("Cancion", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    generoID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    artistaID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    albumID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default Cancion;
