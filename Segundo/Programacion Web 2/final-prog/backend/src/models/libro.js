import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Libros = sequelize.define("Libros", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paginas: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    editorial: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sinopsis: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

export default Libros;
