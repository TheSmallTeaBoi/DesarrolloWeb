import Pedido from "./pedido.js";
import Usuario from "./usuario.js";
import Producto from "./producto.js";
import DetallesPedido from "./detalles_pedido.js";
import Categoria from "./categoria.js";
import Direccion from "./direccion.js";
import Pago from "./pago.js";
import Envio from "./envio.js";

Usuario.hasMany(Direccion, { foreignKey: "id_usuario" });
Usuario.hasMany(Pedido, { foreignKey: "id_usuario" });

Categoria.hasMany(Producto, { foreignKey: "id_categoria" });

Producto.hasMany(DetallesPedido, { foreignKey: "id_producto" });
Producto.belongsTo(Categoria, { foreignKey: "id_categoria" });

Pedido.hasOne(Envio, { foreignKey: "id_pedido" });
Pedido.hasOne(Pago, { foreignKey: "id_pedido" });
Pedido.hasMany(DetallesPedido, { foreignKey: "id_pedido" });
Pedido.belongsTo(Usuario, { foreignKey: "id_usuario" });

DetallesPedido.belongsTo(Pedido, { foreignKey: "id_pedido" });
DetallesPedido.belongsTo(Producto, { foreignKey: "id_producto" });

Envio.belongsTo(Pedido, { foreignKey: "id_usuario" });

Pago.belongsTo(Pedido, { foreignKey: "id_pedido" });

Direccion.belongsTo(Usuario, { foreignKey: "id_usuario" });

export {
    Pedido,
    Direccion,
    Usuario,
    Producto,
    DetallesPedido,
    Categoria,
    Pago,
    Envio,
};
