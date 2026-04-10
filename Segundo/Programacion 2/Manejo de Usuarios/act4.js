import usuarios from "./modules/usuarios.js";

function promedioEdad() {
  const usuariosActivos = usuarios.filter((e) => e.activo);
  const total = usuariosActivos.reduce((acc, usuario) => acc + usuario.edad, 0);
  return total / usuariosActivos.length;
}

console.log(promedioEdad());
