import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function UpdateSoldierMenu() {
    const [soldiers, setSoldiers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (!userData) {
            navigate("/login"); // Si no hay usuario en localStorage, redirige al login
        } else {
            const parsedUser = JSON.parse(userData);
            if (parsedUser.role !== 'admin') {
                navigate("/access-denied"); // Si el usuario no es admin, redirige a acceso denegado
            } else {
                fetchSoldiers(); // Si el usuario es admin, se obtienen los soldados
            }
        }
    }, [navigate]);

    const fetchSoldiers = async () => {
        let isMounted = true; // Para verificar si el componente sigue montado
        try {
            const token = localStorage.getItem("token"); // Obtiene el token del almacenamiento local
            const respuesta = await fetch(`${import.meta.env.VITE_APP_PETICION_IP}/api/soldiers`, {
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

    const handleUpdate = async (soldier) => {
        navigate("/update/soldier", { state: { soldier } });
    };

    return (
        <div className="update-soldier-menu-container">
            <h1 className="update-soldier-menu-title">Modificar Soldados</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p className="update-soldier-menu-message error">{error}</p>
            ) : (
                <div className="update-soldier-menu-table-container">
                    <table className="update-soldier-menu-table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {soldiers.map((soldier, index) => (
                                <tr key={index}>
                                    <td>{soldier.name}</td>
                                    <td>
                                        <button onClick={() => handleUpdate(soldier)} className="update-soldier-menu-button">
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
}
