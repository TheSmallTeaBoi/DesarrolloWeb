import Album from "./album.js";
import Cancion from "./cancion.js";
import Playlist from "./playlist.js";
import Reproduccion from "./reproduccion.js";
import Usuario from "./usuario.js";
import Artista from "./artista.js";

Cancion.belongsToMany(Playlist, { through: "PlaylistCancion" });
Playlist.belongsToMany(Cancion, { through: "PlaylistCancion" });

Cancion.belongsToMany(Artista, { through: "CancionArtista" });
Artista.belongsToMany(Cancion, { through: "CancionArtista" });

Album.belongsToMany(Artista, { through: "AlbumArtista" });
Artista.belongsToMany(Album, { through: "AlbumArtista" });

export { Album, Cancion, Playlist, Reproduccion, Usuario, Artista };
