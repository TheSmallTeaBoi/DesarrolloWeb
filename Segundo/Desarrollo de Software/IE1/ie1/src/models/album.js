import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Album = sequelize.define("Album", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaLanzamiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    coverArt: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Album;
