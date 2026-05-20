import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Reproduccion = sequelize.define("Reproduccion", {
    cancionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dispositivo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Reproduccion;
