const tareas = new Map();

tareas.set("1", {
  descripcion: "Test 1",
  completado: false,
  etiquetas: ["test", "primera", "testEtiqueta"],
});
tareas.set("2", {
  descripcion: "Test 2",
  completado: false,
  etiquetas: ["test", "testing", "testEtiqueta"],
});
tareas.set("3", {
  descripcion: "Test 3",
  completado: false,
  etiquetas: ["test", "tets"],
});
tareas.set("4", {
  descripcion: "Test 4",
  completado: false,
  etiquetas: ["test", "final"],
});

function agregarTarea({ id, descripcion, etiquetas = [] }) {
  if (tareas.has(id) === false) {
    tareas.set(id, {
      descripcion: descripcion,
      completado: false,
      etiquetas: etiquetas,
    });
  } else console.log(`El ID ${id} ya existe. Salteando.`);
}

function marcarCompletada(id) {
  tareas.get(id).completado = true;
}

function obtenerTareasPorEtiqueta(etiqueta) {
  etiquetaInTarea = [];

  tareas.forEach((e) => {
    if (e.etiquetas.includes(etiqueta)) etiquetaInTarea.push(e);
  });
  return etiquetaInTarea;
}

function obtenerResumenTareas() {
  let completadas = 0;
  let pendientes = 0;
  tareas.forEach((e) => {
    if (e.completado) completadas++;
    else pendientes++;
  });
  return {
    total: tareas.size,
    completadas: completadas,
    pendientes: pendientes,
  };
}

agregarTarea({
  id: "5",
  descripcion: "Test 5",
  etiquetas: ["test", "nuevoFinal"],
});
agregarTarea({
  id: "2",
  descripcion: "Test 2",
  etiquetas: ["test", "nuevoFinal", "testEtiqueta"],
});

// console.log(tareas);
marcarCompletada("2");
// console.log(tareas);
// console.log(obtenerTareasPorEtiqueta("testEtiqueta"));
console.log(obtenerResumenTareas());
