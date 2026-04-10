import usuarios from "./modules/usuarios.js";

function getUsuariosActivos() {
  return usuarios.filter((e) => e.activo);
}

console.log(getUsuariosActivos());
