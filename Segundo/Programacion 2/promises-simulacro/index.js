/**
 * Simula la verificación de stock de un producto.
 * @param {string} idProducto - El ID del producto.
 * @param {number} cantidad - La cantidad deseada.
 * @returns {Promise<object>} Promesa que resuelve con { stockDisponible: true, precioUnitario: number } o rechaza.
 */
function verificarStock(idProducto, cantidad) {
    console.log(
        `[STOCK] Verificando stock para ${cantidad} unidad(es) de ${idProducto}...`,
    );
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const inventario = {
                PROD001: { stock: 10, precio: 25.5 },
                PROD002: { stock: 5, precio: 100.0 },
                PROD003: { stock: 0, precio: 15.75 }, // Sin stock
            };

            const item = inventario[idProducto];
            if (!item) {
                console.error(
                    `[STOCK] Error: Producto ${idProducto} no encontrado.`,
                );
                reject(
                    new Error(
                        `Producto ${idProducto} no encontrado en el inventario.`,
                    ),
                );
            } else if (item.stock >= cantidad) {
                console.log(
                    `[STOCK] Éxito: Stock disponible para ${idProducto}. Precio unitario: $${item.precio}`,
                );
                resolve({ stockDisponible: true, precioUnitario: item.precio });
            } else {
                console.warn(
                    `[STOCK] Error: Stock insuficiente para ${idProducto}. Solicitado: ${cantidad}, Disponible: ${item.stock}`,
                );
                reject(new Error(`Stock insuficiente para ${idProducto}.`));
            }
        }, 1500); // Simula demora de red/DB
    });
}

/**
 * Simula el procesamiento de un pago.
 * @param {object} datosPago - Información del pago (ej. { metodo: 'tarjeta', monto: number }).
 * @param {number} montoTotal - El monto total a cobrar.
 * @returns {Promise<object>} Promesa que resuelve con { transaccionId: string, estado: 'aprobado' } o rechaza.
 */
function procesarPago(datosPago, montoTotal) {
    console.log(
        `[PAGO] Procesando pago de $${montoTotal.toFixed(2)} con ${datosPago.metodo}...`,
    );
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (montoTotal <= 0) {
                console.error(
                    "[PAGO] Error: El monto a pagar debe ser positivo.",
                );
                reject(new Error("Monto de pago inválido."));
            } else if (datosPago.metodo === "tarjeta" && montoTotal < 500) {
                const transaccionId = `TXN-${Date.now()}`;
                console.log(
                    `[PAGO] Éxito: Pago aprobado. Transacción ID: ${transaccionId}`,
                );
                resolve({ transaccionId, estado: "aprobado" });
            } else if (datosPago.metodo === "paypal" && montoTotal < 1000) {
                const transaccionId = `PP-${Date.now()}`;
                console.log(
                    `[PAGO] Éxito: Pago con PayPal aprobado. Transacción ID: ${transaccionId}`,
                );
                resolve({ transaccionId, estado: "aprobado" });
            } else {
                console.error(
                    `[PAGO] Error: Pago rechazado para monto $${montoTotal.toFixed(2)} con ${datosPago.metodo}. (Límite excedido o método no soportado para el monto)`,
                );
                reject(new Error("Pago rechazado por el proveedor."));
            }
        }, 2000); // Simula demora del procesador de pagos
    });
}

/**
 * Simula el envío de una notificación de confirmación.
 * @param {string} emailUsuario - El email para enviar la notificación.
 * @param {object} detallesPedido - Información del pedido (ej. { productoId, cantidad, montoPagado, transaccionId }).
 * @returns {Promise<string>} Promesa que resuelve con un mensaje de éxito o rechaza.
 */
function enviarNotificacion(emailUsuario, detallesPedido) {
    console.log(
        `[NOTIFICACION] Preparando notificación para ${emailUsuario} sobre pedido ${detallesPedido.transaccionId}...`,
    );
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simular un fallo aleatorio en el envío de emails (10% de probabilidad)
            if (Math.random() < 0.1) {
                console.error(
                    `[NOTIFICACION] Error: Fallo al enviar email a ${emailUsuario}.`,
                );
                reject(
                    new Error(
                        `Fallo en el servicio de notificaciones para ${emailUsuario}.`,
                    ),
                );
            } else {
                console.log(
                    `[NOTIFICACION] Éxito: Notificación enviada a ${emailUsuario} para el pedido con producto ${detallesPedido.productoId}.`,
                );
                resolve(
                    `Confirmación enviada a ${emailUsuario} para la transacción ${detallesPedido.transaccionId}.`,
                );
            }
        }, 1000); // Simula demora del servicio de email
    });
}

async function procesarPedidoCompleto(
    idProducto,
    cantidad,
    datosPago,
    emailUsuario,
) {
    let precioUnitario = 0;

    const infoStock = await verificarStock(idProducto, cantidad);
    precioUnitario = infoStock.precioUnitario;
    const montoTotal = cantidad * precioUnitario;
    const infoPago = await procesarPago(datosPago, montoTotal);
    const detalles = {
        productoId: idProducto,
        cantidad: cantidad,
        montoPagado: montoTotal,
        transaccionId: infoPago.transaccionId,
    };
    return await enviarNotificacion(emailUsuario, detalles);
}

// procesarPedidoCompleto(
//     "PROD001",
//     2,
//     { metodo: "tarjeta" },
//     "cliente@example.com",
// )
//     .then((mensajeFinal) => {
//         console.log("----------------------------------------------------");
//         console.log("RESULTADO FINAL DEL PEDIDO (Éxito):", mensajeFinal);
//         console.log("----------------------------------------------------");
//     })
//     .catch((error) => {
//         console.log("----------------------------------------------------");
//         console.error("ERROR EN EL PROCESO DEL PEDIDO:", error.message);
//         console.log("----------------------------------------------------");
//     });

// Escenario 2: Stock insuficiente
// procesarPedidoCompleto(
//     "PROD002",
//     10,
//     { metodo: "tarjeta" },
//     "otrocliente@example.com",
// )
//     .then((mensajeFinal) => {
//         console.log("----------------------------------------------------");
//         console.log("RESULTADO FINAL DEL PEDIDO (Éxito):", mensajeFinal);
//         console.log("----------------------------------------------------");
//     })
//     .catch((error) => {
//         console.log("----------------------------------------------------");
//         console.error("ERROR EN EL PROCESO DEL PEDIDO:", error.message);
//         console.log("----------------------------------------------------");
//     });

// Escenario 3: Producto no encontrado
// procesarPedidoCompleto("PRODXYZ", 1, { metodo: "tarjeta" }, "test@example.com")
//     .then((mensajeFinal) => {
//         console.log("----------------------------------------------------");
//         console.log("RESULTADO FINAL DEL PEDIDO (Éxito):", mensajeFinal);
//         console.log("----------------------------------------------------");
//     })
//     .catch((error) => {
//         console.log("----------------------------------------------------");
//         console.error("ERROR EN EL PROCESO DEL PEDIDO:", error.message);
//         console.log("----------------------------------------------------");
//     });

// Escenario 4: Pago rechazado (ej. monto muy alto para el método)
// procesarPedidoCompleto(
//     "PROD002",
//     5,
//     { metodo: "tarjeta" /* monto será 500 */ },
//     "comprador@example.com",
// )
//     .then((mensajeFinal) => {
//         console.log("----------------------------------------------------");
//         console.log("RESULTADO FINAL DEL PEDIDO (Éxito):", mensajeFinal);
//         console.log("----------------------------------------------------");
//     })
//     .catch((error) => {
//         console.log("----------------------------------------------------");
//         console.error("ERROR EN EL PROCESO DEL PEDIDO:", error.message);
//         // Si el pago falla por monto > 500 para tarjeta:
//         // procesarPedidoCompleto("PROD002", 6, { metodo: 'tarjeta' /* monto será 600 */ }, "comprador@example.com")
//     });

// Escenario 5: Fallo en la notificación (puede ocurrir aleatoriamente)
// Asegúrate de usar un caso que normalmente sería exitoso hasta la notificación, como el Escenario 1,
// y ejecutarlo varias veces si es necesario para simular el fallo de notificación.
procesarPedidoCompleto(
    "PROD001",
    1,
    { metodo: "paypal" },
    "suertudo@example.com",
)
    .then((mensajeFinal) => {
        console.log("----------------------------------------------------");
        console.log("RESULTADO FINAL DEL PEDIDO (Éxito):", mensajeFinal);
        console.log("----------------------------------------------------");
    })
    .catch((error) => {
        console.log("----------------------------------------------------");
        console.error("ERROR EN EL PROCESO DEL PEDIDO:", error.message);
        console.log("----------------------------------------------------");
    });
