import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Talleres = sequelize.define("Talleres", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profesor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duracionMeses: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    costo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    diaHorario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    requisitos: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export default Talleres;
