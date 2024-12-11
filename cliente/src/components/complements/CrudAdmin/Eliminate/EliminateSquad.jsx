import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EliminateSquad = () => {
    const [squads, setSquads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");

        if (!userData) {
            navigate("/login"); // Si no hay usuario autenticado, redirige al login
            return;
        }

        const parsedUser = JSON.parse(userData);

        // Verificar si el usuario tiene el rol de admin
        if (parsedUser.role !== "admin") {
            navigate("/access-denied"); // Redirige a la página de acceso denegado si no es admin
        } else {
            fetchSquads();
        }
    }, [navigate]);

    const fetchSquads = async () => {
        let isMounted = true; // Para verificar si el componente sigue montado
        try {
            const respuesta = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads`, {
                method: "GET",
            });

            if (!respuesta.ok) {
                throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
            }

            const contentType = respuesta.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const jsonData = await respuesta.json();
                if (isMounted) {
                    setSquads(jsonData.data);
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
                `${import.meta.env.VITE_APP_PETICION_IP}/api/squads/delete/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar el escuadrón");
            }

            // Actualizar la lista de escuadrones después de la eliminación
            setSquads((prevSquads) =>
                prevSquads.filter((squad) => squad.id !== id)
            );
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="eliminate-squad-container">
            <h2>Eliminar Escuadrones</h2>
            {error && <div className="error-message">{error}</div>}
            {loading ? (
                <p>Cargando escuadrones...</p>
            ) : (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {squads.map((squad) => (
                                <tr key={squad.id}>
                                    <td>{squad.name}</td>
                                    <td>
                                        <button onClick={() => handleEliminate(squad.id)}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default EliminateSquad;
