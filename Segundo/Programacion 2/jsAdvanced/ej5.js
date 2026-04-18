const usuarios = [
  {
    id: 1,
    nombre_completo: "Ana Pérez",
    email: "ana.perez@example.com",
    detalles: { edad: 30, pais_residencia: "ES", profesion: "Ingeniera" },
  },
  {
    id: 2,
    nombre_completo: "Carlos Gómez",
    email: "carlos.g@example.com",
    detalles: { edad: 25, pais_residencia: "MX", profesion: "Diseñador" },
  },
  {
    id: 3,
    nombre_completo: "María Silva",
    email: "maria.s@example.com",
    detalles: { edad: 28, pais_residencia: "AR", profesion: "Docente" },
  },
  {
    id: 4,
    nombre_completo: "John Doe",
    email: "john.d@example.com",
    detalles: { edad: 35, pais_residencia: "US", suscripcion: "Premium" },
  },
  {
    id: 5,
    nombre_completo: "Laura Torres",
    email: "laura.t@example.com",
    detalles: { edad: 42, pais_residencia: "ES", profesion: "Médica" },
  },
  {
    id: 6,
    nombre_completo: "Pedro Martínez",
    email: "pedro.m@example.com",
    detalles: { edad: 22, pais_residencia: "CO" },
  },
  {
    id: 7,
    nombre_completo: "Sofía Rossi",
    email: "sofia.r@example.com",
    detalles: { edad: 29, pais_residencia: "IT", rol: "Admin" },
  },
  {
    id: 8,
    nombre_completo: "Luis Fernández",
    email: "luis.f@example.com",
    detalles: { edad: 31, pais_residencia: "AR", profesion: "Arquitecto" },
  },
  {
    id: 9,
    nombre_completo: "Yuki Tanaka",
    email: "yuki.t@example.com",
    detalles: { edad: 27, pais_residencia: "JP", idioma: "Japonés" },
  },
  {
    id: 10,
    nombre_completo: "Elena Rojas",
    email: "elena.r@example.com",
    detalles: { edad: 34, pais_residencia: "MX", profesion: "Abogada" },
  },
];

function transformarYAgruparUsuarios(usuariosApi, ...propiedadesAdicionales) {
  let agrupadosPorPais = new Map();

  const usuariosTransformados = usuariosApi.map((usuario) => {
    const propiedadesExtraidas = {};
    for (const propiedad of propiedadesAdicionales) {
      if (usuario.detalles[propiedad] !== undefined) {
        propiedadesExtraidas[propiedad] = usuario.detalles[propiedad];
      }
    }

    if (propiedadesExtraidas.pais_residencia !== undefined) {
      const residencia = usuario.detalles.pais_residencia;
      if (!agrupadosPorPais.has(residencia)) {
        agrupadosPorPais.set(residencia, new Set());
      }
      agrupadosPorPais.get(residencia).add(usuario.id);
    }

    return {
      userId: usuario.id,
      nombre: usuario.nombre_completo.split(" ")[0],
      email: usuario.email,
      ...propiedadesExtraidas,
    };
  });

  return {
    usuariosTransformados: usuariosTransformados,
    usuariosPorPais: agrupadosPorPais,
  };
}

console.log(transformarYAgruparUsuarios(usuarios, "edad", "pais_residencia"));
