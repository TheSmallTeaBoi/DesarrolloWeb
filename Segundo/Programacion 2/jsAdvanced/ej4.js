const eventos = new Map();

function registrarEvento(descripcion) {
  timeStamp = Date.now();
  while (eventos.has(timeStamp)) {
    timeStamp = Date.now();
  }
  eventos.set(timeStamp, descripcion);
}

function obtenerEventosEntre({ inicio, fin }) {
  const eventosEntre = [];
  eventos.forEach((e, t) => {
    if (inicio < t && t < fin) {
      eventosEntre.push({ timeStamp: t, descripcion: e });
    }
  });
  return eventosEntre;
}

registrarEvento("evento 1");
registrarEvento("evento 2");
registrarEvento("evento 3");
const NOW = Date.now();
registrarEvento("evento 4");
registrarEvento("evento 5");
registrarEvento("evento 6");
registrarEvento("evento 7");
registrarEvento("evento 8");
const LATER = Date.now();
registrarEvento("evento 9");
registrarEvento("evento 10");
registrarEvento("evento 11");
registrarEvento("evento 12");

console.log(eventos);
console.log(obtenerEventosEntre({ inicio: NOW, fin: LATER }));
