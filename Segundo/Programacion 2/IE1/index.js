function crearTemporizadorSesion(duracionSegundos, callbackAlFinalizar) {
    if (typeof duracionSegundos !== "number" || duracionSegundos <= 0) {
        throw new Error("La duración debe ser un número positivo de segundos.");
    }
    if (typeof callbackAlFinalizar !== "function") {
        throw new Error("Se requiere un callback para ejecutar al finalizar.");
    }
    let duracionOriginal = duracionSegundos;
    let tiempoRestante = duracionSegundos;
    let callback = callbackAlFinalizar;
    let intervalId = null;
    let estaActivo = false;

    function iniciar() {
        if (estaActivo || tiempoRestante <= 0) {
            console.warn("El temporizador ya está activo o ha finalizado.");
            return;
        }
        estaActivo = true;
        console.log(
            `Temporizador iniciado: ${tiempoRestante} segundos restantes.`,
        );
        intervalId = setInterval(() => {
            tiempoRestante--;
            // console.log(`Tiempo restante: ${tiempoRestante}s`); // Opcional para depurar
            if (tiempoRestante <= 0) {
                detener();
                callback();
            }
        }, 1000); // Resta "tiempoRestante" en 1 por cada segundo que pasa
    }

    function pausar() {
        if (!estaActivo) {
            console.warn("El temporizador no está activo para pausar.");
            return;
        }
        clearInterval(intervalId); // Finaliza el setInterval(), pero al mantener el "tiempoRestante" puede reanudarse donde se quedó.
        intervalId = null;
        estaActivo = false;
        console.log(
            `Temporizador pausado. Tiempo restante: ${tiempoRestante} segundos.`,
        );
    }

    function resetear() {
        detener(); // Asegura que cualquier intervalo existente se limpie
        tiempoRestante = duracionOriginal;
        estaActivo = false;
        console.log(`Temporizador reseteado a ${duracionOriginal} segundos.`);
    }

    function detener() {
        // Método interno para limpiar el intervalo
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        estaActivo = false; // Asegurar que se marca como inactivo
    }

    function obtenerTiempoRestante() {
        return tiempoRestante;
    }

    return { iniciar, pausar, resetear, obtenerTiempoRestante };
}

try {
    const miTimer = crearTemporizadorSesion(5, () => {
        console.log("¡TIEMPO FINALIZADO! Cerrando sesión...");
    });

    console.log("Tiempo restante inicial:", miTimer.obtenerTiempoRestante()); // 5
    miTimer.iniciar(); // Temporizador iniciado: 5 segundos restantes.

    setTimeout(() => {
        miTimer.pausar(); // Temporizador pausado. Tiempo restante: X segundos. (Depende de cuándo se ejecute)
        console.log("Pausado en:", miTimer.obtenerTiempoRestante());
    }, 2000); // Pausar después de 2 segundos

    setTimeout(() => {
        miTimer.iniciar(); // Reanudar
    }, 3000); // Reanudar 1 segundo después de pausar

    // El callback se ejecutará cuando el tiempo llegue a 0
    // Si se quiere resetear antes:
    // setTimeout(() => {
    //   miTimer.resetear();
    //   console.log("Reseteado a:", miTimer.obtenerTiempoRestante()); // 5
    //   miTimer.iniciar();
    // }, 1000);
} catch (e) {
    console.error("Error con el temporizador:", e.message);
}
