const familiaDirecta = ["Carlos", "María", "José", "Ana", "Luis", "Laura"];
const familiaLejana = [
  "Héctor",
  "Graciela",
  "Ricardo",
  "Carmen",
  "Raúl",
  "Silvia",
  "Hugo",
];
const familiaPolitica = ["Roberto", "Susana", "Marcelo", "Mónica", "Javier"];

const amigosInfancia = [
  "Facundo",
  "Milagros",
  "Gonzalo",
  "Camila",
  "Joaquín",
  "Micaela",
];
const companerosTrabajo = [
  "Martín",
  "Sofía",
  "Federico",
  "Julia",
  "Maximiliano",
  "Florencia",
];
const companerosUniversidad = [
  "Tomás",
  "Agustina",
  "Santiago",
  "Valentina",
  "Lucas",
  "Martina",
];
const clubDeportivo = [
  "Diego",
  "Ariel",
  "Enzo",
  "Julián",
  "Franco",
  "Emiliano",
  "Lisandro",
];
const vecinos = ["Eduardo", "Teresa", "Oscar", "Beatriz", "Pablo", "Andrea"];

const confirmados = [
  "Carlos",
  "María",
  "Facundo",
  "Tomás",
  "Martín",
  "Sofía",
  "Diego",
];
const cancelados = ["Raúl", "Silvia", "Gonzalo", "Oscar"];
const sinResponder = [
  "José",
  "Ana",
  "Hugo",
  "Camila",
  "Federico",
  "Julia",
  "Andrea",
];
const listaDeEspera = [
  "Ezequiel",
  "Rocío",
  "Bautista",
  "Julieta",
  "Ignacio",
  "Antonella",
];

const invitadosVIP = ["Mirtha", "Marcelo", "Susana", "Guillermo", "Valeria"];
const vegetarianos = ["María", "Milagros", "Agustina", "Florencia", "Ignacio"];
const menoresDeEdad = ["Bautista", "Julieta", "Lisandro", "Micaela"];
const extranjeros = ["John", "Emma", "Pierre", "Sophie", "Hans", "Giulia"];

function procesarListas(...invitados) {
  const listaCompleta = [];
  let totalInvitados = 0;
  invitados.forEach((lista) =>
    lista.forEach((invitado) => {
      totalInvitados++;
      if (!listaCompleta.includes(invitado)) listaCompleta.push(invitado);
    }),
  );

  return {
    invitadosUnicos: listaCompleta,
    conteoTotalInvitados: totalInvitados,
    conteoInvitadosUnicos: listaCompleta.length,
  };
}

const {
  invitadosUnicos: lista,
  conteoTotalInvitados: totalLista,
  conteoInvitadosUnicos: totalUnicos,
} = procesarListas(confirmados, clubDeportivo, vecinos, companerosUniversidad);

console.log(lista);
console.log(totalLista);
console.log(totalUnicos);
