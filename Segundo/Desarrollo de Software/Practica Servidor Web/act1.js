export default function getUsuariosActivos(usuarios) {
    return usuarios.filter((e) => e.activo);
}
