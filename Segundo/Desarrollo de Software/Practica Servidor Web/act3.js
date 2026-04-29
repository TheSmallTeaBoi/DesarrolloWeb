import usuarios from "./modules/usuarios.js";

export default function agruparPorCiudad() {
    const agrupado = usuarios.reduce((acc, usuario) => {
        const ciudad = usuario.domicilio.ciudad;
        if (!acc[ciudad]) {
            acc[ciudad] = [];
        }
        acc[ciudad].push(usuario.nombre);
        return acc;
    }, {});

    return agrupado;
}
