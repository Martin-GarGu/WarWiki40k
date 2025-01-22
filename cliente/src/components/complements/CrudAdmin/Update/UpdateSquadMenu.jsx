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
                fetchSquads(); // Si es admin, obtener los escuadrones
            }
        }
    }, [navigate]);

    const fetchSquads = async () => {
        let isMounted = true; // Para verificar si el componente sigue montado
        try {
            const token = localStorage.getItem("token"); // Obtiene el token del almacenamiento local
            const respuesta = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/squads`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`, // Añade el token al encabezado
                },
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
        <div className="update-squad-menu-container">
            <h1 className="update-squad-menu-title">Modificar Escuadrones</h1>
            {loading ? (
                <p className="update-squad-menu-message">Cargando escuadrones...</p>
            ) : error ? (
                <p className="update-squad-menu-message error">{error}</p>
            ) : squads.length === 0 ? (
                <p className="update-squad-menu-message">No hay escuadrones disponibles.</p>
            ) : (
                <div className="update-squad-menu-table-container">
                    <table className="update-squad-menu-table">
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
                                        <button
                                            onClick={() => handleUpdate(squad)}
                                            className="update-squad-menu-button"
                                        >
                                            Editar
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

export default UpdateSquadMenu;
