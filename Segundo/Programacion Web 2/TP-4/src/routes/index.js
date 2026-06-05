import { Router } from "express";
import productoRoutes from "./productoRoutes.js";
import clienteRoutes from "./clienteRoutes.js";
import usuarioAdminRoutes from "./usuarioAdminRoutes.js";
import pedidoRoutes from "./pedidoRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";

const router = Router();

router.use("/products", productoRoutes);
router.use("/users", clienteRoutes);
router.use("/admin", usuarioAdminRoutes);
router.use("/orders", pedidoRoutes);
router.use("/categories", categoriaRoutes);

router.get("/", (req, res) => {
    res.json({
        categorias: {
            "GET /api/categories": "Lista de categorías",
            "GET /api/categories/:id": "Obtener una categoría por ID",
            "POST /api/categories":
                "Crear categoría. Parámetros requeridos: nombre (string), descripcion (string)",
            "PUT /api/categories/:id": "Actualizar categoría por ID",
            "DELETE /api/categories/:id": "Eliminar categoría por ID",
        },

        productos: {
            "GET /api/products": "Lista de productos",
            "GET /api/products/:id": "Obtener un producto por ID",
            "POST /api/products":
                "Crear producto. Parámetros requeridos: nombre (string), descripcion (string), precio (decimal), stock (integer), id_categoria (integer)",
            "PUT /api/products/:id": "Actualizar producto por ID",
            "DELETE /api/products/:id": "Eliminar producto por ID",
        },

        clientes: {
            "GET /api/clients": "Lista de clientes",
            "GET /api/clients/:id": "Obtener cliente por ID",
            "POST /api/clients":
                "Crear cliente. Parámetros requeridos: nombre (string), email (string), password (string), telefono (string), direccion (string)",
            "PUT /api/clients/:id": "Actualizar cliente por ID",
            "DELETE /api/clients/:id": "Eliminar cliente por ID",
        },

        pedidos: {
            "GET /api/orders": "Lista de pedidos",
            "GET /api/orders/:id": "Obtener pedido por ID",
            "POST /api/orders":
                "Crear pedido. Parámetros requeridos: id_cliente (integer), productos (array)",
            "PUT /api/orders/:id": "Actualizar estado o datos del pedido",
            "DELETE /api/orders/:id": "Eliminar pedido por ID",
        },

        usuariosAdmin: {
            "GET /api/admin": "Lista de administradores",
            "GET /api/admin/:id": "Obtener administrador por ID",
            "POST /api/admin":
                "Crear administrador. Parámetros requeridos: usuario (string), email (string), password (string), rol (string)",
            "PUT /api/admin/:id": "Actualizar administrador por ID",
            "DELETE /api/admin/:id": "Eliminar administrador por ID",
        },
    });
});

export default router;
