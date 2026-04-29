import usuarios from "./modules/usuarios.js";
import app from "./src/app.js";

import getUsuarios from "./act1.js";
import getNombres from "./act2.js";
import agruparPorCiudad from "./act3.js";
import promedioEdad from "./act4.js";

app.get("/", (_, res) => {
    res.send("Hello World!");
});

app.get("/usuarios", (_, res) => {
    res.send(getUsuarios(usuarios));
});

app.get("/ciudades", (_, res) => {
    res.send(getNombres(usuarios));
});

app.get("/grupos", (_, res) => {
    res.send(agruparPorCiudad());
});

app.get("/promedio", (_, res) => {
    res.send(promedioEdad(usuarios));
});

app.listen(3000);

getUsuarios(usuarios);
getNombres(usuarios);
agruparPorCiudad();
promedioEdad(usuarios);
