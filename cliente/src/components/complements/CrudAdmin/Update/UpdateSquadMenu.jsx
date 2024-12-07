import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const UpdateSquadMenu = () => {
    const [squads, setSquads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (!userData) {
            navigate("/login"); // Redirige al login si no hay datos del usuario
        } else {
            const parsedUser = JSON.parse(userData);
            if (parsedUser.role !== 'admin') {  // Comprobar si el usuario es admin
                navigate("/access-denied"); // Redirige a la página de acceso denegado si el usuario no es admin
            } else {
                fetchArmies(); // Si es admin, obtener los escuadrones
            }
        }
    }, [navigate]);

    const fetchArmies = async () => {
        let isMounted = true; // Para verificar si el componente sigue montado
        try {
            const respuesta = await fetch(`http://${import.meta.env.VITE_APP_PETICION_IP}/api/squads`, {
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

    const handleUpdate = async (squad) => {
        navigate("/update/squad", { state: { squad } });
    };

    return (
        <div className="m-2">
            {loading && <div>Cargando escuadrones...</div>}
            {error && <div style={{ color: "red" }}>{error}</div>}
            {!loading && !error && squads.length === 0 && <div>No hay escuadrones disponibles.</div>}
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {squads.map((squad, index) => (
                        <tr key={index}>
                            <td>{squad.name}</td>
                            <td>
                                <button onClick={() => handleUpdate(squad)}>
                                    Editar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UpdateSquadMenu;
