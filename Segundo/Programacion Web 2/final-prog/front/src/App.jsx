import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [libros, setLibros] = useState([]);
    const [openLibro, setOpenLibro] = useState(null);
    const [detallesLibro, setDetallesLibro] = useState(null);
    const [openTaller, setOpenTaller] = useState(null);
    const [detallesTaller, setDetallesTaller] = useState(null);
    const [talleres, setTalleres] = useState([]);

    const api = axios.create({
        baseURL: "http://localhost:3000/api/",
        timeout: 1000,
    });

    async function fetchInfo(id, setter, selectedSetter, apiname) {
        try {
            const response = await api.get(`${apiname}/${id}`);
            setter(response.data);
            selectedSetter(id);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchLibros = async () => {
            try {
                const response = await api.get("libros");
                setLibros(response.data);
            } catch (error) {
                console.error("Error: ", error);
            }
        };
        fetchLibros();
    }, []);

    useEffect(() => {
        const fetchTalleres = async () => {
            try {
                const response = await api.get("talleres");
                setTalleres(response.data);
            } catch (error) {
                console.error("Error: ", error);
            }
        };
        fetchTalleres();
    }, []);

    return (
        <div className="">
            <h1 className="text-primary">Libros</h1>

            <div className="libros">
                {libros.map((libro) => {
                    return (
                        <p key={libro.id} className="text-primary">
                            <button
                                className="button"
                                onClick={() =>
                                    fetchInfo(
                                        libro.id,
                                        setDetallesLibro,
                                        setOpenLibro,
                                        "libros",
                                    )
                                }
                            >
                                {libro.titulo} por {libro.autor}{" "}
                                <span className="tag">
                                    {libro.paginas} pag.
                                </span>
                            </button>
                            {openLibro === libro.id && (
                                <div className="card">
                                    <p className="tag">
                                        {detallesLibro.editorial}
                                    </p>
                                    <p className="">
                                        Sinopsis: {detallesLibro.sinopsis}
                                    </p>
                                </div>
                            )}
                        </p>
                    );
                })}
            </div>

            <h1 className="text-primary">Talleres</h1>

            <div className="talleres">
                {talleres.map((taller) => {
                    return (
                        <p key={taller.id} className="text-primary">
                            <button
                                className="button"
                                onClick={() =>
                                    fetchInfo(
                                        taller.id,
                                        setDetallesTaller,
                                        setOpenTaller,
                                        "talleres",
                                    )
                                }
                            >
                                {taller.nombre} por {taller.profesor}{" "}
                                <span className="tag">{taller.diaHorario}</span>
                            </button>
                            {openTaller === taller.id && (
                                <div className="card">
                                    <p className="tag">
                                        {detallesTaller.duracionMeses} meses
                                    </p>
                                    <p className="">
                                        Requisitos: {detallesTaller.requisitos}
                                    </p>
                                </div>
                            )}
                        </p>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
