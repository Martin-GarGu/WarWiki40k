import { useState, useEffect } from "react";

const EliminateFaction = () => {

    const [factions, setFactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const parsedUser = JSON.parse(userData);
            fetchFactions();
        } else {
            setLoading(false);
        }
    }, []);


    const fetchFactions = async () => {
        let isMounted = true; // Para verificar si el componente sigue montado
        try {
            const respuesta = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/factions`, {
                method: "GET",
            });

            if (!respuesta.ok) {
                throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
            }

            const contentType = respuesta.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const jsonData = await respuesta.json();
                if (isMounted) {
                    setFactions(jsonData.data);
                    setLoading(false);
                }
            } else {
                throw new Error("La respuesta no es JSON.");
            }
        } catch (error) {
            if (isMounted) {
                console.error("Error en la solicitud:", error);
                setError(`Error en la solicitud: ${error.message}`);
                setLoading(false);
            }
        }

        return () => {
            isMounted = false; // Limpiar el flag cuando el componente se desmonte
        };
    };

    const handleEliminate = async (id) => {
        try {
            // Realiza la solicitud DELETE al backend
            const response = await fetch(
                `http://${import.meta.env.VITE_APP_PETICION_IP}/api/factions/delete/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar la partida");
            }

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="m-2">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {factions.map((faction, index) => (
                        <tr key={index}>
                            <td>{faction.name}</td>
                            <td>
                                <button onClick={() => handleEliminate(faction.id)}>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

export default EliminateFaction;