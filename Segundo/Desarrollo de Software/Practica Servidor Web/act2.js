export default function getNombresYCiudad(usuarios) {
    let nombres = [];
    usuarios.forEach((e) =>
        nombres.push(`${e.nombre} - ${e.domicilio.ciudad}`),
    );
    return nombres;
}
