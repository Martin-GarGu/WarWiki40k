import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EliminateFaction = () => {
    const [factions, setFactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            const parsedUser = JSON.parse(userData);

            // Verificar si el usuario tiene el rol de "admin"
            if (parsedUser.role !== "admin") {
                navigate("/access-denied"); // Redirige a la página de acceso denegado si no es admin
            } else {
                fetchFactions(); // Solo se cargan las facciones si el usuario es admin
            }
        } else {
            navigate("/login"); // Redirige al login si no hay usuario autenticado
        }
    }, [navigate]);

    const fetchFactions = async () => {
        let isMounted = true; // Para verificar si el componente sigue montado
        try {
            const token = localStorage.getItem("token"); // Obtener el token del almacenamiento local
            const respuesta = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/factions`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`, // Añadir el token en el encabezado
                },
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
            const token = localStorage.getItem("token"); // Obtener el token del almacenamiento local
            const response = await fetch(
                `${import.meta.env.VITE_APP_PETICION_IP}/api/factions/delete/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`, // Añadir el token en el encabezado
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar la facción");
            }

            // Después de eliminar, actualizar la lista de facciones
            setFactions((prevFactions) => prevFactions.filter((faction) => faction.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="eliminate-faction-container">
            {loading && <p className="loading-message">Cargando facciones...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && !error && factions.length === 0 && <p>No hay facciones disponibles.</p>}

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Acciones</th>
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
        </div>
    );
};

export default EliminateFaction;
