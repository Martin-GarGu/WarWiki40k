import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EliminateSoldier = () => {
    const [soldiers, setSoldiers] = useState([]);
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
            fetchSoldiers();
        }
    }, [navigate]);

    const fetchSoldiers = async () => {
        let isMounted = true; // Para verificar si el componente sigue montado
        try {
            const respuesta = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/soldiers`, {
                method: "GET",
            });

            if (!respuesta.ok) {
                throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
            }

            const contentType = respuesta.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                const jsonData = await respuesta.json();
                if (isMounted) {
                    setSoldiers(jsonData.data);
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
                `http://${import.meta.env.VITE_APP_PETICION_IP}/api/soldiers/delete/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar el soldado");
            }

            // Actualizar la lista de soldados después de la eliminación
            setSoldiers((prevSoldiers) =>
                prevSoldiers.filter((soldier) => soldier.id !== id)
            );
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="m-2">
            <h2>Eliminar Soldados</h2>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {loading ? (
                <p>Cargando soldados...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {soldiers.map((soldier) => (
                            <tr key={soldier.id}>
                                <td>{soldier.name}</td>
                                <td>
                                    <button onClick={() => handleEliminate(soldier.id)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default EliminateSoldier;
