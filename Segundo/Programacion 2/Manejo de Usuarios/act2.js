import usuarios from "./modules/usuarios.js";

function getNombresYCiudad() {
  let nombres = [];
  usuarios.forEach((e) => nombres.push(`${e.nombre} - ${e.domicilio.ciudad}`));
  return nombres;
}

console.log(getNombresYCiudad());
