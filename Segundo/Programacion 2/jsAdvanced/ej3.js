function crearFiltroPorPropiedad(nombrePropiedad) {
  return (valorEsperado, objetos) => {
    return objetos.filter((e) => e[nombrePropiedad] == valorEsperado);
  };
}

const filtrarPorCiudad = crearFiltroPorPropiedad("ciudad");
const residentesMadrid = filtrarPorCiudad("Madrid", [
  { nombre: "Ana", ciudad: "Madrid" },
  { nombre: "Luis", ciudad: "Barcelona" },
]);

console.log(residentesMadrid);
