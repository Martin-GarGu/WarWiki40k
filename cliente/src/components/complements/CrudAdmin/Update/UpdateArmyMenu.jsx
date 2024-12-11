import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const UpdateArmyMenu = () => {
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
                fetchArmies(); // Solo se realiza la solicitud si es admin
            }
        } else {
            navigate("/login"); // Redirige al login si no hay usuario autenticado
        }
    }, [navigate]);

    const fetchArmies = async () => {
        let isMounted = true; // Para verificar si el componente sigue montado
        try {
            const respuesta = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/armies`, {
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

    const handleUpdate = async (army) => {
        navigate("/update/army", {state:{army}});
    };

    return (
        <div className="update-army-menu-container">
            <h1 className="update-army-menu-title">Modificar Ejércitos</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p className="update-army-menu-message error">{error}</p>
            ) : (
                <>
                    <table className="update-army-menu-table">
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
                                        <button onClick={() => handleUpdate(army)} className="update-army-menu-button">
                                            Editar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default UpdateArmyMenu;
