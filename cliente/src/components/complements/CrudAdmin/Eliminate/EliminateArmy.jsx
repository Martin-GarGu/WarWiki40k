import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EliminateArmy = () => {
    const [armies, setArmies] = useState([]);
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
                fetchArmies(); // Solo se cargan las tropas si el usuario es admin
            }
        } else {
            navigate("/login"); // Redirige al login si no hay usuario autenticado
        }
    }, [navigate]);

    const fetchArmies = async () => {
        let isMounted = true; // Para verificar si el componente sigue montado
        try {
            const respuesta = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/armies`, {
                method: "GET",
            });

            if (!respuesta.ok) {
                throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
            }

            const contentType = respuesta.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const jsonData = await respuesta.json();
                if (isMounted) {
                    setArmies(jsonData.data);
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
                `http://${import.meta.env.VITE_APP_PETICION_IP}/api/armies/delete/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar el ejército");
            }

            // Después de eliminar, actualizar la lista de ejércitos
            setArmies((prevArmies) => prevArmies.filter((army) => army.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="m-2">
            {loading && <p>Cargando ejércitos...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && armies.length === 0 && <p>No hay ejércitos disponibles.</p>}
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {armies.map((army, index) => (
                        <tr key={index}>
                            <td>{army.name}</td>
                            <td>
                                <button onClick={() => handleEliminate(army.id)}>
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

export default EliminateArmy;
