import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Playlist = sequelize.define("Playlist", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usuarioID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

export default Playlist;
