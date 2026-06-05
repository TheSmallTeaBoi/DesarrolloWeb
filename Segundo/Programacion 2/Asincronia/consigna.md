# Trabajos Práctico: Promesas y Consumo de APIs

## Ejercicio 1: Consumo Básico de una API (Petición GET)
**Objetivo:** Comprender la estructura sintáctica básica para realizar una petición HTTP, procesar la respuesta en formato JSON y manejar posibles errores utilizando ambos enfoques.

### Consigna:
Escribe una función llamada `obtenerUsuarios` que realice una petición a la API `https://jsonplaceholder.typicode.com/users` para obtener la lista de usuarios. Deberás mostrar por consola únicamente los nombres (`name`) de cada usuario.

*   **Parte A:** Resuelve el ejercicio utilizando la sintaxis de **`.then()` y `.catch()`**.
*   **Parte B:** Resuelve el ejercicio utilizando la sintaxis de **`async / await` con `try / catch`**.

---

## Ejercicio 2: Peticiones Secuenciales (Dependencia de datos)
**Objetivo:** Analizar cómo se maneja el flujo de control cuando una operación asíncrona depende del resultado de una operación anterior. Aquí se suele apreciar con mayor claridad la ventaja de legibilidad de `async/await`.

### Consigna:
Escribe una función que realice los siguientes pasos en orden:
1. Buscar el usuario con el ID `3` en `/users/3`.
2. Una vez obtenido el usuario, extraer su correo electrónico (`email`) y su ID.
3. Realizar una segunda petición a `/posts?userId=3` para traer las publicaciones hechas por ese usuario.
4. Imprimir en consola un mensaje con el formato: 
   *"El usuario [Nombre del Usuario] (Email: [correo]) ha realizado [N° de publicaciones] publicaciones."*

*   **Parte A:** Resuelve el flujo encadenando promesas con **`.then()`**. Evita caer en el "Callback Hell" de promesas anidadas; utiliza el retorno de promesas en la cadena.
*   **Parte B:** Resuelve el mismo flujo utilizando **`async / await`**.

---

## Ejercicio 3: Peticiones en Paralelo (Optimización con `Promise.all`)
**Objetivo:** Comprender que no todas las peticiones asíncronas deben ser secuenciales. Si dos peticiones no dependen entre sí, ejecutarlas en paralelo optimiza el tiempo total de respuesta.

### Consigna:
Necesitamos obtener de manera simultánea la lista completa de tareas (`/todos`) y la lista de publicaciones (`/posts`). 
Escribe una función llamada `obtenerDatosSimultaneos` que inicie ambas peticiones al mismo tiempo y espere a que ambas se resuelvan. Al finalizar, imprime en consola la cantidad total de tareas y la cantidad total de publicaciones obtenidas.

*   **Parte A:** Utiliza **`Promise.all()` combinado con `.then()`**.
*   **Parte B:** Utiliza **`Promise.all()` combinado con `async / await`**.

---

