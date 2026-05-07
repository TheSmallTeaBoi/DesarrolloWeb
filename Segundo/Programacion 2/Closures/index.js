function crearArticuloInventario(id, nombre, stockInicial) {
    const articulo = { id: id, nombre: nombre, stock: stockInicial };

    if (typeof id !== "string" || id.trim() === "") {
        throw new Error(
            "El ID del artículo es obligatorio y debe ser un string.",
        );
    }
    if (typeof nombre !== "string" || nombre.trim() === "") {
        throw new Error(
            "El nombre del artículo es obligatorio y debe ser un string.",
        );
    }
    if (
        typeof stockInicial !== "number" ||
        stockInicial < 0 ||
        !Number.isInteger(stockInicial)
    ) {
        throw new Error(
            "El stock inicial debe ser un número entero no negativo.",
        );
    }

    function obtenerStock() {
        return `Artículo: ${articulo.nombre} (ID: ${articulo.id}), Stock: ${articulo.stock}`;
    }

    function agregarStock(cantidad) {
        if (
            typeof cantidad !== "number" ||
            cantidad <= 0 ||
            !Number.isInteger(cantidad)
        ) {
            console.warn(
                "La cantidad a añadir debe ser un número entero positivo.",
            );
            return false;
        }
        articulo.stock += cantidad;
        articulo.ultimaActualizacion = Date.now();
        console.log(
            `${cantidad} unidades añadidas. Nuevo stock de ${articulo.nombre}: ${articulo.stock}`,
        );
        return true;
    }

    function removerStock(cantidad) {
        if (
            typeof cantidad !== "number" ||
            cantidad <= 0 ||
            !Number.isInteger(cantidad)
        ) {
            console.warn(
                "La cantidad a remover debe ser un número entero positivo.",
            );
            return false;
        }
        if (cantidad > articulo.stock) {
            console.error(
                `No se puede remover ${cantidad} unidades de ${articulo.nombre}. Stock insuficiente: ${articulo.stock}`,
            );
            return false;
        }
        articulo.stock -= cantidad;
        articulo.ultimaActualizacion = Date.now();
        console.log(
            `${cantidad} unidades removidas. Nuevo stock de ${articulo.nombre}: ${articulo.stock}`,
        );
        return true;
    }

    function obtenerUltimaActualizacion() {
        return articulo.ultimaActualizacion;
    }

    return {
        agregarStock: agregarStock,
        obtenerStock: obtenerStock,
        removerStock: removerStock,
        obtenerUltimaActualizacion: obtenerUltimaActualizacion,
    };
}

try {
    const articulo1 = crearArticuloInventario("ART-001", "Laptop Modelo X", 10);
    console.log(articulo1.obtenerStock()); // Artículo: Laptop Modelo X (ID: ART-001), Stock: 10
    articulo1.agregarStock(5); // 5 unidades añadidas. Nuevo stock de Laptop Modelo X: 15
    articulo1.removerStock(2); // 2 unidades removidas. Nuevo stock de Laptop Modelo X: 13
    console.log(articulo1.obtenerStock()); // Artículo: Laptop Modelo X (ID: ART-001), Stock: 13
    console.log(
        "Última actualización:",
        new Date(articulo1.obtenerUltimaActualizacion()).toLocaleTimeString(),
    );

    articulo1.removerStock(15); // No se puede remover 15 unidades de Laptop Modelo X. Stock insuficiente: 13
    articulo1.agregarStock(0.5); // La cantidad a añadir debe ser un número entero positivo.

    // console.log(articulo1.stock); // Debería ser undefined

    // const articuloError = crearArticuloInventario('', 'Silla', 5); // Lanzaría error
} catch (e) {
    console.error("Error al crear/operar artículo:", e.message);
}
