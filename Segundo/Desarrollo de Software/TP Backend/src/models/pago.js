import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Pago = sequelize.define("Pago", {
    metodo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    monto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Pago;
